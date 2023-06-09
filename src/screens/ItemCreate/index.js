import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import ConfirmationModal from '../../components/ConfirmationModal';
import QRCode from 'react-native-qrcode-svg';


export default function ItemCreate({ navigation }) {
    const [selectedValue, setSelectedValue] = useState('unidade');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [idproduto, setIdProduto] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showQRCode, setShowQRCode] = useState(false);


    const handleCreateItem = () => {
        // Gera um ID único para o novo item
        const generatedId = Math.random().toString(36).substr(2, 9);

        // Lógica para criar um novo item com os dados fornecidos

        setIdProduto(generatedId);
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

            <View style={styles.newUserForms}>
                <TextInput
                    placeholder="ID do produto"
                    value={idproduto}
                    onChangeText={setIdProduto}
                    editable={false}
                />
                <TextInput
                    placeholder="Nome do item"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="Descrição do item"
                    value={description}
                    onChangeText={setDescription}
                />
                <TextInput
                    placeholder="Preço do item"
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />
            </View>

            <View>
                <RadioButtonComponent
                    value="Caixa"
                    label="Caixa"
                    selectedValue={selectedValue}
                    onValueChange={setSelectedValue}
                />
                <RadioButtonComponent
                    value="unidade"
                    label="Unidade"
                    selectedValue={selectedValue}
                    onValueChange={setSelectedValue}
                />
            </View>

            <View>
                <TouchableOpacity style={styles.botao} onPress={() => setShowQRCode(!showQRCode)}>
                    <Text>Gerar QR Code</Text>
                </TouchableOpacity>
                {showQRCode && (
                    <View style={styles.qrCodeContainer}>
                        <QRCode value={idproduto} size={200} />
                    </View>
                )}
            </View>

            <View>
                <TouchableOpacity style={styles.botao} onPress={handleCreateItem}>
                    <Text>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botao} onPress={handleCancel}>
                    <Text>Cancelar</Text>
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
