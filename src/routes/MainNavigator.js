import React, { useContext } from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Button } from 'react-native';
import { UsuarioContext } from '../contexts/UsuarioContext';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import ButtonNew from '../components/ButtonNew/ButtonNew';
import AddValores from '../screens/AddValores';
import Splash from '../screens/Splash';
import ForgotPassword from '../screens/Esqueci';
import EditValores from '../screens/EditValores';
import CreateAccount from '../screens/Cadastro';

const Stack = createNativeStackNavigator();

export default function MainNagivator() {
  const [logado] = useContext(UsuarioContext);
  return (
    <NavigationContainer>
      {!logado ? (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={ Login }/>
        <Stack.Screen name="Cadastro" component={ CreateAccount }/>
        <Stack.Screen name="Esqueci" component={ ForgotPassword }/>
      </Stack.Navigator>
      ) : (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={ Home }/>
        <Stack.Screen name="AddValores" component={ AddValores }/>
        <Stack.Screen name="Perfil" component={ Profile }/>
        
        <Stack.Screen name="EditValores" component={ EditValores }/>
      </Stack.Navigator>
    )}
  </NavigationContainer>
  );
}