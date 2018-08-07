

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';
import Login from './App/components/screens/loginScreen/login';
import Forgot from './App/components/screens/forgotpassword/forgot';
import Register from './App/components/screens/registerscreen/register';
import Home from './App/components/screens/homescreen/home';
import SideBar from './App/components/screens/sidebar/sidebar.js';
export default class App extends Component {
  render() {
    return (
       <RootStack/>
    );
  }
}



const DrawerNavigator = createDrawerNavigator(
  {
    Home:Home,
    
  },
 
  {contentComponent: (props) => 
    
  { return  <SideBar/>}
      
  }
  
);

const RootStack = createStackNavigator(
  {
    Login: Login,
    Forgot: Forgot,
    Register: Register,
   
    DrawerNavigator:DrawerNavigator
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header:null, 
    }
  },  
);

