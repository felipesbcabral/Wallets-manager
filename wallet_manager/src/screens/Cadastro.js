import * as firebase from 'firebase';
import React, { useContext, useState } from 'react';
import { Button, StyleSheet, Text, Image, ScrollView, useWindowDimensions, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Email from '../components/CustomInput/Email';
import Name from '../components/CustomInput/Name';
import Password from '../components/CustomInput/Password';
import CustomButton from '../components/CustomButton/CustomButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { UsuarioContext } from '../contexts/UsuarioContext';

export default function Login( {navigation} ) {
const [logado, setLogado] = useContext(UsuarioContext);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const signIn = () => navigation.navigate('Login');

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
            Crie sua conta 
          </Text>
            <Name
              placeholder="Nome"
              value={name}
              setValue={setName}
            />
            <Email
              placeholder="E-mail"
              value={email}
              setValue={setEmail}
              secureTextEntr
            />
             <Password
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry
            /> 
        </View>
        <CustomButton
          text="Cadastrar"
          onPress={() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => setLogado(true))
            .catch((error) => alert(error.message));
        }}
        />   <CustomButton
          text="Voltar"
        onPress={signIn}
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
    marginBottom: 15,
    marginTop: 15,
  },
  walletsIconConfig: {
    alignItems: 'center',
  }
});