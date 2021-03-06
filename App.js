

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import Login from './App/components/screens/loginScreen/login';
import Forgot from './App/components/screens/forgotpassword/forgot';
import Register from './App/components/screens/registerscreen/register';
import Home from './App/components/screens/homescreen/home';
import SideBar from './App/components/screens/sidebar/sidebar';
import Startup from './App/components/screens/loginScreen/Startup';
import Productlist from './App/components/screens/productlistscreen/productlist';
import Productdetail from './App/components/screens/productlistscreen/productdetail';

import { AsyncStorage } from 'react-native';

export default class App extends Component {





    render() {
        return (
            <RootStack />
        );
    }
}



const DrawerNavigator = createDrawerNavigator(
    {
        Home: Home,

    },

    {
        contentComponent: (props) => {
            return <SideBar navigation={props.navigation} />

        }
    }

);


const RootStack = createStackNavigator(
    {
        Login: Login,
        Forgot: Forgot,
        Register: Register,
        Startup: Startup,
        Productlist: Productlist,
        Productdetail: Productdetail,

        DrawerNavigator: DrawerNavigator
    },
    {
        initialRouteName: 'Startup',
        navigationOptions: {
            header: null,
        }
    },
);
