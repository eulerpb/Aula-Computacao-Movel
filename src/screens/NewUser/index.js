import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import RadioButtonComponent from '../../components/RadioButton';
import ConfirmationModal from '../../components/ConfirmationModal';



export default function NewUser({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('Estoquista');
  const [showModal, setShowModal] = useState(false);

  const handleCreateUser = () => {
    // Gera um ID único para o novo use
    const generatedId = Math.random().toString(36).substr(2, 9);

    // Lógica para criar um novo user com os dados fornecidos

    setIdProduto(generatedId);
  };

  const handleCancel = () => {
    setShowModal(true);
  };

  const handleConfirmCancel = () => {
    setShowModal(false);
    navigation.navigate('Usuários');
  };

  const handleDismissModal = () => {
    setShowModal(false);
  };


  return (
    <View style={styles.page}>

      <View style={styles.container}>
        <View style={styles.tituloContainer}>
          <Text style={styles.textoTitulo}>Adicionar novo usuário</Text>
        </View>
      </View>

      <View style={styles.forms}>

        <TextInput style={styles.input}
          placeholder='Nome de usuário'
          onChange={() => { }} />

        <TextInput style={styles.input}
          placeholder='E-mail'
          onChange={() => { }} />

        <View>
          <RadioButtonComponent
            value="Estoquista"
            label="Estoquista"
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
          />
          <RadioButtonComponent
            value="Analista"
            label="Analista"
            selectedValue={selectedValue}
            onValueChange={setSelectedValue}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.addUserButton}
            onPress={handleCreateUser}>
            <Text style={styles.buttonText}>Adicionar usuário</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cancelButton}
            onPress={handleCancel}>
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

    </View>
  )
}