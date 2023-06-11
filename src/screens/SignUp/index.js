import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function SignUpScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    if (!username || !email || !company || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <View style={styles.background}>
      <View style={styles.containerLogin}>
        <View style={styles.container}>
          <View style={styles.tituloContainer}>
            <Text style={styles.textoTitulo}>Criar Conta</Text>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Empresa"
          onChangeText={(text) => setCompany(text)}
          value={company}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite uma senha"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.loginButtonContainer}
          onPress={handleSignUp}
        >
          <Text style={styles.loginButtonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
