import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity,Image} from 'react-native';
import styles from "./homeStyle";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Swiper from 'react-native-swiper';
import SideBar from '../sidebar/sidebar';


export default class Home extends Component{
  
constructor(props)
{
        super(props);
        this.state={}
}
 

  
    render() {
      
      return (

        <View style={{flex:1}}> 
        
        <View style={styles.container1} isDrawer="true">
        <Icon name="bars" size={40} color="white" style={styles.icon} 
        onPress={() => this.props.navigation.openDrawer()}
        />
        <Text style={styles.texthead}>NeoSTORE</Text>
        <Icon name="search" size={25} color="white" style={styles.icon2} />
        </View>
       
       
        <View style={styles.container2}>
        <Swiper style={styles.wrapper} activeDotColor='red'>
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
        
        
       
        <View style={styles.container3}>
        
        <View style={styles.view1}>
<Text style={styles.tabletxt}> Tables </Text>
<Icon name="table"  style={styles.tableicon} size={60} color="white"/>
        </View>
    
        
        
        <View style={styles.view2}>
        
<Icon name="bed"  style={styles.sofaicon} size={60} color="white"/>
<Text style={styles.sofatxt}> Sofas </Text>

        
         </View>   
        
</View>
<View style={styles.container4}>
        <View style={styles.view1}>
        <Text style={styles.chairtxt}> Chairs </Text>
<Icon name="wheelchair"  style={styles.chairicon} size={60} color="white"/>

        </View>
    
        
        <View style={styles.view2}>
        
<Icon name="building"  style={styles.cupbicon} size={60} color="white"/>
      <Text style={styles.cupbtxt}> Cupboards </Text>
       
        </View>
        
        
        
 </View>

        
        </View>
    );
}
}