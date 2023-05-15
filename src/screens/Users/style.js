import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    page: {
        backgroundColor: '#EEF2FB',
        alignItems: 'center',
        height: '100%',
    },

    container: {
        position: 'absolute',
        width: '100%',
        height: 140,
        left: 0,
        top: 0,
        backgroundColor: '#6438E0',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    tituloContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
    },

    textoTitulo:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    principalBox: {
        position: 'absolute',
        width: '90%',
        marginTop: 160,
        height: 500,
        backgroundColor: '#fff',
        borderRadius: 20,
    },

    addUserButton:{
        backgroundColor: '#6438E0',
        borderRadius:10,
        height: 40,
        width: 150,
        marginLeft: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    addUserButtonText:{
        color: 'white',
    },




    navBar:{
        position: 'absolute',
        width: '100%',
        height: 60,
        top: 700,
        backgroundColor: '#6438E0',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

    },

    navBarButton:{
        marginRight: 30,
    },

    boxMenuSelected:{
        position: 'relative',
        backgroundColor: 'red',
        width: 60,
        height: 50,
        borderRadius:20,
    },

    boxMenuNoSelected:{
        position: 'relative',
        backgroundColor: '#fff',
        width: 60,
        height: 50,
        borderRadius:20,
    }
})