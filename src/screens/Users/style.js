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
        backgroundColor: '#151E47',
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
        backgroundColor: '#151E47',
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
})