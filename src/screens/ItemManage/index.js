import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

const TableHeader = () => {
    return (
        <View style={styles.cabecalho}>
            <Text style={styles.cabecalhoText}>ID</Text>
            <Text style={styles.cabecalhoText}>|</Text>
            <Text style={styles.cabecalhoText}>Tipo</Text>
            <Text style={styles.cabecalhoText}>|</Text>
            <Text style={styles.cabecalhoText}>Produto</Text>
        </View>
    );
};

const StockItem = ({ id, type, name, price }) => {
    return (
        <View style={styles.productList}>
            <Text style={styles.productListText}>#{id}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>{type}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>{name}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>R$ {price},00</Text>
        </View>
    );
};

export default function ItemManage({ navigation }) {
    const [stockData, setStockData] = useState(true);
    const refreshData = async () => {
        try {
            const response = await axios.get('http://192.168.0.103:3000/produtos');
            setStockData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.0.103:3000/produtos');
                setStockData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Adicionar Item</Text>
                </View>
            </View>

            <View style={styles.forms}>
                <View style={styles.alignButtons}>
                    <TouchableOpacity style={styles.newItemButton} onPress={() => navigation.navigate('Criar Produto')}>
                        <Text style={styles.newItemButtonText}>Adicionar novo item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.refreshButton} onPress={refreshData}>
                        <Feather name='refresh-cw' color={'#151E47'} size={30} />
                    </TouchableOpacity>
                </View>

                <TableHeader />
                <FlatList
                    data={stockData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <StockItem {...item} />}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
            </View>
        </View>
    );
};