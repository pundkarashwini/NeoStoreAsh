import React, {Component} from 'react';
import { Text, View ,Image,TouchableOpacity,ScrollView} from "react-native";
import {AsyncStorage} from 'react-native';
export default class Startup extends Component {
    constructor(props)
{
        super(props);
}

componentWillMount()
{
    AsyncStorage.getItem('access_token').then((value) => {
     
        if(value!=null)
        {
            fetch("http://staging.php-dev.in:8844/trainingapp/api/users/getUserData",
             {
                method:'GET',
                headers:{
                    access_token:value
             }
             })
             .then((response) => response.json())
             .then((response) => {
                if(response.status==200){
                    this.props.navigation.replace('DrawerNavigator',response)
                }
                else{
                    AsyncStorage.removeItem('access_token').then(()=>{
                        this.props.navigation.replace('Login')
                    }
                )}     
             })        
             .catch((error)=>{
                this.props.navigation.replace('Login')
              });
        }
        else{
            this.props.navigation.replace('Login')
        }
    
    });
}
render() {
    return(
     <View><Text>Loading</Text></View>);
         }
}
