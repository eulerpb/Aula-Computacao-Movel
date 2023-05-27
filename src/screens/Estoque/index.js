import React from 'react';
import { View , Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';


export default function Manage ({ navigation }) {

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Estoque atual</Text>
                </View>
            </View>

            <View style={styles.principalBox}>
                <Text style={styles.selecionarEstoque}>Estoque Principal</Text>
                <View style={styles.horizontalMenu}>
                    <TouchableOpacity style={styles.menuButton}><Text style={styles.menuText}>Estoque</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}><Text style={styles.menuText}>Entradas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.menuButton}><Text style={styles.menuText}>Saídas</Text></TouchableOpacity>
                </View>

                <View style={styles.secondBox}>
                    <View style={styles.cabecalho}>
                        <Text style={styles.cabecalhoText}>Unidade</Text>
                        <Text style={styles.cabecalhoText}>|</Text>
                        <Text style={styles.cabecalhoText}>Tipo</Text>
                        <Text style={styles.cabecalhoText}>|</Text>
                        <Text style={styles.cabecalhoTextProduto}>Produto</Text>
                        <Image style={styles.icon} source={require('../../../assets/icon-filter.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
};