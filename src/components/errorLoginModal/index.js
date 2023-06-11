import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function ErrorModal({ visible, errorMessage, onClose }) {
    return (
        <Modal
            visible={visible}
            animationType="fade"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.errorText}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={styles.modalButton}
                        onPress={onClose}
                    >
                        <Text style={styles.modalButtonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
