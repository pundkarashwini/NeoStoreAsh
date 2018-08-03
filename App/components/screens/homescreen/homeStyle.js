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
    texthead:{
        color: color.primary,
        fontSize:30,
        fontWeight: 'bold',
        marginLeft:60,
        marginTop:40,
        
      
    },
    icon:
    {
        marginTop:40,
        marginLeft:margins.iconleft,
    },
    icon2:
    {
        marginTop:40,
        marginLeft:40
    },
    imghome:
    {
        
        flex:1,
        height:230,
        
        

    },

imgtable:{
    flex:1,
    height:150,
    width:20,
    marginLeft:margins.leftmargin,
        marginRight:margins.rightmargin

},
imgchair:{
    flex:1,
    height:150,
    width:20,
    //marginLeft:15,
        marginRight:margins.rightmargin

}
});