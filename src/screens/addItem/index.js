import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import axios from 'axios';

const StockItem = ({ id, name, quantity }) => {
  return (
    <View style={styles.stockItem}>
      <Text style={styles.stockItemText}>{name}</Text>
      <Text style={styles.stockItemText}>{quantity}</Text>
    </View>
  );
};

export default function ManageEstoque() {
  const [stockData, setStockData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantityToAdd, setQuantityToAdd] = useState(0);
  const [quantityToRemove, setQuantityToRemove] = useState(0);

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

  const handleAddQuantity = () => {
    // Update the quantity of selected items with the desired value (quantityToAdd)
    const updatedItems = selectedItems.map(item => {
      const existingItem = stockData.find(data => data.id === item.id);
      if (existingItem) {
        return {
          ...item,
          quantity: item.quantity + quantityToAdd,
        };
      }
      return item;
    });

    setSelectedItems(updatedItems);
    setQuantityToAdd(0);
  };

  const handleRemoveQuantity = () => {
    // Update the quantity of selected items by subtracting the desired value (quantityToRemove)
    const updatedItems = selectedItems.map(item => {
      const existingItem = stockData.find(data => data.id === item.id);
      if (existingItem) {
        const newQuantity = item.quantity - quantityToRemove;
        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      }
      return item;
    });

    setSelectedItems(updatedItems);
    setQuantityToRemove(0);
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Gerenciar Estoque</Text>
        </View>
      </View>

      <View style={styles.stockListContainer}>
        <FlatList
          data={stockData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.stockItem, selectedItems.some(selected => selected.id === item.id) && styles.selectedItem]}
              onPress={() => {
                if (selectedItems.some(selected => selected.id === item.id)) {
                  setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
                } else {
                  setSelectedItems([...selectedItems, item]);
                }
              }}
            >
              <Text style={styles.stockItemText}>{item.name}</Text>
              <Text style={styles.stockItemText}>{item.quantity}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.quantityContainer}>
        <Text style={styles.labelText}>Quantidade a adicionar:</Text>
        <TextInput
          style={styles.input}
          value={quantityToAdd.toString()}
          onChangeText={text => setQuantityToAdd(parseInt(text) || 0)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddQuantity}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quantityContainer}>
        <Text style={styles.labelText}>Quantidade a remover:</Text>
        <TextInput
          style={styles.input}
          value={quantityToRemove.toString()}
          onChangeText={text => setQuantityToRemove(parseInt(text) || 0)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.removeButton} onPress={handleRemoveQuantity}>
          <Text style={styles.buttonText}>Remover</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.selectedItemsContainer}>
        <Text style={styles.selectedItemsText}>Itens selecionados:</Text>
        <FlatList
          data={selectedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <StockItem id={item.id} name={item.name} quantity={item.quantity} />
          )}
        />
      </View>
    </View>
  );
}
