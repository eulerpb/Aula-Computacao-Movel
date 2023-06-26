import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styles';
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../../config/firebase';
import Feather from 'react-native-vector-icons/Feather';

const TableHeader = () => {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.cabecalhoText}>Quant</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoText}>Tipo</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoTextProduto}>Produto</Text>
    </View>
  );
};

const StockItem = ({ quant, tipo, nome }) => {
  return (
    <View style={styles.stockItem}>
      <Text style={styles.stockItemText}>{quant}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{tipo}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{nome}</Text>
    </View>
  );
};

export default function Manage() {
  const [stockData, setStockData] = useState([]);

  const fetchData = async () => {
    try {
      const stockRef = collection(db, 'Produtos');
      const q = query(stockRef, where('quant', '>', 0));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => doc.data());
      setStockData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.tituloContainer}>
          <Text style={styles.textoTitulo}>Estoque atual</Text>
        </View>
      </View>

      <View style={styles.principalBox}>
        <Text style={styles.selecionarEstoque}>Estoque Principal</Text>

        <TouchableOpacity style={styles.refreshButton} onPress={(handleRefresh)}>
          <Feather name="refresh-cw" color={'#151E47'} size={30} />
        </TouchableOpacity>
        
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
