import React, { Component } from 'react';
import { Platform, StyleSheet, ScrollView, Image, FlatList, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Header from '../../../components/Header/Header';
import styles from "./productdetailStyle";
import * as url from '../../../lib/api';
import { apicall } from '../../../lib/fetcher';
import StarRating from 'react-native-star-rating';
import { Loader } from '../../Loader/loader';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Modal from "react-native-modal";
import { AsyncStorage } from 'react-native';

export default class Productdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            pid: this.props.navigation.state.params.ID,
            title: this.props.navigation.state.params.title,
            array: [],
            category: this.props.navigation.state.params.category,
            img: 0,
            isModalVisible: false,
            israteModalVisible: false,
            rate: 0,
            quantity: ''

        };



    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }
    toggleModalrate = () => {
        this.setState({ israteModalVisible: !this.state.israteModalVisible });
    }

    FetchRating = () => {

        let formData = new FormData();
        formData.append('rating', this.state.rate)


        apicall(url.host + url.setRating + "?product_id=1", 'POST', formData, null, (response) => {
            console.log(response.data)
            // if (response.status == 200) {
            //     this.setState({
            //         
            //     })
            // }
            // else {

            //     if (response.hasOwnProperty('user_msg')) {

            //         alert(response.user_msg);
            //     }
            //     else {
            //         alert(response.message);
            //     }
            // }


        });


    }
    FetchAddCart = () => {
        let formData = new FormData();
        formData.append('quantity', this.state.quantity)
        formData.append('product_id', this.state.pid)
        AsyncStorage.getItem('access_token').then((value) => {
            console.log(value)
            this.setState({
                access_token: value
            })

        });


        apicall(url.host + url.addToCart, 'POST', formData, this.state.access_token, (response) => {
            console.log(response.data)
            if (!response.data) return;

            if (response.status == 200) {
                this.setState({

                })
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

    componentDidMount() {
        this.setState({ loading: true, })
        apicall(url.host + url.productdetail + "?product_id=" + this.state.pid, 'GET', null, null, (response) => {
            console.log(response.data)
            if (response.status == 200) {
                this.setState({
                    array: response.data,
                    loading: false,
                })
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
    Star = (rating) => {

        this.setState({
            rate: rating
        });

    }
    Image = (data) => {
        // console.log(data)
        let arrayimg = [];
        for (let i = 0; i < data.length; i++) {
            arrayimg.push(<TouchableOpacity style={styles.touchopacity} key={'ashu' + i} onPress={() =>
                // console.log(data[i])
                this.setState({ img: i })
            } >
                {this.state.img == i ? < Image style={styles.img} source={{ uri: data[i].image }} /> :
                    < Image style={styles.img1} source={{ uri: data[i].image }} />}

            </TouchableOpacity >)

        }
        return arrayimg;
    }
    validate = () => {
        let reg = /^[0-9]*$/;
        if (this.state.quantity == '' || !reg.test(this.state.quantity)) {
            alert('Enter quantity in numbers only..');
            return false;
        }
        else {
            this.FetchAddCart();
        }
    }

    render() {
        //console.log(this.state.array)
        return (
            <View style={{ flex: 1, }}>
                <Header title={this.state.title} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                {this.state.loading ? <Loader /> : null}
                <ScrollView>


                    <View style={styles.view1}>
                        <Modal isVisible={this.state.isModalVisible}
                            onBackdropPress={() => this.toggleModal()}
                            onBackButtonPress={() => this.toggleModal()}
                            backdropOpacity={0.5}
                        >
                            <View style={styles.content}>
                                <ScrollView>
                                    <View style={styles.modalView1}>
                                        <Text style={styles.textpop}>{this.state.array.name}</Text>

                                        {this.state.array.product_images != undefined ? <Image style={styles.mainimg} source={{ uri: this.state.array.product_images[this.state.img].image }} /> : null}
                                    </View>
                                    <View style={styles.modalView1}>
                                        <Text style={styles.textpop}> Enter Quantity</Text>
                                        <View>
                                            <TextInput onChangeText={(quantity) => this.setState({ quantity })}
                                                maxLength={8}
                                                style={{ height: 50, width: 110, borderColor: '#282727', borderWidth: 2, fontSize: 20, textAlign: 'center' }}></TextInput>
                                        </View>
                                        <TouchableOpacity style={styles.btntouchopacitypop}
                                            onPress={() => this.validate()}
                                        >
                                            <Text style={styles.btntxt1}>SUBMIT</Text>
                                        </TouchableOpacity>
                                    </View>
                                </ScrollView>

                            </View>
                        </Modal>

                        <Modal isVisible={this.state.israteModalVisible}
                            onBackdropPress={() => this.toggleModalrate()}
                            onBackButtonPress={() => this.toggleModalrate()}
                            backdropOpacity={0.5}
                        >
                            <View style={styles.content}>
                                <View style={styles.modalView1}>
                                    <Text style={styles.textpop}>{this.state.array.name}</Text>

                                    {this.state.array.product_images != undefined ? <Image style={styles.mainimg} source={{ uri: this.state.array.product_images[this.state.img].image }} /> : null}
                                </View>
                                <View style={styles.modalView1}>
                                    <StarRating
                                        name='rate'
                                        rating={this.state.rate}
                                        selectedStar={(rating) => this.Star(rating)}
                                        maxStars={5}
                                        fullStarColor={'#FFBA00'}
                                        starSize={40}
                                        padding={10}


                                    />

                                    <TouchableOpacity style={styles.btntouchopacityrate}
                                        onPress={() => this.FetchRating()}
                                    >
                                        <Text style={styles.btntxt1}>RATE NOW</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Modal>
                        <Text style={styles.text}>{this.state.array.name}</Text>
                        <Text style={styles.text2}>Category - {this.state.category}</Text>


                        <View style={styles.viewstar}>
                            <View>
                                <Text style={styles.text1}>{this.state.array.producer}</Text>
                            </View>
                            <View style={{ marginLeft: 200, }}>
                                <StarRating
                                    maxStars={5}
                                    fullStarColor={'#FFBA00'}
                                    rating={this.state.array.rating}
                                    starSize={20}

                                />


                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 5 }}>
                        <View style={styles.view2}>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ flex: 1, }}>
                                    <Text style={styles.textcost}> Rs. {this.state.array.cost}</Text>
                                </View>
                                <TouchableOpacity style={{ marginRight: 30 }}>
                                    <Icon name="share-alt" size={25} color="gray" />
                                </TouchableOpacity>
                            </View>
                            {/* for large img */}
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {this.state.array.product_images != undefined ? <Image style={styles.mainimg} source={{ uri: this.state.array.product_images[this.state.img].image }} /> : null}

                            </View>

                            <ScrollView horizontal={true}>
                                {this.state.array.product_images != undefined ? this.Image(this.state.array.product_images) : null}
                            </ScrollView>
                        </View>

                        <View style={styles.view4}>
                            <Text style={{ color: '#111111', fontWeight: 'bold', fontSize: 20, marginBottom: 5 }}>DESCRIPTION
                    </Text>

                            <Text style={{ color: '#333333', fontSize: 15, }}>
                                {this.state.array.description}
                            </Text>

                        </View>
                        <View style={styles.view5}>
                            <TouchableOpacity style={styles.btntouchopacity1}
                                onPress={() => this.toggleModal()}
                            >

                                <Text style={styles.btntxt1}>BUY NOW</Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.btntouchopacity}
                                onPress={() => this.toggleModalrate()}
                            >
                                <Text style={styles.btntxt}>RATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}