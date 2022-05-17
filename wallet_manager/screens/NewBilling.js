import React, { useState } from 'react';
import { Text, StyleSheet, View} from 'react-native';

export default function NewBilling() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Calendario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});