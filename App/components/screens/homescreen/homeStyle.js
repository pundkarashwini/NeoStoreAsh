import { StyleSheet } from "react-native";
import * as fontsizes  from '../../../utils/fontsizes';
import * as color  from '../../../utils/color';
import * as margins  from '../../../utils/margins';

export default styles = StyleSheet.create({
   
    container1:{
        flex:2,
        flexDirection:'row', 
        backgroundColor:'red'

    },
    container2:{
        flex:6,
        flexDirection:'row',
        alignItems: 'stretch'
       
    },
    container3:{
        flex:4,
        flexDirection:'row',
        marginTop:15
        
    },
    container4:{
        flex:4,
        flexDirection:'row',
        //marginTop:10
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
        marginTop:35,
        marginLeft:margins.iconleft,
    },
    icon2:
    {
        marginTop:40,
        
       marginLeft:65
    },
    imghome:
    {
        
        flex:1,
        height:230,
        width:'100%',
        

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#9DD6EB',
      },
      
    
    

view1:{
    flex:1,
    height:150,
    width:20,
    marginLeft:margins.leftmargin,
        marginRight:margins.rightmargin,
        
        backgroundColor:'red',
        padding:15

},
view2:{
    flex:1,
    height:150,
    width:20,
    //marginLeft:15,
        marginRight:margins.rightmargin,
        

        backgroundColor:'red',
        padding:15
},
tabletxt:{
    color:'white',
    fontSize:30,
    marginTop:5,
    marginLeft:10,
    textAlign:'right',
   fontWeight: 'bold',
},
tableicon:
{
   marginTop:30
},
sofatxt:{
    color:'white',
    fontSize:30,
    marginTop:20,
   // marginLeft:10,
    //swtextAlign:'right',
   fontWeight: 'bold',
},
sofaicon:
{
   marginTop:5,
   marginLeft:65,

},
chairtxt:{
    color:'white',
    fontSize:30,
    marginTop:5,
    //marginLeft:10,
    textAlign:'left',
   fontWeight: 'bold',
},
chairicon:
{
   marginTop:10,
   marginLeft:65,
},
cupbtxt:
{
    color:'white',
    fontSize:26,
   marginBottom:45,
    
   fontWeight: 'bold',
},
cupbicon:
{
   marginTop:5,


},


});