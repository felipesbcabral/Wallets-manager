import React, { useState } from 'react';
import { Button, StyleSheet, Text, Image, ScrollView, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Email from '../components/CustomInput/Email';
import Name from '../components/CustomInput/Name';
import CustomButton from '../components/CustomButton/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Esqueci() {
const [email, setEmail] = useState('');


  const {height} = useWindowDimensions();

 return (
    <LinearGradient  colors={['#94FC13', '#4BE3AC', '#94FC13' ]} style={styles.body}
      start={{x: 1.0, y: 1.0 }}
      end={{x: 0.0, y: 0.0}}>
        <View>
          <View style={styles.walletsIconConfig }>
        <Image style={ styles.walletsIcon }source={require('../assets/wallets-icon.png')} />
        </View>
          <Text style={ styles.titulo }>
            Esqueceu a senha ?
          </Text>
            <Email
              placeholder="E-mail"
              value={email}
              setValue={setEmail}
              secureTextEntr
            />
            
  </View>
        <CustomButton
          text="Enviar" 
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94FC13',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
    
  },
  walletsIcon: {
    width: 80, 
    height: 80,
    marginBottom: 10,
    marginTop: 15,
  },
  walletsIconConfig: {
    alignItems: 'center',
  }
});  
            