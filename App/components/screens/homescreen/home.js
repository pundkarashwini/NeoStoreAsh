import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from "./homeStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';
import SideBar from '../sidebar/sidebar';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.product_categories = props.navigation.state.params.data.product_categories;
        console.log(this.productDetails)
    }

    swipeImage = (data) => {

        let array = [];
        for (let i = 0; i < 4; i++) {
            array.push(<View key={'ashu' + i} style={styles.slide}>
                <Image style={styles.imghome} source={{ uri: data[i].icon_image }} />
            </View>)

        }
        return array;
    }

    render() {

        return (

            <View style={{ flex: 1 }}>

                <View style={styles.container1} isDrawer="true">
                    <Icon name="bars" size={40} color="white" style={styles.icon}
                        onPress={() => this.props.navigation.openDrawer()}
                    />
                    <Text style={styles.texthead}>NeoSTORE</Text>
                    <Icon name="search" size={25} color="white" style={styles.icon2} />
                </View>


                <View style={styles.container2}>
                    <Swiper style={styles.wrapper} activeDotColor='red'>

                        {this.swipeImage(this.product_categories)}


                    </Swiper>
                </View>



                <View style={styles.container3}>

                    <View style={styles.view1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductTable')}>

                            <Text style={styles.tabletxt}> Tables </Text>
                            <Icon name="table" style={styles.tableicon} size={60} color="white" />
                        </TouchableOpacity>
                    </View>



                    <View style={styles.view2}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductTable')}>
                            <Icon name="bed" style={styles.sofaicon} size={60} color="white" />
                            <Text style={styles.sofatxt}> Sofas </Text>
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={styles.container4}>
                    <View style={styles.view1}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductTable')}>

                            <Text style={styles.chairtxt}> Chairs </Text>
                            <Icon name="wheelchair" style={styles.chairicon} size={60} color="white" />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.view2}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductTable')}>

                            <Icon name="building" style={styles.cupbicon} size={60} color="white" />
                            <Text style={styles.cupbtxt}> Cupboards </Text>
                        </TouchableOpacity>
                    </View>



                </View>


            </View>
        );
    }
}