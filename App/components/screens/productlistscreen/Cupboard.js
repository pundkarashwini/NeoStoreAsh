import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, FlatList, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import styles from "./productlistStyle";
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
import StarRating from 'react-native-star-rating';



export default class Cupboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arraydata: [],

        };


    }
    componentDidMount() {
        apicall(url.host + url.productlist + "?product_category_id=4", 'GET', null, null, (response) => {

            this.setState({ arraydata: response.data })



        });

    }



    render() {
        console.log(this.state.arraydata)
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Cupboards'} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                <View style={styles.listcontainer}>
                    <FlatList
                        data={this.state.arraydata}
                        keyExtractor={(item, index) => index + ""}
                        renderItem={({ item }) =>
                            <View style={{ borderBottomColor: '#4F4F4F', borderBottomWidth: 1 }}>
                                <TouchableOpacity style={styles.touchopacity}>
                                    <View>
                                        <Image style={{ height: 80, width: 100 }}
                                            source={{ uri: item.product_images }} />
                                    </View>
                                    <View style={styles.view2}>
                                        <Text style={{ color: '#4F4F4F', fontWeight: 'bold', fontSize: 18 }}> {item.name}</Text>
                                        <Text style={styles.text1}> {item.producer}</Text>
                                        <View style={styles.view3}>
                                            <View>
                                                <Text style={styles.textcost}> Rs. {item.cost}</Text>
                                            </View>
                                            <View style={{ marginLeft: 60, alignContent: 'center' }}>

                                                <StarRating
                                                    maxStars={5}
                                                    fullStarColor={'#FCB900'}
                                                    rating={item.rating}
                                                    starSize={20}

                                                />
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                    />

                </View>




            </View>



        );
    }
}