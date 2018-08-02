import { StyleSheet } from "react-native";
import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';

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
        marginTop: 20,
        alignSelf: "center",
        marginLeft:90,
        
        
    },
    icon:
    {
        marginTop:margins.icontop,
        marginLeft:margins.iconleft
    },
    text:{
        color:color.primary,
        fontSize:50,
        fontWeight: 'bold',
        marginLeft:20
        
    },
    userContainer: {
       
        flexDirection: 'row',
        borderColor: color.containerborder,
        borderWidth: 2, 
        height:40,
        marginRight:margins.rightmargin,
        marginTop:15, 
        marginLeft:margins.leftmargin,
        padding:5,
        
    
      },
      icontext:
      {
        fontSize:25,
        marginLeft:20,
        fontWeight:'bold'
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