import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    page: {
        backgroundColor: '#EEF2FB',
        height: '100%',
    },

    containerHome: {
        position: 'absolute',
        width: '100%',
        height: 302,
        left: 0,
        top: 0,
        backgroundColor: '#151E47',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    boxes: {
        position: 'absolute',
        height: 100,
        width: '100%',
        top: 172,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },

    box1: {
        borderRadius: 10,
        position: 'relative',
        width: 100,
        height: 100,
        backgroundColor: 'white',
        marginHorizontal: 15,


    },

    icones: {
        height: 30,
        width: 30,
        marginTop: 5,
        marginLeft: 10,
    },

    boxQuantity: {
        color: "#000",
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
    },

    boxTitle: {
        color: '#989898',
        textAlign: 'center',
        fontSize: 9,
        marginTop: 10,
        fontWeight: 'bold',
    },

    historic_box: {
        position: 'absolute',
        width: '90%',
        height: 182,
        top: 329,
        backgroundColor: '#fff',
        borderRadius: 20,
        left: '5%',
    },

    historic_box_text: {
        fontSize: 15,
        left: 10,
        top: 10,
    },

    moreButton: {
        top: '75%',
        right: '-80%',

    },

    moreButtonText: {
        color: '#151E47',
        fontSize: 16,
    },

    secondBox: {
        top: 550,
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    crudButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    boxCrud: {
        position: 'relative',
        width: 100,
        height: 100,
        backgroundColor: '#151E47',
        borderRadius: 20,
        marginHorizontal: 25,
        justifyContent:'center',

    },

    profileButton: {
        position:'relative',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#151E30',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        marginLeft:15,
      },

    welcomeText:{
        position:'relative',
        color:'#fff',
        fontSize:25,
        fontWeight:'bold',
        alignSelf:'baseline',
        marginVertical:15,
        marginLeft: 15,
    },

    iconStyle:{
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center',
        left:20,
    },

    iconStyleExtra:{
        position:'absolute',
        alignSelf:'center',
        justifyContent:'center',
        top:10,
        right:20,

    }
})