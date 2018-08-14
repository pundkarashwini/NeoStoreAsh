import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./sidebarStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { AsyncStorage } from 'react-native';
export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    async clearData() {
        AsyncStorage.removeItem('access_token', () => {
            this.props.navigation.replace('Login');
        });
    }





    render() {
        return (
            <View style={styles.containermain}>
                <ScrollView>
                    <View style={styles.container1}>
                        <Image
                            style={styles.imgprofile}
                            source={require('../../../assets/images/profile.jpg')}
                        />
                        <Text style={styles.txtprofile1}> Ashwini Pundkar </Text>
                        <Text style={styles.txtprofile2}> ashwinipundkar55@gmail.com </Text>
                    </View>


                    <View style={styles.container2}>
                        <View style={styles.itemview}><TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Icon name="shopping-cart" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> My Cart</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity onPress={() => this.props.navigation.navigate('ProductTable')} style={{ flexDirection: 'row' }}>
                            <Icon name="table" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Tables</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity onPress={() => this.props.navigation.navigate('Sofa')} style={{ flexDirection: 'row' }}>
                            <Icon name="bed" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Sofas</Text></TouchableOpacity>
                        </View>
                        <View style={styles.itemview}><TouchableOpacity onPress={() => this.props.navigation.navigate('Productchair')} style={{ flexDirection: 'row' }}>
                            <Icon name="wheelchair" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Chairs</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity onPress={() => this.props.navigation.navigate('Cupboard')} style={{ flexDirection: 'row' }}>
                            <Icon name="building" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Cupboards</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Icon name="user" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> My Account</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Icon name="globe" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Store Locator</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Icon name="address-card" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> My Orders</Text></TouchableOpacity>
                        </View>

                        <View style={styles.itemview}><TouchableOpacity style={{ flexDirection: 'row' }}
                            onPress={() => this.clearData()}              >
                            <Icon name="power-off" style={styles.icon} size={25} color="white" />
                            <Text style={styles.itemtxt}> Logout</Text></TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>

        );
    }
}
