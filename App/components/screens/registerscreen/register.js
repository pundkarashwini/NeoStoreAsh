import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Text, View, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from "./registerStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CheckBox from 'react-native-check-box';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import * as color from '../../../utils/color';
import Header from '../../../components/Header/Header';
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
var gender = [
    { label: "Male", value: 0 },
    { label: "Female", value: 1 }
];

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmpassword: '',
            phone: '',

            check: false,
        }
    }
    register() {
        let formData = new FormData();
        formData.append('first_name', this.state.fname)
        formData.append('last_name', this.state.lname)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('confirm_password', this.state.confirmpassword)
        formData.append('gender', this.state.gender)
        formData.append('phone_no', this.state.phone)
        apicall(url.host + url.register, 'POST', formData, null, this.callBack = (response) => {

            if (response.status == 200) {

                alert("successful");
                this.props.navigation.navigate('Login');

            } else
                alert(response.user_msg);


        });


    }


    validate = () => {
        //fname
        let v1 = /^[a-zA-ZÀ-ÿ]+$/;
        if (this.state.fname == '') {
            Alert.alert('enter  firstname');
            return false;
        }
        else {
            if (!v1.test(this.state.fname)) {
                alert('enter valid first name');
                return false;
            }
        }
        //lname    
        let v2 = /^[a-zA-ZÀ-ÿ]+$/;
        if (this.state.lname == '') {
            Alert.alert('enter  lastname');
            return false;
        }
        else {
            if (!v2.test(this.state.lname)) {
                alert('enter valid last name');
                return false;
            }
        }

        //email
        let regex = /^[a-zA-Z]\w+([\.-]?\w+)*@\w+([\.-]?\w+){1}(\.\w{2,3})$/;
        if (this.state.username == '') {
            Alert.alert('enter email');
            return false;
        }
        else {
            if (!regex.test(this.state.email)) {
                alert('enter valid email');
                return false;
            }
        }

        //password
        let regex1 = /^[a-zA-Z0-9]{8,12}$/;

        if (this.state.password == '' || !regex1.test(this.state.password)) {
            alert('enter strong password');
            return false;
        }
        //confirm pswd
        if (this.state.password != this.state.confirmpassword) {
            alert('enter same as password');
            return false;
        }


        //phone
        var pattern = /^([0-9*\+\#]){10,13}$/;
        if (this.state.phone == '') {
            alert('enter phone no');
            return false;
        }
        else {
            if (!pattern.test(this.state.phone)) {
                alert('enter valid no');
                return false;
            }
        }
        //check
        if (this.state.check == false) {
            alert(' you must agree terms & conditions ');
            return false;
        }
        else
            this.register();

    }//end validate








    render() {

        return (

            <View style={{ flex: 1, }}>
                <Header title={'Register'}
                    back={() => this.props.navigation.goBack(null)} />
                <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
                    <ScrollView>

                        <View style={{ flex: 3, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Text style={styles.text}>NeoSTORE</Text>
                        </View>

                        <View style={{ flex: 16, }}>
                            <View style={styles.userContainer}>
                                <Icon name="user" size={25} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext}


                                    onChangeText={(fname) => this.setState({ fname })} value={this.state.fname}
                                    placeholder="First Name" placeholderTextColor="white"></TextInput>
                            </View>
                            <View style={styles.userContainer}>
                                <Icon name="user" size={25} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext}

                                    onChangeText={(lname) => this.setState({ lname })} value={this.state.lname}
                                    placeholder="Last Name" placeholderTextColor="white"></TextInput>
                            </View>
                            <View style={styles.userContainer}>
                                <Icon name="envelope" size={20} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext}

                                    onChangeText={(email) => this.setState({ email })} value={this.state.email}
                                    placeholder="Email " placeholderTextColor="white"></TextInput>
                            </View>
                            <View style={styles.userContainer}>
                                <Icon name="lock" size={25} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext} secureTextEntry={true}


                                    onChangeText={(password) => this.setState({ password })} value={this.state.password}
                                    placeholder="Password" placeholderTextColor="white" ></TextInput>
                            </View>
                            <View style={styles.userContainer}>
                                <Icon name="lock" size={25} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext}

                                    onChangeText={(confirmpassword) => this.setState({ confirmpassword })} value={this.state.confirmpassword}
                                    secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.userContainer1}>
                                <Text style={styles.textgen}>Gender </Text>
                                <RadioForm
                                    radio_props={gender}
                                    initial={0}
                                    formHorizontal={true}
                                    buttonColor={'#ffffff'}
                                    buttonSize={10}
                                    buttonStyle={{ marginLeft: 50, marginTop: 15 }}

                                    selectedButtonColor="white"
                                    labelStyle={{ fontSize: 20, color: '#ffffff', fontWeight: 'bold', marginLeft: 2, marginRight: 10 }}
                                    onPress={(value) => { this.setState({ value: value }) }}
                                />

                            </View>

                            <View style={styles.userContainer}>
                                <Icon name="mobile" size={30} style={styles.icontxt} color="#fff" />
                                <TextInput style={styles.icontext}

                                    onChangeText={(phone) => this.setState({ phone })} value={this.state.phone}
                                    placeholder="Phone Number" placeholderTextColor="white" ></TextInput>
                            </View>

                            <View style={styles.userContainer1}>
                                <CheckBox
                                    onClick={() => this.setState({ check: !this.state.check })}
                                    isChecked={this.state.check}
                                    checkBoxColor="white"

                                />

                                <Text style={styles.textcheck}>I agree the Terms and Conditions.</Text>
                            </View>


                            <View >
                                <TouchableOpacity style={styles.btnlogin}

                                    onPress={this.validate}>

                                    <Text style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}>REGISTER</Text>

                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>

        );
    }
}
