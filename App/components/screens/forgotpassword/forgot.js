import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import styles from "./forgotStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';



export default class Forgot extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:'',
            confirmpassword:''
        };
    }
    validate=()=>{
        //username
        let regex = /^[a-zA-Z]\w+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        if(this.state.username=='' || !regex.test(this.state.username)){
          alert('enter valid Username');
          return false;
        }
        
       //password
     let  regex1= /^[a-zA-Z0-9]{8,12}$/;
     
     if(this.state.password==''||!regex1.test(this.state.password))
     {
       alert('enter strong password');
       return false;
     }
     //confirm password
     if(this.state.password!=this.state.confirmpassword)
{
    alert('enter same as password');
    return false;
}else
     this.props.navigation.navigate('loginscreen')
      }
    
    render() {
      return (
<View style={{flex:1}}> 

<ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >

<View style={{flex:1}}>
<Icon name="angle-left" size={50} color="white" style={styles.icon} onPress={() => this.props.navigation.goBack()}/>

</View>
<View style={{flex:3}}>
<Text style={styles.texthead}>NeoSTORE</Text>
<Text style={styles.textforgot}>Forgot Your Password ?</Text>
<Text style={styles.textforgot1}>Please enter username you provided during the registration process..</Text>
</View>

<View style={{flex:5}}>
<View style={styles.userContainer}>
     <Icon name="user" size={25} style={styles.icontxt} color="#fff" />
     <TextInput style={styles.txtinpt}
     
     
          placeholder="Username" placeholderTextColor="white"
          onChangeText={(username) => this.setState({username})} value={this.state.username}></TextInput>
</View>
<View style={styles.userContainer}>
      <Icon name="lock" size={25} style={styles.icontxt} color="#fff" />
      <TextInput style={styles.txtinpt} onChangeText={(password) => this.setState({password})} value={this.state.password}
secureTextEntry={true}    

placeholder="New Password" placeholderTextColor="white" ></TextInput>
</View>
<View style={styles.userContainer}>
      <Icon name="lock" size={25}style={styles.icontxt} color="#fff" />
      <TextInput style={styles.txtinpt} secureTextEntry={true}  
     
          onChangeText={(confirmpassword) => this.setState({confirmpassword})} value={this.state.confirmpassword}
          placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
</View>
      
      <TouchableOpacity style={styles.btnlogin} onPress={this.validate}>        
          <Text style={{color:'red',fontSize:20,fontWeight: 'bold'}} onPress={this.validate}>RESET PASSWORD</Text>
        </TouchableOpacity>
</View> 
</ImageBackground>
</View>




    );
}
}
