import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <View style={styles.background}>

      <View style={styles.container}>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.loginButtonText}>bababa</Text>
        </TouchableOpacity>

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  containerImage:{
    flex:1,
    width: 20,
    height: 20,
    justifyContent: 'center',
    marginBottom:210
  },

  buttonContainer:{
    height: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    width: 250,
  },
});
