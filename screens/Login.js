import React, { useState } from 'react';
import { Button, StyleSheet, Text, Image, ScrollView, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from '../components/CustomInput/CustomInput';
import CustomButton from '../components/CustomButton/CustomButton';

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Entrar");
  }

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed");
  }

  const onSignUpPressed = () => {
    console.warn("onSignUpPressed");
  }

  return (
    <LinearGradient  colors={['#94FC13', '#4BE3AC', '#94FC13' ]} style={styles.body}
      start={{x: 1.0, y: 1.0 }}
      end={{x: 0.0, y: 0.0}}>
        <View>
          <View style={styles.walletsIconConfig }>
        <Image style={ styles.walletsIcon }source={require('../assets/wallets-icon.png')} />
        </View>
          <Text style={ styles.titulo }>
            Wallets-Manager
          </Text>
            <Text style={ styles.textlogin }>Faça seu login</Text>
            <CustomInput
              placeholder="E-mail"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
        </View>
        <CustomButton
          text="Entrar" 
          onPress={onSignInPressed} 
        />
        <CustomButton 
          text="Esqueceu sua senha?" 
          onPress={onForgotPasswordPressed} 
          type="TERTIARY" 
        />
        <CustomButton 
          text="Ainda não tem uma conta? Cadastre-se" 
          onPress={onSignUpPressed} 
          type="TERTIARY" 
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
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000000',
  },
  rotulo: { 
    textAlign: "left",
    color: '#032D3C', 
    paddingTop: 16,
  },
  textlogin: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10
  },
  forgotPassword: {
    color: '#032D3C',
    opacity: 70,
    fontSize: 12,
    textAlign: "right",
    marginBottom: 90
  },
  textCreateAccount: {
    color: '#032D3C',
    opacity: 70,
    fontSize: 12,
    textAlign: "center",
  },
  createAccount: {
    marginTop: 80,
    color: '#032D3C',
    fontWeight: 'bold',
    opacity: 70,
    fontSize: 12,
    textAlign: "center",
  },
  walletsIcon: {
    width: 80, 
    height: 80,
    marginBottom: 15,
    marginTop: 15,
  },
  walletsIconConfig: {
    alignItems: 'center',
  }
});