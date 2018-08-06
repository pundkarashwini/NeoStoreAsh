import { StyleSheet } from "react-native";

import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';
import global from '../../../lib/global';


export default styles = StyleSheet.create({
    backgroundImage:{
        flex:1,
        borderWidth:1,
        borderColor:'red'

    },
    icon:
    {
        marginTop:margins.icontop,
        marginLeft:margins.iconleft
    },
    icontxt:{
        marginTop:5,
        marginLeft:5

    },
    textforgot:
    {
        color:color.primary,
        fontSize:25,
        fontWeight: 'bold',
        
        marginLeft:15,
        marginRight:15,
        textAlign:'center'
    },
    textforgot1:
    {
        color:color.primary,
        fontSize:20,
         marginTop:15,
        marginLeft:15,
        marginRight:15,
        textAlign:'center'
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
      texthead:{
        color:color.primary,
        fontSize:50,
        fontWeight: 'bold',
        marginTop: 20,
        alignSelf: "center",
        
        textAlign:'center'
        
        
    },
      txtinpt:
    {

        fontSize:fontsizes.txtinptfont,
        marginLeft:15,
        padding:5,
        color : color.userinputcolor,
        height: (global.OS === 'ios')? 35: 46,
        width: (global.OS === 'ios')? 300: 300,
        
    },
      btnlogin:
   {
    backgroundColor:color.bgforgotbtn,
    padding:10,
    alignItems: 'center',
    borderRadius:5,
    height:40,
    marginTop:25,
    marginLeft:margins.leftmargin,
    marginRight:margins.rightmargin,
    color:'red'
   },
});