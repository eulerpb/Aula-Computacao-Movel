import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const Home = ({ userName }) => {

    const renderBox = (icon, titulo, quantidade) => {
        return (
            <View style={styles.box1}>
                <Image style={styles.icones} source={icon} />
                <Text style={styles.boxQuantity}>{quantidade}</Text>
                <Text style={styles.boxTitle}>{titulo}</Text>
            </View>
        );
    };

    return (
        <View style={styles.page}>
            <View style={styles.containerHome}>
                <TouchableOpacity style={styles.profileButton}>
                    <Feather name='user' color={'#FCA311'} size={30} />
                </TouchableOpacity>
                <Text style={styles.welcomeText}>Olá, {userName}</Text>
                <View style={styles.boxes}>
                    {/*Quantidades de exemplo */}
                    {renderBox(require('../../../assets/emp_icon.png'), 'Itens em estoque', 10)}
                    {renderBox(require('../../../assets/package.png'), 'Reposição de itens', 15)}
                    {renderBox(require('../../../assets/alert.png'), 'Alertas', 0)}
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
                    <View style={styles.boxCrud}>
                    <Feather name='box' color={'#fff'} size={40} style={styles.iconStyle}/>
                    <Feather name='plus' color={'#fff'} size={30} style={styles.iconStyleExtra}/>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.crudButton}>
                    <View style={styles.boxCrud}>
                    <Feather name='box' color={'#fff'} size={40} style={styles.iconStyle}/>
                    <Feather name='x' color={'#fff'} size={30} style={styles.iconStyleExtra}/>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;