import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from "./forgotStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';



export default class Forgot extends Component{
  

    render() {
      return (
<View style={{flex:1}}> 

<ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
<View style={{flex:1}}>
<Icon name="angle-left" size={50} color="white" style={styles.icon} onPress={() => this.props.navigation.goBack()}/>

</View>
<View style={{flex:2}}>
<Text style={styles.texthead}>NeoSTORE</Text>
<Text style={styles.textforgot}>Forgot Your Password ?</Text>
<Text style={styles.textforgot1}>Please enter username you provided during the registration process..</Text>
</View>

<View style={{flex:5}}>
<View style={styles.userContainer}>
     <Icon name="user" size={25} color="#fff" />
     <TextInput style={styles.txtinpt}
          placeholder="Username" placeholderTextColor="white"></TextInput>
</View>
<View style={styles.userContainer}>
      <Icon name="lock" size={25} color="#fff" />
      <TextInput style={styles.txtinpt}
secureTextEntry={true}            placeholder="New Password" placeholderTextColor="white" ></TextInput>
</View>
<View style={styles.userContainer}>
      <Icon name="lock" size={25} color="#fff" />
      <TextInput style={styles.txtinpt} secureTextEntry={true}  
          placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
</View>
      
      <TouchableOpacity style={styles.btnlogin} onPress={() => this.props.navigation.navigate('loginscreen')}>        
          <Text style={{color:'red',fontSize:20,fontWeight: 'bold'}} >RESET PASSWORD</Text>
        </TouchableOpacity>
</View>
</ImageBackground>
</View>




    );
}
}
