import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
import styles from './style';


export default function Estoque ({ navigation }) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Usuários</Text>
                </View>
            </View>

            <View style={styles.principalBox}>
                <TouchableOpacity style={styles.addUserButton}>
                    <Text style={styles.addUserButtonText}>Adicionar usuário</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};