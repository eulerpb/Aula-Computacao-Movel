import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import ScrollButton from '../../components/ScrollButton';
import axios from 'axios';

const TableHeader = () => {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.cabecalhoText}>Quantidade</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoText}>Tipo</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoTextProduto}>Produto</Text>
    </View>
  );
};

const StockItem = ({ quant, type, name }) => {
  return (
    <View style={styles.stockItem}>
      <Text style={styles.stockItemText}>{quant}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{type}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{name}</Text>
    </View>
  );
};

export default function Manage() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.103:3000/produtos');
        const filteredData = response.data.filter(item => item.quant > 0);
        setStockData(filteredData);
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
          <Text style={styles.textoTitulo}>Estoque atual</Text>
        </View>
      </View>

      <View style={styles.principalBox}>
        <Text style={styles.selecionarEstoque}>Estoque Principal</Text>
        
        {/* <ScrollButton /> */}

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
}
