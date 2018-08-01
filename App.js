

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './App/components/screens/loginScreen/login';
import Forgot from './App/components/screens/forgotpassword/forgot';

export default class App extends Component {
  render() {
    return (
      //<Login/>
      <Forgot/>
    );
  }
}

