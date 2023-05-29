import React from 'react';
import {Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogin}>

        <View style={styles.container}>
          <View style={styles.tituloContainer}>
            <Text style={styles.textoTitulo}>Criar Conta</Text>
          </View>
        </View>


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
          <Text style={styles.loginButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}