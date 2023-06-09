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
        height: 530,
        backgroundColor: '#fff',
        borderRadius: 20,
    },

    tituloBox:{
        backgroundColor: '#151E47',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height:35,
    },

    tituloBoxText:{
        color: 'white',
    },

    selecionarEstoque:{
        fontSize: 15,
        marginTop:15,
        marginLeft:20,
    },

    horizontalMenu:{    
        position:'relative',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width:'90%',
        height: 40,
        flexDirection: 'row',
        borderRadius:20,
        backgroundColor: '#151E48',
    },

    menuButton:{
        position:'relative',
        marginHorizontal:20,
        width:70,
        height:40,
        borderRadius:20,
        backgroundColor: '#151E48',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuText:{
        color:'#fff',
        fontSize:15,
        fontWeight:'500',
    },

    secondBox:{
        position:'relative',
        backgroundColor: '#EAE9E9',
        height:400,
        width: '90%',
        borderRadius:20,
        marginTop: 20,
        alignSelf: 'center',
    },

    cabecalho:{
        position:'relative',
        flexDirection:'row',
        alignItems: 'center',
        marginTop:10,
    },

    cabecalhoText:{
        fontSize:12,
        color:'#000',
        fontWeight:'bold',
        marginLeft:'3%',
    },
    cabecalhoTextProduto:{
        fontSize:12,
        color:'#000',
        fontWeight:'bold',
        marginLeft:'3%',
        marginRight:'36%',
    },

    icon:{
        width: 20,
        height:20,
    },

    stockItem:{
        position:'relative',
        flexDirection:'row',
        alignItems: 'center',
        marginTop:10,
        marginBottom:10,
    },

    stockItemText:{
        fontSize:12,
        color:'#000',
        fontWeight:'bold',
        marginLeft:'3%',
    },

    itemSeparator: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})