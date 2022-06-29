import React, { useContext, useState } from 'react';
import * as firebase from 'firebase';
import { Button, StyleSheet, Text, Image, ScrollView, useWindowDimensions, View, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Email from '../components/CustomInput/Email';
import Password from '../components/CustomInput/Password';
import CustomButton from '../components/CustomButton/CustomButton';
import Test from '../components/CustomButton/Test';

import { UsuarioContext } from '../contexts/UsuarioContext';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Login({navigation} ) {
const [logado, setLogado] = useContext(UsuarioContext);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();

const signIn = () => navigation.navigate("Home") 
const esqueci = () => navigation.navigate("Esqueci") 
const createAccount = () => navigation.navigate("Cadastro") 

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
            <Email
              placeholder="E-mail"
              value={email}
              setValue={setEmail}
            />
            <Password
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />
        </View>
        <Test
          text="Entrar"
          onPress={() => {
          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => setLogado(true))
            .catch((error) => alert(error.message));
        }}
        />
        <CustomButton
          text="Esqueceu sua senha?" 
          type="TERTIARY"
          onPress={esqueci}
        />
        <CustomButton
          text="Ainda não tem uma conta? Cadastre-se" 
          type="TERTIARY"
          onPress={createAccount}
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
  textlogin: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
    marginBottom: 10
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