import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';


export default function Home({ navigation }) {

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.boxes}>
                    <View style={styles.box1}>
                        <Image style={styles.icones} source={require('../../../assets/emp_icon.png')} />
                        <Text style={styles.boxesText}>Itens em estoque</Text>
                    </View>
                    <View style={styles.box2}>
                        <Image style={styles.icones} source={require('../../../assets/package.png')} />
                        <Text style={styles.boxesText}>Reposição de itens</Text>
                    </View>
                    <View style={styles.box3}>
                        <Image style={styles.icones} source={require('../../../assets/alert.png')} />
                        <Text style={styles.boxesText}>Alertas</Text>
                    </View>
                </View>

            </View>

            <View style={styles.historic_box}>
                <Text style={styles.historic_box_text}>Últimas movimentações</Text>

                <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity style={styles.crudButton}>
                    <View style={styles.boxAddItem}></View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.crudButton}>
                    <View style={styles.boxRemItem}></View>
                </TouchableOpacity>
            </View>

            <View style={styles.navBar}>
                <TouchableOpacity
                    style={styles.navBarButton}
                    onPress={() => navigation.navigate('Home')}>
                    <View style={styles.boxMenuSelected}></View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navBarButton}
                    onPress={() => navigation.navigate('Manage')}>
                    <View style={styles.boxMenuNoSelected}></View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navBarButton}>
                    <View style={styles.boxMenuNoSelected}></View>

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
