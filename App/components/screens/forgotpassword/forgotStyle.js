import { StyleSheet } from "react-native";

import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';



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
        padding:5,
        
    
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
        color : color.userinputcolor
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