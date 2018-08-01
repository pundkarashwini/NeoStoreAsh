import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from "./loginStyle";
import {Icon} from 'react-native-vector-icons/dist/FontAwesome';




export default class Login extends Component{
  

  render() {
    return (
      <View style={styles.container}> 
          
        <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
     
     <View style={styles.container1}>
     
     <Text style={styles.text}>NeoStore</Text>
     </View>
     
     <View style={styles.container2}>
     <View style={styles.userContainer}>
     <Icon name="user" size={25} color="#fff" />
     <TextInput style={{fontSize:25,marginLeft:15}}
          placeholder="Username" placeholderTextColor="white"></TextInput>
      </View>

      <View style={styles.userContainer}>
      <Icon name="lock" size={25} color="#fff" />
      <TextInput style={{fontSize:25,marginLeft:15}}
          placeholder="Password" placeholderTextColor="white" ></TextInput>
</View>

          <TouchableOpacity style={styles.btnlogin} >        
          <Text style={{color:'red',fontSize:30,fontWeight: 'bold'}}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={styles.textforgot}>Forgot Password?</Text>
     </View>
     
     
     <View style={styles.container3}>
         <View style={{flex: 3,justifyContent:'center'}}>
        <Text style={{ color:'#FFFFFF', fontSize:20,fontWeight: 'bold',marginLeft:5}}>DONT HAVE AN ACCOUNT?</Text>
       </View>
      <View style={{flex: 1,justifyContent:'center'}}>
              <View style={styles.box}>
              <Icon name="plus" size={40} color="#fff" />
              </View>
             
             </View>
     </View>
          
          
          </ImageBackground>
      </View>

    );
  }
}
