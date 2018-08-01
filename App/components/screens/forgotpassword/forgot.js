import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from "./forgotStyle";
import {Icon,Header} from 'react-native-vector-icons/dist/FontAwesome';



export default class Forgot extends Component{
  

    render() {
      return (
<View style={{flex:1}}> 

<ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
</ImageBackground>
</View>




    );
}
}
