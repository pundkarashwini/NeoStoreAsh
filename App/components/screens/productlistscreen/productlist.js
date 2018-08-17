import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, FlatList, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import styles from "./productlistStyle";
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
import StarRating from 'react-native-star-rating';
import { Loader } from '../../Loader/loader';
export default class Productlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arraydata: [],
            page: 1,
            limit: 6,

            loading: false,
            product_category_id: this.props.navigation.state.params.ID,
            title: this.props.navigation.state.params.title,

        };



    }
    componentDidMount() {
        this.setState({ loading: true })
        this.fetchResult();

    }

    fetchResult = () => {
        const { page, limit, arraydata } = this.state;

        apicall(url.host + url.productlist + "?product_category_id=" + this.state.product_category_id + "&limit=6&page=" + this.state.page, 'GET', null, null, (response) => {
            this.setState({ loading: false })
            if (!response.data) return;

            if (response.status == 200) {

                this.setState({
                    arraydata: arraydata.concat(response.data),


                    page: page + 1,



                });

                // this.setState({ total: response.data.length })
                // console.log(response.data.length)
            }
            else {

                if (response.hasOwnProperty('user_msg')) {

                    alert(response.user_msg);
                }
                else {
                    alert(response.message);
                }
            }

        });


    }

    render() {
        //console.log(this.state.arraydata.length)
        return (
            <View style={{ flex: 1 }}>
                <Header title={this.state.title} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                {this.state.loading ? <Loader /> : null}
                <View style={styles.listcontainer}>
                    <FlatList
                        data={this.state.arraydata}
                        onEndReached={this.fetchResult}
                        onEndReachedThreshold={0.1}
                        keyExtractor={(item, index) => index + ""}
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
                    <View style={styles.view4} ><Text style={{ fontSize: 20, textAlign: 'center' }}>
                        {this.state.arraydata.length} of {this.state.arraydata.length} </Text>
                    </View>

                </View>




            </View>



        );
    }
}