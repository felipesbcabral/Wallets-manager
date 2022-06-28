import React, { useContext, useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { View, FlatList, Text, Pressable, SafeAreaView, ImageBackground, Image, StyleSheet, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UsuarioContext } from '../contexts/UsuarioContext';

export default function Lista({ navigation }) {
  const [logado, setLogado] = useContext(UsuarioContext);
  const [Contas, setContas] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      firebase
        .firestore()
        .collection('contas')
        .get()
        .then((querySnapshot) => {
          const dados = [];
          querySnapshot.forEach((doc) => {
            dados.push({ id: doc.id, ...doc.data() });
          });
          setContas(dados);
        })
        .catch((error) => alert(error.message));
    });

    return unsubscribe;
  }, [navigation]);
  const contas = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 16,
          backgroundColor: 'white',
        }}>
        <Text style={{ flex: 2 }}>{item.descricao}</Text>
        <Text style={{ flex: 1 }}>{item.valor}</Text>
      </View>
    );
  };
  return (
   <SafeAreaView style={{flex :1, backgroundColor: '#E5E5E5'}}>
    <View style={{flex :1}}>
       <View style={{
          flexDirection: 'row',
          paddingLeft: 16,
          backgroundColor: '#4BE3AC',
          height: 56,
          alignItems: 'center'
        }}>
          <Text
            style={{ flex: 2,
              color: 'white',
              fontSize: 24,
              textAlign: 'center'
            }}>
            Wallets Manager
          </Text>
          <Pressable  onPress={() => {
              setLogado(false);
            }}>
          <Text style={{color: 'white', paddingHorizontal: 16}}>SAIR</Text>
          </Pressable>
      </View>
      <FlatList data={Contas} renderItem={contas} />
      <Pressable 
      style={{position: 'absolute', bottom: 16, right: 16,
      height: 48, width: 48, backgroundColor: '#4BE3AC', 
      borderRadius: 30, justifyContent: 'center', 
      alignItems: 'center'
      }}
      onPress={() => navigation.navigate('cadastrovalor')}>
        <Text style={{color: 'white', fontSize: 15}}>ADD</Text>
      </Pressable>

        <View style={styles.bottomNavBar}>
          <Pressable
            style={styles.iconsBar}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} color="#000" />
            <Text>Home</Text>
          </Pressable>

          <Pressable
            style={styles.iconsBar}
            onPress={() => {
              navigation.navigate('AddValores');
            }}>
            <Icon name="plus-circle" size={30} color="#000" />
            <Text>Adicionar Valores</Text>
          </Pressable>

          <Pressable
            style={styles.iconsBar}
            onPress={() => {
              navigation.navigate('EditValores');
            }}>
            <Icon name="edit" size={30} color="#000" />
            <Text>Editar Valores</Text>
          </Pressable>

          <Pressable
            style={styles.iconsBar}
            onPress={() => {
              navigation.navigate('Perfil');
            }}>
            <MaterialCommunityIcons name="account" size={30} color="#000" />
            <Text>Perfil</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  bottomNavBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
  },
  iconsBar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});