import { StyleSheet } from "react-native";
import * as fontsizes from '../../../utils/fontsizes';
import * as color from '../../../utils/color';
import * as margins from '../../../utils/margins';
import global from '../../../lib/global';
export default styles = StyleSheet.create({


    view1: {
        flex: 2,
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,

    },
    view2: {
        flex: 4,
        borderColor: 'red',
        borderWidth: 2,
        padding: 10,
        //flexDirection: 'row'

    },

    view3: {
        flex: 3,
        borderColor: 'red',
        borderWidth: 2,
        flexDirection: 'row'


    },
    view4: {
        flex: 4,
        borderColor: 'red',
        borderWidth: 2


    },
    view5: {
        flex: 2,
        borderColor: 'red',
        borderWidth: 2


    },

    text: {
        color: 'black',
        // fontWeight: 'bold',
        fontSize: 25
    },
    text1: {
        color: '#4F4F4F',

        fontSize: 15
    },
    text2: {
        color: '#4F4F4F',

        fontSize: 20
    },
    viewstar:
    {
        flex: 1,
        flexDirection: 'row',
        //justifyContent: 'space-around',
        //alignItems: 'center',
        marginLeft: 5
    },
    textcost: {
        color: '#FE4040',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 20



    },
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    icon: {
        marginLeft: 200
    }







}
)