import {Platform, StyleSheet} from 'react-native';
import global from '../../lib/global';
import * as fontsizes  from '../../utils/fontsizes';
import * as color  from '../../utils/color';
import * as margins  from '../../utils/margins';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: (global.OS === 'ios')? 70: 50,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center'
    },
    Titlecontainer: {
        width: '70%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '15%',
        alignItems: 'center'
    },
    texthead:{
        color:color.primary,
        fontSize:25,
        fontWeight: 'bold',
        //marginTop: margins.icontop,
        alignSelf: "center",
        
        
        
        
    },
    icon2:
    {
        marginTop:40,
        
       marginLeft:65
    },
    

});
