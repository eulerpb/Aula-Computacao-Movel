import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import axios from 'axios';

export default function ManageEstoque1({ }) {
    const [quantity, setQuantity] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const productList = ['Produto 1', 'Produto 2', 'Produto 3'];

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
                        />
                        <RadioButtonComponent
                            value="Remover"
                            label="Remover"
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
                    </View>

                    <Picker
                        selectedValue={selectedProduct}
                        onValueChange={(itemValue) => setSelectedProduct(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione um produto" value="" />
                        {productList.map((product) => (
                            <Picker.Item key={product} label={product} value={product} />
                        ))}
                    </Picker>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.addItemButton}>
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
