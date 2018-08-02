import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from "./homeStyle";




export default class Home extends Component{
  
   
 

  
    render() {
      
      return (

        <View style={{flex:1}}> 
        <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
        <View style={{flex:2,borderColor:'blue',borderWidth:2,flexDirection:'row'}}>
        <Text style={styles.text}>NeoSTORE</Text>
        </View>
        <View style={{flex:6,borderColor:'blue',borderWidth:2,flexDirection:'row'}}></View>
        <View style={{flex:4,borderColor:'blue',borderWidth:2,flexDirection:'row'}}></View>
        <View style={{flex:4,borderColor:'blue',borderWidth:2,flexDirection:'row'}}></View>

        </ImageBackground>
        </View>
    );
}
}