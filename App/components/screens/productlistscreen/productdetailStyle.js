import { StyleSheet } from "react-native";
import * as fontsizes from '../../../utils/fontsizes';
import * as color from '../../../utils/color';
import * as margins from '../../../utils/margins';
import global from '../../../lib/global';
export default styles = StyleSheet.create({


    view1: {
        flex: 3,

        padding: 10,
        backgroundColor: 'white'

    },
    view2: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',



    },


    view4: {
        flex: 2,
        marginTop: 5,
        padding: 20,
        backgroundColor: 'white'



    },
    view5: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 5,




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
        marginRight: 10,
        padding: 5

    },
    textcost: {
        color: '#FE4040',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10



    },
    img: {
        flex: 1,
        height: 110,
        width: 140,
        borderColor: 'red',
        borderWidth: 1,
        marginTop: 10
        // justifyContent: 'center',
        // alignItems: 'center'


    },
    img1: {
        flex: 1,
        height: 110,
        width: 140,
        borderColor: '#282727',
        borderWidth: 1,
        marginTop: 10
        // justifyContent: 'center',
        // alignItems: 'center'


    },

    mainimg: {

        height: 150,
        width: 220,
        marginTop: 5,
        marginBottom: 5




    },



    touchopacity: {
        justifyContent: 'center',
        alignItems: 'center',
        //marginLeft: 10,
        flex: 3,

        flexDirection: 'row',
        //  marginTop: 20,
        padding: 5,

    }
    ,
    btntxt: {
        color: '#282727',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btntxt1: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btntouchopacity:
    {
        backgroundColor: '#bfbfbf',
        marginLeft: 20,
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        width: 170,
        justifyContent: 'center',
        borderColor: '#7F7F7F',
        borderWidth: 1
        // color: '#7F7F7F'
    },
    btntouchopacity1:
    {
        backgroundColor: 'red',

        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        width: 170,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red'
    },




}
)