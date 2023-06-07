import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.page}>

      <View style={styles.container}>
        <View style={styles.tituloContainer}>
          <Text style={styles.textoTitulo}>Adicionar novo usuário</Text>
        </View>
      </View>

      <View style={styles.forms}>

        <TextInput style={styles.input}
          placeholder='Nome de usuário'
          onChange={() => { }} />

        <TextInput style={styles.input}
          placeholder='E-mail'
          onChange={() => { }} />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addUserButton}
            onPress={() => navigation.navigate('Usuários')}>
            <Text style={styles.buttonText}>Adicionar usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => navigation.navigate('Usuários')}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>

        </View>


      </View>

    </View>
  )
}