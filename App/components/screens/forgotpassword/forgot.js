import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import styles from "./forgotStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Header from '../../../components/Header/Header';
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
export default class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmpassword: ''
        };
    }

    forgot() {
        let formData = new FormData();
        formData.append('email', this.state.username)
        apicall(url.host + url.forgot, 'POST', formData, null, (response) => {

            if (response.status == 200) {

                alert(response.user_msg);
                this.props.navigation.navigate('Login');


            } else {
                if (response.hasOwnProperty('user_msg')) {
                    alert(response.user_msg);
                }
                else {
                    alert(response.message);
                }
            }



        });


    }

    validate = () => {
        //username
        let regex = /^[a-zA-Z]\w+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        if (this.state.username == '' || !regex.test(this.state.username)) {
            alert('enter valid Username');
            return false;
        }


        else {
            this.forgot();
            //this.props.navigation.navigate('login');
        }
    }





    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Forgot Password'}
                    back={() => this.props.navigation.goBack(null)} />

                <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
                    <ScrollView>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.texthead}>NeoSTORE</Text>
                            <Text style={styles.textforgot}>Forgot Your Password ?</Text>
                            <Text style={styles.textforgot1}>Please enter username you provided during the registration process..</Text>
                        </View>

                        <View style={{ flex: 5 }}>
                            <View style={styles.userContainer}>
                                <Icon name="user" size={25} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.txtinpt}


                                    placeholder="Username" placeholderTextColor="white"
                                    onChangeText={(username) => this.setState({ username })} value={this.state.username}></TextInput>
                            </View>
                            {/* <View style={styles.userContainer}>
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
      */}
                            <TouchableOpacity style={styles.btnlogin} onPress={this.validate}>
                                <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold' }} onPress={this.validate}>SEND ME CODE</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>

            </View>




        );
    }
}
