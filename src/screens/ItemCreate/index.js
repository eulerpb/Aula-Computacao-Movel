import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';

export default function ItemCreate({ navigation }) {
    return (
        <View style={styles.page}>

            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Criar novo item</Text>
                </View>
            </View>

            <View style={styles.newUserForms}>
                <TextInput placeholder='Teste'/>
            </View>

            <View>
                <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Produtos')}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
            </View>



        </View>
    );
};