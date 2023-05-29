import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#EEF2FB',
    alignItems: 'center',
    height: '100%',
    width:'100%'
  },
  
  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  container: {
    position: 'absolute',
    width: '100%',
    top:0,
    height: 140,
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

  input: {
    backgroundColor: '#fff',
    width: 300,
    height: 50,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 10,
    padding: 10,
  },

  loginButtonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 10,
    backgroundColor: '#151E47',
  },

  loginButtonText: {
    color: '#FFF'
  },

})