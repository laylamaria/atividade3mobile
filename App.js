import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View } from 'react-native';
import IMCApp  from './IMCApp';
import  {  styles  }  from  './estilo'

export default function App() {
  return (
    <View style={styles.container}>
      <IMCApp></IMCApp>
    </View>
  );
}


