import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from "./loginStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'ashwini@gmail.com',
            password: 'ashwini123'
        };
    }




    login = () => {

        let formData = new FormData();
        formData.append('email', this.state.username)
        formData.append('password', this.state.password)
        apicall(url.host + url.login, 'POST', formData, null, this.callback = (response) => {

            if (response.status == 200) {
                console.log(response.data)
                AsyncStorage.setItem('access_token', response.data.access_token, () => {
                    this.userFetchDetails();

                });
            } else
                alert(response.user_msg);


        });

    }

    userFetchDetails = () => {
        apicall(url.host + url.userdata, 'GET', null, null, this.callback = (response) => {
            if (response.status == 200) {
                alert(" login successful");
                this.props.navigation.replace('DrawerNavigator', response)

            }
            else {
                console.log(response.status)
                alert('something went wrong');
            }
        })

    }


    validate = () => {
        //username
        let regex = /^[a-zA-Z]\w+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        if (this.state.username == '' || !regex.test(this.state.username)) {
            alert('Invalid Username');
            return false;
        }

        //password
        let regex1 = /^[a-zA-Z0-9]{8,12}$/;

        if (this.state.password == '' || !regex1.test(this.state.password)) {
            alert('enter strong password');
            return false;
        }

        else {


            this.login();



        }

    }




    render() {
        return (
            <View style={styles.container}>

                <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >

                    <View style={styles.container1}>

                        <Text style={styles.text}>NeoSTORE</Text>
                    </View>

                    <View style={styles.container2}>
                        <View style={styles.userContainer}>
                            <Icon name="user" style={styles.icon} size={25} color="#fff" />
                            <TextInput style={styles.txtinpt}


                                placeholder="Username" placeholderTextColor="white"
                                onChangeText={(username) => this.setState({ username })} value={this.state.username}
                            ></TextInput>
                        </View>

                        <View style={styles.userContainer}>
                            <Icon name="lock" size={25} style={styles.icon} color="#fff" />
                            <TextInput style={styles.txtinpt}

                                placeholder="Password" placeholderTextColor="white"
                                onChangeText={(password) => this.setState({ password })} value={this.state.password} secureTextEntry={true}  ></TextInput>
                        </View>

                        <TouchableOpacity style={styles.btnlogin}
                            onPress={this.validate}
                        >
                            <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }} onPress={this.validate}>LOGIN</Text>
                        </TouchableOpacity>

                        <Text style={styles.textforgot}
                            onPress={() => this.props.navigation.navigate('Forgot')}>
                            Forgot Password?</Text>
                    </View>


                    <View style={styles.container3}>
                        <View style={{ flex: 3, justifyContent: 'center' }}>
                            <Text style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 'bold', marginLeft: 5 }} onPress={() => this.props.navigation.navigate('Register')}>DONT HAVE AN ACCOUNT?</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={styles.box}>
                                <Icon name="plus" size={40} color="#fff" onPress={() => this.props.navigation.navigate('Register')} />
                            </View>

                        </View>
                    </View>


                </ImageBackground>
            </View>

        );
    }
}
