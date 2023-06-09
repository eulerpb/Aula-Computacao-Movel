import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';
import ScrollButton from '../../components/ScrollButton';

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
  const stockData = [
    { unidade: 'Unidade 1', tipo: 'Tipo 1', produto: 'Produto 1' },
    { unidade: 'Unidade 2', tipo: 'Tipo 2', produto: 'Produto 2' },
    { unidade: 'Unidade 3', tipo: 'Tipo 3', produto: 'Produto 3' },
    { unidade: 'Unidade 4', tipo: 'Tipo 4', produto: 'Produto 4' },
    { unidade: 'Unidade 5', tipo: 'Tipo 5', produto: 'Produto 5' },
    { unidade: 'Unidade 6', tipo: 'Tipo 6', produto: 'Produto 6' },
    { unidade: 'Unidade 7', tipo: 'Tipo 7', produto: 'Produto 7' },
    { unidade: 'Unidade 8', tipo: 'Tipo 8', produto: 'Produto 8' },
    { unidade: 'Unidade 9', tipo: 'Tipo 9', produto: 'Produto 9' },
    { unidade: 'Unidade 10', tipo: 'Tipo 10', produto: 'Produto 10' },
    { unidade: 'Unidade 11', tipo: 'Tipo 11', produto: 'Produto 11' },
    { unidade: 'Unidade 12', tipo: 'Tipo 12', produto: 'Produto 12' },
    { unidade: 'Unidade 13', tipo: 'Tipo 13', produto: 'Produto 13' },
    { unidade: 'Unidade 14', tipo: 'Tipo 14', produto: 'Produto 14' },
    { unidade: 'Unidade 15', tipo: 'Tipo 15', produto: 'Produto 15' },

  ];

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