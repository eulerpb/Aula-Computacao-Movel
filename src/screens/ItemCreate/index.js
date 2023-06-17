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
        const generatedId = Math.random().toString(36).substr(2, 9);

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
