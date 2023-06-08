import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

export default function RadioButtonComponent({ value, label, selectedValue, onValueChange }) {
  return (
    <View style={styles.radioButtonContainer}>
      <RadioButton value={value} status={selectedValue === value ? 'checked' : 'unchecked'} onPress={() => onValueChange(value)} />
      <Text style={styles.radioButtonLabel}>{label}</Text>
    </View>
  );
}
