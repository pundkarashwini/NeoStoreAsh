import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/dist/Feather';
import styles from './HeaderStyle';

export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.Backcontainer} onPress={this.props.back}>
                    {this.props.isDrawer ?
                        <Icon name="bars" size={35} color="white" fontWeight='bold' />
                        : <Icon name="chevron-left" size={25} color="white" />}

                </TouchableOpacity>

                <View style={styles.Titlecontainer}>
                    {this.props.isHead ? <Text color="white" style={styles.texthead1}>{this.props.title}</Text> : <Text style={styles.texthead}>{this.props.title}</Text>}
                </View>




                <TouchableOpacity style={styles.Backcontainer} >
                    {this.props.isSearch ?
                        <Icon name="search" size={30} style={styles.search} color="white" />
                        : null}
                </TouchableOpacity>

            </View>
        );
    }
}

