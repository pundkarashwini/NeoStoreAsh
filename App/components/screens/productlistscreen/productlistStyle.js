import { StyleSheet } from "react-native";
import * as fontsizes from '../../../utils/fontsizes';
import * as color from '../../../utils/color';
import * as margins from '../../../utils/margins';
import global from '../../../lib/global';
export default styles = StyleSheet.create({
    listcontainer: {
        flex: 1
    },
    touchopacity:
    {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        // borderBottomColor: '#4F4F4F',
        // borderBottomWidth: 0.5
    },
    view2: {
        flex: 1,
        padding: 5,


    },
    view3: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'


    },
    view4: {
        position: 'absolute',
        marginLeft: (global.OS === 'ios') ? 160 : 150,
        height: 30,
        width: 80,
        backgroundColor: 'gray',

        marginTop: (global.OS === 'ios') ? 570 : 540,

    },
    text: {
        color: '#4F4F4F',
        // fontWeight: 'bold',
        fontSize: 20
    },
    text1: {
        color: '#4F4F4F',

        fontSize: 15
    },
    textcost: {
        color: '#FE4040',
        fontWeight: 'bold',
        fontSize: 20,
        // marginRight: 50



    }


});