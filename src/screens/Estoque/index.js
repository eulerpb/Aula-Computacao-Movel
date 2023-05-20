import React from 'react';
import { View , Text, TouchableOpacity} from 'react-native';
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
                <View style={styles.secondBox}></View>
            </View>




            <View style={styles.navBar}>
                <TouchableOpacity 
                 style={styles.navBarButton}
                 onPress={() => navigation.navigate('Home')}>
                    <View style={styles.boxMenuNoSelected}></View>
                </TouchableOpacity>

                <TouchableOpacity 
                 style={styles.navBarButton}
                 onPress={() => navigation.navigate('Manage')}>
                    <View style={styles.boxMenuNoSelected}></View>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.navBarButton}
                    onPress={() => navigation.navigate('Estoque')}>
                    <View style={styles.boxMenuSelected}></View>

                </TouchableOpacity>
                <TouchableOpacity 
                 style={styles.navBarButton}
                 onPress={() => navigation.navigate('Users')}>
                 <View style={styles.boxMenuNoSelected}></View>
                </TouchableOpacity>
            </View>
        </View>
    );
};