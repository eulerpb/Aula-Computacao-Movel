import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import { collection, getDocs } from 'firebase/firestore';
import db from '../../config/firebase';

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

const StockItem = ({ id, tipo, nome, preco }) => {
    return (
        <View style={styles.productList}>
            <Text style={styles.productListText}>#{id}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>{tipo}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>{nome}</Text>
            <Text style={styles.productListText}>|</Text>
            <Text style={styles.productListText}>R$ {preco},00</Text>
        </View>
    );
};

export default function ItemManage({ navigation }) {
    const [stockData, setStockData] = useState([]);
    
    useEffect(() => {
        const fetchStockData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'Produtos'));
                const data = [];
                querySnapshot.forEach((doc) => {
                    data.push({ id: doc.id, ...doc.data() });
                });
                setStockData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchStockData();
    }, []);

    const fetchStockData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'Produtos'));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push({ id: doc.id, ...doc.data() });
            });
            setStockData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchStockData();
    }, []);

    const handleRefresh = () => {
        fetchStockData();
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Adicionar Item</Text>
                </View>
            </View>

            <View style={styles.forms}>
                <View style={styles.alignButtons}>
                    <TouchableOpacity
                        style={styles.newItemButton}
                        onPress={() => navigation.navigate('Criar Produto')}
                    >
                        <Text style={styles.newItemButtonText}>Adicionar novo item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.refreshButton} onPress={(handleRefresh)}>
                        <Feather name="refresh-cw" color={'#151E47'} size={30} />
                    </TouchableOpacity>
                </View>

                <TableHeader />
                <FlatList
                    data={stockData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <StockItem {...item} />}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
            </View>
        </View>
    );
}
