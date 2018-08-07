import { StyleSheet } from "react-native";
import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';
import global from '../../../lib/global';


export default styles = StyleSheet.create({

    containermain: {
        flex: 1,
        backgroundColor:'#333333',
        
        
    },
    container1: {
        flex: 3,
      //  borderColor:'blue',
//borderWidth:2,
justifyContent:'center',
alignItems:'center'

    },
   
    container2:{
flex:8,
//borderColor:'blue',
//borderWidth:2,
    },

    imgprofile:{
        borderRadius:40,
        height:80,
        width:80,
        borderColor:'white',
        borderWidth:2,
        

    },
    txtprofile1:{
        color:'white',
       fontSize:20,
        marginTop:5,
       // marginLeft:10,
    },
    txtprofile2:{
        color:'white',
       fontSize:15,
        //marginTop:5,
       // marginLeft:10,
    },
    icon:
    {
        marginTop:5,
        marginLeft:10,
        
    },
    itemview:{
        flexDirection: 'row',
        borderColor:'black',
        borderWidth:1,
        padding:10
    },
    itemtxt:{
        color:'white',
        fontSize:20,
        marginTop:5,
        marginLeft:10,
       // fontWeight: 'bold',
    },








});