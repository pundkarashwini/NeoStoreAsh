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
            isModalVisible: false


        };



    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    componentDidMount() {
        this.setState({ loading: true, })
        apicall(url.host + url.productdetail + "?product_id=" + this.state.pid, 'GET', null, null, (response) => {
            console.log(response.data)
            this.setState({
                array: response.data,
                loading: false,
            })

        });
    }

    Image = (data) => {
        console.log(data)
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

    render() {
        //console.log(this.state.array)
        return (
            <View style={{ flex: 1, }}>
                <Header title={this.state.title} isSearch="true"
                    back={() => this.props.navigation.goBack(null)} />
                {this.state.loading ? <Loader /> : null}
                <ScrollView>


                    <View style={styles.view1}>

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
                                    padding={5}


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
                                <TouchableOpacity style={{ marginRight: 40 }}>
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
                            {/* <Modal isVisible={this.state.isModalVisible}>
                                <View style={{ flex: 1 }}>
                                    <Text>Hello!</Text>
                                    <TouchableOpacity onPress={this.toggleModal()}>
                                        <Text>Hide me!</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal> */}

                            <TouchableOpacity style={styles.btntouchopacity}>
                                <Text style={styles.btntxt}>RATE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}