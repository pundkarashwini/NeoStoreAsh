import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, FlatList, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import styles from "./productdetailStyle";
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
import StarRating from 'react-native-star-rating';
import { Loader } from '../../Loader/loader';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class Productdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pid: this.props.navigation.state.params.ID,
            title: this.props.navigation.state.params.title,
            array: [],
            category: this.props.navigation.state.params.category,

        };



    }
    componentDidMount() {

        apicall(url.host + url.productdetail + "?product_id=" + this.state.pid, 'GET', null, null, (response) => {
            console.log(response.data)
            this.setState({
                array: response.data,
            })

        });
    }

    Image = (data) => {
        console.log(data)
        let arrayimg = [];
        for (let i = 0; i < 1; i++) {
            arrayimg.push(<View key={'ashu' + i} style={styles.img}>
                <Image style={{ height: 140, width: 250 }} source={{ uri: data[i].image }} />
            </View>)

        }
        return arrayimg;
    }

    render() {
        console.log(this.state.array.product_images)
        return (
            <View style={{ flex: 1 }}>
                <Header title={this.state.title} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                <View style={styles.view1}>

                    <Text style={styles.text}> {this.state.array.name}</Text>
                    <Text style={styles.text2}>  Category - {this.state.category}</Text>


                    <View style={styles.viewstar}>
                        <View>
                            <Text style={styles.text1}> {this.state.array.producer}</Text>
                        </View>
                        <View style={{ marginLeft: 210, }}>
                            <StarRating
                                maxStars={5}
                                fullStarColor={'#FFBA00'}
                                rating={this.state.array.rating}
                                starSize={20}


                            />


                        </View>
                    </View>
                </View>

                <View style={styles.view2}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textcost}> Rs. {this.state.array.cost}</Text>

                        <Icon name="share-alt" size={25} color="gray" style={styles.icon} /></View>
                    {/* images */}
                    {/* <View>for large img</View> */}
                    <View style={{ flex: 1, marginLeft: 5, flexDirection: 'row', padding: 5 }}>
                        {this.state.array.product_images != undefined ? this.Image(this.state.array.product_images) : null}

                    </View>

                </View>


                <View style={styles.view3}></View>
                <View style={styles.view4}></View>
                <View style={styles.view5}></View>
            </View>
        );
    }
}