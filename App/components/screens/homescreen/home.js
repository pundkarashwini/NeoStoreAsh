import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native';
import styles from "./homeStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';



export default class Home extends Component{
  
   
 

  
    render() {
      
      return (

        <View style={{flex:1}}> 
        <ImageBackground style={styles.backgroundImage} source={require('../../../assets/images/Android_Master_bg.jpg')} >
        <View style={{flex:2,flexDirection:'row'}}>
        <Icon name="bars" size={40} color="white" style={styles.icon} 
        onPress={() => this.props.navigation.navigate('loginscreen')}
        />
        <Text style={styles.texthead}>NeoSTORE</Text>
        <Icon name="search" size={25} color="white" style={styles.icon2} />
        </View>
       
       
        <View style={{flex:6,flexDirection:'row',alignItems: 'stretch'}}>
        <Swiper style={styles.wrapper}>
        <View style={styles.slide}>
        <Image
style={styles.imghome}
source={require('../../../assets/images/Open-style-furniture.jpg')}
        />
        </View>
        <View style={styles.slide}>
        <Image
style={styles.imghome}
source={require('../../../assets/images/table.jpeg')}
        />
        </View>
        <View style={styles.slide}>
        <Image
style={styles.imghome}
source={require('../../../assets/images/furnitures.jpg')}
        />
        </View>
        <View style={styles.slide}>
        <Image
style={styles.imghome}
source={require('../../../assets/images/table2.jpg')}
        />
        </View>
      </Swiper>
        
        
      

        </View>
        
        
        <View style={{flex:4,flexDirection:'row',}}>
        
        <Image
style={styles.imgtable}
source={require('../../../assets/images/table.jpeg')}
        />
    
        
        
        <Image
style={styles.imgchair}
source={require('../../../assets/images/chair.jpg')}
        />  
            
        
        </View>
        <View style={{flex:4,flexDirection:'row'}}>
        <Image
style={styles.imgtable}
source={require('../../../assets/images/cupboard.jpeg')}
        />
    
        
        <Image
style={styles.imgchair}
source={require('../../../assets/images/Open-style-furniture.jpg')}
        />  
        
        
        
        </View>

        </ImageBackground>
        </View>
    );
}
}