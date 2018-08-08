import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import styles from './HeaderStyle';

export default class Header extends Component {

  constructor(props) {
    super(props);  
  }

  render() {
  return (
    <View style={styles.container}>
        
        <TouchableOpacity style={styles.Backcontainer} onPress={this.props.back}>
        <Icon name="angle-left" size={40} color="white" style={styles.icon} 
        />


            
        </TouchableOpacity>
        <View style={styles.Titlecontainer}>
        
            <Text style={styles.texthead}>
                {this.props.title}
            </Text>       
        </View>
    </View>
  );
}
}

