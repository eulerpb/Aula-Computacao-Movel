import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import axios from 'axios';
import { format } from 'date-fns';

export default function ManageEstoque1({ navigation }) {
    const [selectedOption, setSelectedOption] = useState('Adicionar');
    const [quantity, setQuantity] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://192.168.0.103:3000/produtos');
            setProductList(response.data);
        } catch (error) {
            console.log('Erro ao buscar os produtos:', error);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleSave = async () => {
        try {
            const selectedProductItem = productList.find(product => product.name === selectedProduct);

            if (selectedProductItem) {
                const updatedQuantity = selectedProductItem.quant + (quantity * (selectedOption === 'Adicionar' ? 1 : -1));

                await axios.put(`http://192.168.0.103:3000/produtos/${selectedProductItem.id}`, {
                    ...selectedProductItem,
                    quant: updatedQuantity,
                });

                const currentDate = format(new Date(), 'dd/MM HH:mm');

                await axios.post('http://192.168.0.103:3000/activity', {
                    productId: selectedProductItem.id,
                    action: selectedOption,
                    quantity: quantity,
                    item: selectedProductItem.name,
                    date: currentDate,
                });

                const updatedProductList = productList.map(product =>
                    product.id === selectedProductItem.id ? { ...product, quant: updatedQuantity } : product
                );
                setProductList(updatedProductList);
            }

            navigation.navigate('Home');

        } catch (error) {
            console.error('Erro ao atualizar a quantidade:', error);
        }
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Gerenciar Estoque</Text>
                </View>

                <View style={styles.manageQuantForms}>
                    <View style={styles.radioContainer}>
                        <RadioButtonComponent
                            value="Adicionar"
                            label="Adicionar"
                            selectedValue={selectedOption}
                            onValueChange={setSelectedOption}
                        />
                        <RadioButtonComponent
                            value="Remover"
                            label="Remover"
                            selectedValue={selectedOption}
                            onValueChange={setSelectedOption}
                        />
                    </View>

                    <View style={styles.quantityContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleDecrement}>
                            <Text style={styles.buttonText}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                            style={styles.input}
                            value={quantity.toString()}
                            onChangeText={text => setQuantity(parseInt(text) || 0)}
                            keyboardType="numeric"
                        />
                        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
                            <Text style={styles.buttonText}>+</Text>
                        </TouchableOpacity>
                        <Picker
                            selectedValue={selectedProduct}
                            onValueChange={(itemValue) => setSelectedProduct(itemValue)}
                            style={styles.picker}
                            itemStyle={styles.pickerItem}>
                            <Picker.Item label="Selecione um produto" value="" />
                            {productList.map((product) => (
                                <Picker.Item key={product.id} label={product.name} value={product.name} />
                            ))}
                        </Picker>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addItemButton} onPress={handleSave}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
