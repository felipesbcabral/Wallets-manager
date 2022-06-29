import React from 'react';
import { Text, View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icons from '@expo/vector-icons/Ionicons';

export default function Splash() {
  return (
    <View style={{ flex: 1 }}>
    <LinearGradient
      colors={['#94FC13', '#4BE3AC', '#94FC13' ]} style={styles.body}
      start={{x: 1.0, y: 1.0 }}
      end={{x: 0.0, y: 0.0}}>
      <Icons name="wallet-outline" size={80} color="#032D3C" />
      <Text style={{ fontSize: 25, color:'#032D3C', paddingTop:100 }}> Wallets Manager </Text>
      <View style={{ marginTop:100, justifyContent:'flex-end', alignItems:'flex-end', paddingBottom:150 }}>
       <ActivityIndicator size="large" color="#032D3C"/>
      </View>
      <Text style={{ fontSize: 13, color:'#032D3C', paddingBottom:6 }}> Powered by Nós mesmo </Text>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#94FC13',
  },
});