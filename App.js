

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './App/components/screens/loginScreen/login';
import Forgot from './App/components/screens/forgotpassword/forgot';
import Register from './App/components/screens/registerscreen/register';
import Home from './App/components/screens/homescreen/home';
export default class App extends Component {
  render() {
    return (
     //<Login/>
      //<Forgot/>
      //<Register/>
       <RootStack />
    );
  }
}
const RootStack = createStackNavigator(
  {
  
    loginscreen: Login,
    forgotpassword: Forgot,
    register: Register,
    home:Home,
  },
  {
    initialRouteName: 'loginscreen',
    navigationOptions: {
      header:null,
  
      
      
    }
  },
  
);


