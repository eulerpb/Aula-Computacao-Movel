import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from '../../Styles/style.js';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.background}>
            <View style={styles.loginImage}>
                <Image source={require('../../../assets/img-login3.png')} />
            </View>

            <View style={styles.containerLogin}>
                <TextInput style={styles.input}
                    placeholder='Digite seu e-mail'
                    onChange={() => { }} />

                <TextInput style={styles.input}
                    placeholder='Digite sua senha'
                    secureTextEntry={true}
                    onChange={() => { }} />

                <TouchableOpacity
                    style={styles.loginButtonContainer}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Sign Up')}>
                    <Text>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
