import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/AppTabNavigator';

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

const SwitchNavigator = createSwitchNavigator({
  Login: {screen: Login},
  App_Tab_Navigator: {screen: AppTabNavigator}
},
{initialRouteName : 'App_Tab_Navigator'}
);

const AppContainer = createAppContainer(SwitchNavigator);
