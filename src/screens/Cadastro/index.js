import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../Styles/style.js';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogin}>

        <TextInput style={styles.tituloSignUp}>Criar conta</TextInput>

        <TextInput style={styles.input}
          placeholder='Nome de usuário'
          onChange={() => { }} />

        <TextInput style={styles.input}
          placeholder='E-mail'
          onChange={() => { }} />

        <TextInput style={styles.input}
          placeholder='Digite uma senha'
          secureTextEntry={true}
          onChange={() => { }} />

        <TextInput style={styles.input}
          placeholder='Confirme a senha'
          secureTextEntry={true}
          onChange={() => { }} />

        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}