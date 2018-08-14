import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, FlatList, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import styles from "./productlistStyle";
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
export default class Sofa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arraydata: [],

        };


    }
    componentDidMount() {
        apicall(url.host + url.productlist + "?product_category_id=3", 'GET', null, null, (response) => {

            this.setState({ arraydata: response.data })



        });

    }



    render() {
        console.log(this.state.arraydata)
        return (
            <View style={{ flex: 1 }}>
                <Header title={'Sofas'} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                <View style={styles.listcontainer}>
                    <FlatList
                        data={this.state.arraydata}
                        renderItem={({ item }) =>
                            <View style={{ borderBottomColor: '#4F4F4F', borderBottomWidth: 1 }}>

                                <TouchableOpacity style={styles.touchopacity}>
                                    <View>
                                        <Image style={{ height: 80, width: 100 }}
                                            source={{ uri: item.product_images }} />
                                    </View>
                                    <View style={styles.view2}>
                                        <Text style={styles.text}> {item.name}</Text>
                                        <Text style={styles.text1}> {item.producer}</Text>
                                        <View style={styles.view3}>
                                            <Text style={styles.textcost}> Rs. {item.cost}</Text>


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