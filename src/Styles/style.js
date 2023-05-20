import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    backgroundColor: '#EEF2FB',
    alignItems: 'center',
    height: '100%',
  },

  loginImage: {
    width: 240,
    height: 214,
    marginBottom: 40,
    alignItems: 'center',
  },

  containerLogin: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
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

  buttonContainer: {
    height: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
  },

})