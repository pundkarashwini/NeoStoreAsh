import { Platform, StyleSheet } from 'react-native';
import global from '../../lib/global';
import * as fontsizes from '../../utils/fontsizes';
import * as color from '../../utils/color';
import * as margins from '../../utils/margins';

export default styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: (global.OS === 'ios') ? 70 : 50,
        width: '100%',
        backgroundColor: 'red',
        alignItems: 'center',

    },
    Titlecontainer: {
        width: '80%',
        alignItems: 'center'
    },
    Backcontainer: {
        width: '10%',
        alignItems: 'center'
    },
    texthead: {
        color: color.primary,
        fontSize: 25,
        // fontWeight: 'bold',
        //marginTop: margins.icontop,
        alignSelf: "center",




    },
    texthead1: {
        color: color.primary,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: "center",

    },
    search:
    {
        width: '80%',
        //fontWeight: 'bold',
        height: (global.OS === 'ios') ? '40%' : '60%',
        alignSelf: "center",

    }

});
