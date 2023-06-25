import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import axios from 'axios';

const Home = ({ navigation }) => {
    const [productList, setProductList] = useState([]);
    const [dataHistoryItem, setDataHistoryItem] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.0.109:3000/activity');
                setDataHistoryItem(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const refreshData = async () => {
        try {
            const productListResponse = await axios.get('http://192.168.0.109:3000/produtos');
            setProductList(productListResponse.data);

            const dataHistoryResponse = await axios.get('http://192.168.0.109:3000/activity');
            setDataHistoryItem(dataHistoryResponse.data);
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchProducts();    
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://192.168.0.109:3000/produtos');
            setProductList(response.data);
        } catch (error) {
            console.log('Erro ao buscar os produtos:', error);
        }
    };

    const calculateTotalQuantity = () => {
        const totalQuantity = productList.reduce((acc, product) => {
            return acc + product.quant;
        }, 0);
        return totalQuantity;
    };

    const countProductsWithQuantityOne = () => {
        const productsWithQuantityOne = productList.filter((product) => {
            return product.quant === 1;
        });
        return productsWithQuantityOne.length;
    };

    const LastItens = ({ date, action, quantity, item }) => {
        // Função para determinar o símbolo e a cor com base na ação
        const getSymbolAndColor = () => {
            let symbol = '';
            let color = '';

            if (action === 'Adicionar') {
                symbol = '+';
                color = '#98F027';
            } else if (action === 'Remover') {
                symbol = '-';
                color = '#E84141';
            }

            return { symbol, color };
        };

        const { symbol, color } = getSymbolAndColor();

        return (
            <View style={styles.historyList}>
                <Text style={styles.historyListText}>{date}</Text>
                <Octicons name="dot-fill" color={color} size={20} style={{ marginLeft: 10 }} />
                <Text style={styles.historyListText}>{symbol}</Text>
                <Text style={styles.historyListText}>{quantity}</Text>
                <Text style={styles.historyListText}>{item}</Text>
            </View>
        );
    };


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
                    <Feather name="user" color={'#FCA311'} size={30} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.refreshButton} onPress={refreshData}>
                    <Feather name='refresh-cw' color={'#fff'} size={30} />
                </TouchableOpacity>
                {/* <Text style={styles.welcomeText}>Olá, {userName}</Text> */}
                <View style={styles.boxes}>
                    {renderBox(
                        require('../../../assets/emp_icon.png'),
                        'Itens em estoque',
                        calculateTotalQuantity())}
                    {renderBox(
                        require('../../../assets/alert.png'),
                        'Alertas',
                        countProductsWithQuantityOne())}
                </View>
            </View>

            <View style={styles.historic_box}>
                <Text style={styles.historic_box_text}>Últimas movimentações</Text>

                <FlatList
                    data={dataHistoryItem}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <LastItens {...item} />}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                    contentContainerStyle={styles.flatListContainer}
                />

                <TouchableOpacity style={styles.moreButton}>
                    <Text style={styles.moreButtonText}>Ver mais</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secondBox}>
                <TouchableOpacity
                    style={styles.crudButton}
                    onPress={() => navigation.navigate('CRUD Estoque2')}
                >
                    <View style={styles.boxCrud}>
                        <Feather name="box" color={'#fff'} size={40} style={styles.iconStyle} />
                        <Feather name="edit-2" color={'#fff'} size={20} style={styles.iconStyleExtra} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;
