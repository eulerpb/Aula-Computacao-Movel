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

  forms: {
    position: 'absolute',
    width: '90%',
    marginTop: 160,
    height: 500,
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  newItemButton: {
    backgroundColor: '#151E47',
    borderRadius: 10,
    height: 40,
    width: 150,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  newItemButtonText: {
    color: '#fff',
  },

  cabecalho: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  cabecalhoText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: '3%',
  },

  productList: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  productListText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: '3%',
  },

  alignButtons:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:15,
  },

  refreshButton:{
    marginLeft:30,
  }
})