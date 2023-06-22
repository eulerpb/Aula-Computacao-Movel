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

    tituloContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 140,
    },

    textoTitulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },

    manageQuantForms: {
        position: 'relative',
        marginTop: 50,
    },

    radioContainer: {
        flexDirection: 'row',
        marginVertical: 10,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
    },

    button: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        width: 25,
        height: 25,
        borderRadius: 5,
    },

    input: {
        marginLeft: 10,
        fontSize: 20,
    },

    buttonContainer: {
        flexDirection: 'row',
        marginTop: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },

    addItemButton: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        borderRadius: 10,
        backgroundColor: '#151E47',
        marginRight: 10,
    },

    buttonText: {
        color: '#FFF'
    },

    cancelButton: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
        borderRadius: 10,
        backgroundColor: 'red',
        marginLeft: 10,
    },

    picker: {
        height: 40,
        marginLeft:20,
        width: '70%',
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 10,
    },

    pickerItem:{
        fontSize:15,
    }

})