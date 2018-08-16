import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, ActivityIndicator } from "react-native";
import { AsyncStorage } from 'react-native';
import * as url from '../../../lib/api.js';
import { apicall } from '../../../lib/fetcher';
import { Loader } from '../../Loader/loader';
export default class Startup extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        AsyncStorage.getItem('access_token').then((value) => {

            if (value != null) {
                apicall(url.host + url.userdata, 'GET', null, null, (response) => {
                    if (response.status == 200) {
                        this.props.navigation.replace('DrawerNavigator', response)
                    }
                    else {
                        AsyncStorage.removeItem('access_token').then(() => {
                            this.props.navigation.replace('Login');
                        }
                        );


                    }
                    if (response.hasOwnProperty('user_msg')) {

                        alert(response.user_msg);
                        this.props.navigation.replace('Login')
                    }
                    //  .catch((error) => {
                    //     this.props.navigation.replace('Login')
                    // })




                });


            }
            else {
                this.props.navigation.replace('Login')
            }

        })
    }

    render() {
        return (
            <Loader />


        );
    }
}
