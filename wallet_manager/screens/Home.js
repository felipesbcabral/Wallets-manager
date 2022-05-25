import React from 'react';
import { View, FlatList, Text, Pressable, SafeAreaView } from 'react-native';

export default function Lista({navigation}) {
  const Wallets = [
    { nome: 'Academia', tipo: 'R$: 69,90' },
    { nome: 'Faculdade', tipo: 'R$: 469,90' },
    { nome: 'Carro', tipo: 'R$: 687,90' },
  ];

  const Wallet = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 56,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          alignItems: 'center',
          paddingHorizontal: 16,
        }}>
        <Text style={{ flex: 2 }}>{item.nome}</Text>
        <Text style={{ flex: 1 }}>{item.tipo}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex :1}}>
    <View style={{flex :1}}>
       <View >
         
        
          
      </View>
      <FlatList data={Wallets} renderItem={Wallet} />
     
    </View>
    </SafeAreaView>
  );
}