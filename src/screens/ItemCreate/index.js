import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import ConfirmationModal from '../../components/ConfirmationModal';
import QRCode from 'react-native-qrcode-svg';
import axios from 'axios';

export default function ItemCreate({ navigation }) {
    const [type, setType] = useState('unidade');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [idproduto, setIdProduto] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);

    const handleCreateItem = async () => {
        try {
            const newItem = {
                id: idproduto,
                name,
                type,
                description,
                price,
            };

            const response = await axios.post('http://192.168.13.22:3000/produtos', newItem);
            console.log('Item created:', response.data);

            // Limpa os campos após a criação do item
            setIdProduto('');
            setName('');
            setType('');
            setDescription('');
            setPrice('');
            navigation.navigate('Produtos');

        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    const handleCancel = () => {
        setShowModal(true);
    };

    const handleConfirmCancel = () => {
        setShowModal(false);
        navigation.navigate('Produtos');
    };

    const handleDismissModal = () => {
        setShowModal(false);
    };

    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <Text style={styles.textoTitulo}>Criar novo item</Text>
                </View>
            </View>

            <View style={styles.newItemForms}>
                <TextInput
                    placeholder="ID do produto"
                    value={idproduto}
                    onChangeText={setIdProduto}
                    editable={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Nome do item"
                    value={name}
                    onChangeText={setName}
                />

                <View style={styles.radioContainer}>
                    <RadioButtonComponent
                        value="Caixa"
                        label="Caixa"
                        selectedValue={type}
                        onValueChange={setType}
                    />
                    <RadioButtonComponent
                        value="unidade"
                        label="Unidade"
                        selectedValue={type}
                        onValueChange={setType}
                    />
                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Descrição do item"
                    value={description}
                    onChangeText={setDescription}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Preço do item"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
            </View>

            <View>
                <TouchableOpacity onPress={() => setShowQRCode(!showQRCode)}>
                    <Text>Gerar QR Code</Text>
                </TouchableOpacity>
                {showQRCode && (
                    <View style={styles.qrCodeContainer}>
                        <QRCode value={idproduto} size={200} />
                    </View>
                )}
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.addItemButton} onPress={handleCreateItem}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </View>

            <ConfirmationModal
                visible={showModal}
                message="Tem certeza que deseja cancelar o cadastro?"
                onConfirm={handleConfirmCancel}
                onCancel={handleDismissModal}
            />
        </View>
    );
}
