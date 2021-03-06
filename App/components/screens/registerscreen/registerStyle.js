import { StyleSheet } from "react-native";
import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';
import global from '../../../lib/global';
export default styles=StyleSheet.create({

    backgroundImage:{
        flex:1,
        borderWidth:1,
        borderColor:'red'

    },
    texthead:{
        color:color.primary,
        fontSize:25,
        fontWeight: 'bold',
        marginTop: margins.icontop,
        alignSelf: "center",
        marginLeft:110,
        
        
        
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
    text:{
        color:color.primary,
        fontSize:50,
        fontWeight: 'bold',
        marginLeft:20,
        justifyContent:'center',
        alignItems:'center'
        
    },
    userContainer: {
       
        flexDirection: 'row',
        borderColor: color.containerborder,
        borderWidth: 2, 
        height:40,
        marginRight:margins.rightmargin,
        marginTop:15, 
        marginLeft:margins.leftmargin,
        
        
    
      },
      icontext:
      {
        fontSize:fontsizes.txtinptfont,
        marginLeft:10,
        padding:5,
        color : color.userinputcolor,
        height: (global.OS === 'ios')? 35: 46,
        width: (global.OS === 'ios')? 300: 300,
      },
      textgen:{
        color:color.primary, 
        fontSize:25,
        marginLeft:15,
        fontWeight:'bold',
        

      },
      userContainer1: {
       
        flexDirection: 'row',
        height:40,
        marginRight:margins.rightmargin,
        marginTop:15, 
        marginLeft:margins.leftmargin,
        padding:5,
        justifyContent:'center',
        alignItems:'center'
    
      },
      btnlogin:
   {
    backgroundColor:'white',
    
    alignItems: 'center',
    borderRadius:5,
    height:40,
    marginTop:15,
    marginBottom:5,
    marginLeft:margins.leftmargin,
    marginRight:margins.rightmargin,
    color:'red'
   },
   textcheck:
    {
        color:color.primary,
        fontSize:18,
         fontWeight:'bold',
    
        marginRight:15,
        textAlign:'center'
    },
        



});