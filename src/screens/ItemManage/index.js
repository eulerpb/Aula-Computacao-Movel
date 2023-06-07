import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function ItemManage({navigation}) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Adicionar Item</Text>
                </View>
            </View>

            <View style={styles.forms}>
                <TouchableOpacity style={styles.newItemButton} onPress={() => navigation.navigate('Criar Produto')}>
                    <Text style={styles.newItemButtonText}>Adicionar novo item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};