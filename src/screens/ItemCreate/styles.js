import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    page: {
        backgroundColor: '#EEF2FB',
        alignItems: 'center',
        height: '100%',
    },

    container: {
        position: 'relative',
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

    newUserForms:{
        position:'relative',
    },

    radioContainer:{
        flexDirection:'row',
    }

})