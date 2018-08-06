import { StyleSheet } from "react-native";
import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';
import global from '../../../lib/global';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    container1: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    container2: {
        flex: 3,
       
    },
    container3: {
        flex: 1,
        flexDirection: 'row'
    },
    backgroundImage:{
        flex:1,
        borderWidth:1,
        borderColor:'red'

    },
    icon:{
        marginTop:5,
        marginLeft:5

    },
    text:{
        color:color.primary,
        fontSize:fontsizes.headsize,
        fontWeight: 'bold',
        
        marginTop: 75
    },
    txtinpt:
    {
        fontSize:fontsizes.txtinptfont,
        marginLeft:15,
        color : color.userinputcolor,
       // padding:5,
        height: (global.OS === 'ios')? 35: 35,
        width: (global.OS === 'ios')? 300: 300,
        padding: (global.OS === 'ios')? 5: 5,
    },

    textforgot:
    {
        color:color.primary,
        fontSize:fontsizes.forgotfont,
        fontWeight: 'bold',
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        textAlign:'center'
    },
    
   btnlogin:
   {
    backgroundColor:color.primary,
    padding:10,
    alignItems: 'center',
    borderRadius:5,
    height:60,
    marginTop:30,
    marginLeft:margins.leftmargin,
    marginRight:margins.rightmargin,
    color:color.secondary
   },
   box:
   {
    width: 65,
     height: 65,
     marginLeft:15, 
     backgroundColor: '#9e0100' ,
     alignItems:'center',
     justifyContent: 'center',
    
     
   },
   userContainer: {
       
    flexDirection: 'row',
    borderColor: color.containerborder,
    borderWidth: 2, 
    height:40,
    marginRight:margins.rightmargin,
    marginTop:20, 
    marginLeft:margins.leftmargin,
   
    

  },
    
});