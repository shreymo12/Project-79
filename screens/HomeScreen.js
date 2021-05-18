import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Modal, ScrollView, FlatList} from 'react-native';
import db from '../config';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            BarterList: [],
            list: []
        }
        this.requestRef = null;
    }

    getRequestedList=async()=>{
        this.requesttRef = db.collection('BarterItems')
        .onSnapshot((snapshot)=>{
            var requestedList= snapshot.docs.map((doc)=>{
                doc.data();
            });
            this.setState({ BarterList: requestedList});
            console.log(this.state.BarterList);
        });
    }


    keyExtractor=(item,index)=>{index.toString()}
    renderItem=(Item,I)=>{
    return
     <ListItem key={I} 
     title={item.ItemName} 
     subtitle={item.ReasonItemDescription} 
     titleStyle={{color:'#000', fontWeight:'cursive'}} 
     rightElement={
     <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}> View </Text>
     </TouchableOpacity>}
     bottomDivider
     />}

    render(){
        return(
            <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={()=>{this.getRequestedList()}}><Text style={styles.buttonText}>get Items</Text></TouchableOpacity>
     <View>{this.state.BarterList.length === 0 ? (
         <View><Text> List of All Requested Items</Text> </View>
     ): 
     <FlatList
     keyExtractor={this.keyExtractor()}
     data={this.state.BarterList}
     renderItem={this.renderItem()}
     />
     }</View>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
     flex:1,
     alignItems: 'center',
     justifyContent: 'center'
   },
   profileContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
   },
   title :{
     fontSize:65,
     fontWeight:'300',
     paddingBottom:30,
     color : '#ff3d00'
   },
   loginBox:{
     width: 300,
     height: 40,
     borderBottomWidth: 1.5,
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:10,
     paddingLeft:10
   },
   KeyboardAvoidingView:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
   },
   modalTitle :{
     justifyContent:'center',
     alignSelf:'center',
     fontSize:30,
     color:'#ff5722',
     margin:50
   },
   modalContainer:{
     flex:1,
     borderRadius:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:"#ffff",
     marginRight:30,
     marginLeft : 30,
     marginTop:80,
     marginBottom:80,
   },
   formTextInput:{
     width:"70%",
     height:35,
     alignSelf:'center',
     borderColor:'#ffab91',
     borderRadius:10,
     borderWidth:1,
     marginTop:20,
     padding:10
   },
   formTextInput1:{
    width:"70%",
    height:55,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
   registerButton:{
     width:200,
     height:40,
     alignItems:'center',
     justifyContent:'center',
     borderWidth:1,
     borderRadius:10,
     marginTop:30
   },
   registerButtonText:{
     color:'#ff5722',
     fontSize:15,
     fontWeight:'bold'
   },
   cancelButton:{
     width:200,
     height:30,
     justifyContent:'center',
     alignItems:'center',
     marginTop:5,
   },
  
   button:{
     width:300,
     height:50,
     justifyContent:'center',
     alignItems:'center',
     borderRadius:25,
     backgroundColor:"#ff9800",
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16,
     padding: 10,
     margin: 10
   },
   buttonText:{
     color:'#ffff',
     fontWeight:'200',
     fontSize:20
   }
  });