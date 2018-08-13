import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView,Text, View,ImageBackground,TextInput,TouchableOpacity} from 'react-native';
import Header from '../../../components/Header/Header';


export default class ProductTable extends Component{
    render() {
        return (
        <View style={{flex:1}}>
        <Header title={'Tables'}
        back={() => this.props.navigation.goBack(null)}/>




        </View>
        
        
        
        );
}
}