import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import ErrorModal from '../../components/errorLoginModal';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorModalVisible, setErrorModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleLogin = () => {
        // Lógica de autenticação aqui (por exemplo, verificar no banco de dados)
        if (email === 'teste@teste.com' && senha === '123456') {
            navigation.navigate('Home');
        } else {
            setErrorModalVisible(true);
            setErrorMessage('Credenciais inválidas. Por favor, tente novamente.');
        }
    };

    const closeModal = () => {
        setErrorModalVisible(false);
        setErrorMessage('');
    };

    return (
        <View style={styles.page}>
            <View style={styles.loginImage}>
                <Image source={require('../../../assets/img-login3.png')} />
            </View>

            <View style={styles.containerLogin}>
                <TextInput
                    style={styles.input}
                    placeholder='Digite seu e-mail'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    keyboardType="email-address"

                />

                <TextInput
                    style={styles.input}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                    onChangeText={(text) => setSenha(text)}
                    value={senha}
                />

                <TouchableOpacity
                    style={styles.loginButtonContainer}
                    onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Sign Up')}>
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <ErrorModal
                visible={errorModalVisible}
                errorMessage={errorMessage}
                onClose={closeModal}
            />
        </View>
    );
}
