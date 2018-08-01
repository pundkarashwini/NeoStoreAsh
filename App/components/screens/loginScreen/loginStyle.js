import { StyleSheet } from "react-native";

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
    text:{
        color:'#FFFFFF',
        fontSize:70,
        fontWeight: 'bold',
        marginTop: 75
    },

    textforgot:
    {
        color:'#FFFFFF',
        fontSize:30,
        fontWeight: 'bold',
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        textAlign:'center'
    },
    
   btnlogin:
   {
    backgroundColor:'white',
    padding:10,
    alignItems: 'center',
    borderRadius:5,
    height:60,
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    color:'red'
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
    borderColor: 'white',
    borderWidth: 2, 
    height:40,
    marginRight:15,
    marginTop:20, 
    marginLeft:15,
    padding:5,
    

  },
    
});