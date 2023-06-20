import React, {useState, useEffect} from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import ScrollButton from '../../components/ScrollButton';
import axios from 'axios';

const TableHeader = () => {
  return (
    <View style={styles.cabecalho}>
      <Text style={styles.cabecalhoText}>Unidade</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoText}>Tipo</Text>
      <Text style={styles.cabecalhoText}>|</Text>
      <Text style={styles.cabecalhoTextProduto}>Produto</Text>
      <Image style={styles.icon} source={require('../../../assets/icon-filter.png')} />
    </View>
  );
};

const StockItem = ({ unidade, tipo, produto }) => {
  return (
    <View style={styles.stockItem}>
      <Text style={styles.stockItemText}>{unidade}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{tipo}</Text>
      <Text style={styles.stockItemText}>|</Text>
      <Text style={styles.stockItemText}>{produto}</Text>
    </View>
  );
};


export default function Manage() {
  // Dados do estoque (exemplo)

  const [stockData, setStockData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.0.109:3000/produtos');
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
          <Text style={styles.textoTitulo}>Estoque atual</Text>
        </View>
      </View>

      <View style={styles.principalBox}>
        <Text style={styles.selecionarEstoque}>Estoque Principal</Text>
        <ScrollButton />

        <View style={styles.secondBox}>
          <TableHeader />
          <FlatList
            data={stockData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <StockItem {...item} />}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
        </View>
      </View>
    </View>
  );
};