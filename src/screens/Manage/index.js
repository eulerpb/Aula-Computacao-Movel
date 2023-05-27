import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import styles from './style';


export default function Manage ({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Gerenciar Estoque</Text>
                </View>
            </View>

            <View style={styles.principalBox}>
                <View style={styles.tituloBox}>
                    <Text style={styles.tituloBoxText}>Adicionar novo item</Text>
                </View>

            </View>
        </View>
    );
};