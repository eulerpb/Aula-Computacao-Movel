import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import ConfirmationModal from '../../components/ConfirmationModal';
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';
import db from '../../config/firebase';

export default function ItemCreate({ navigation }) {
  const [type, setType] = useState('unidade');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCreateItem = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Produtos'));
      const itemCount = querySnapshot.size;
      const newItem = {
        id: '',
        nome: name,
        tipo: type,
        descricao: description,
        preco: price,
        quant: 0,
        reference: '',
      };

      const docRef = await addDoc(collection(db, 'Produtos'), newItem);
      newItem.reference = docRef.id;
      await setDoc(doc(db, 'Produtos', docRef.id), {
        id: itemCount + 1,
        nome: name,
        tipo: type,
        descricao: description,
        preco: price,
        quant: 0,
        reference: docRef.id,
      })
      console.log('Item created with ID: ', docRef.id);

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
          style={styles.input}
          placeholder="Nome do item"
          value={name}
          onChangeText={setName}
        />

        <View style={styles.radioContainer}>
          <RadioButtonComponent
            value="Cx"
            label="Caixa"
            selectedValue={type}
            onValueChange={setType}
          />
          <RadioButtonComponent
            value="Un"
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
