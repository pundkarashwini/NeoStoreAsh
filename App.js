

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator,createDrawerNavigator,DrawerItems } from 'react-navigation';
import Login from './App/components/screens/loginScreen/login';
import Forgot from './App/components/screens/forgotpassword/forgot';
import Register from './App/components/screens/registerscreen/register';
import Home from './App/components/screens/homescreen/home';
import SideBar from './App/components/screens/sidebar/sidebar';
import {AsyncStorage} from 'react-native';

export default class App extends Component {
  
  async componentWillMount()
  {
    const loggedIn = AsyncStorage.getItem('email');

  }
  

  render() {
  if (!this.state.loggedIn)
    return (
     <RootStack/>
            );
    else{
      return (
     <Stack/>
    );
      }
  }
}



const DrawerNavigator = createDrawerNavigator(
  {
    Home:Home,
    
  },
 
  {contentComponent: (props) => 
    
  { return  <SideBar navigation ={props.navigation}/>
      
  }
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

const Stack = createStackNavigator(
  {
    Login: Login,
    Forgot: Forgot,
    Register: Register,
   
    DrawerNavigator:DrawerNavigator
  },
  {
    initialRouteName: 'DrawerNavigator',
    navigationOptions: {
      header:null, 
    }
  },  
);

