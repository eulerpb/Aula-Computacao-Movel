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

  forms:{
    position:'relative',
    marginTop:50,
  },

  input: {
    position:'relative',
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginTop: 10,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },

  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'center',
    alignContent:'center',
  },

  addUserButton: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    borderRadius: 10,
    backgroundColor: '#151E47',
    marginRight:10,
  },

  cancelButton:{
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    borderRadius: 10,
    backgroundColor: 'red',
    marginLeft:10,
  },

  buttonText: {
    color: '#FFF'
  },
})