import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';

import Button from './components/button';

export default function Profile(){
  const alerta = () => {
    alert('Você será desconectado!');
  }

  return(

  <View style={{flex: 1}}>
    <View style={{height: 120, backgroundColor: '#4BE3AC'}}>
      <View style = {{ alignItems: 'flex-end', paddingRight: 15, paddingTop: 35 }}>
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </View>
    </View>
    <View style={{flexGrow: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
      <Image
        source={require('/assets/zero_two.jpg')} 
        style={{
          position: 'absolute',
          top: -40,
          height: 75,
          width: 75,
          borderRadius: 100}} 
        />
        <View style = {{ paddingTop: 40, alignItems: 'center'}}>
          <Text style = {{ fontWeight: 'bold', fontSize: 18 }}> Admin </Text>
          <Text style = {{ fontSize: 12, color: '#00000060' }}> @Admin </Text>
        </View>
        <View>
          <Text style = {{ paddingLeft: 250, fontSize: 12 }}> Configurações </Text>
        </View>
        <View style = {{ paddingTop: 40 }}>
          <Button labelButton = "Privacidade"/>
          <Button labelButton = "Ajuda & Suporte"/>
          <Button labelButton = "Segurança"/>
          <Button labelButton = "Desconectar" onpress = {alerta}/>
        </View>
    </View>
  </View>
  );
}