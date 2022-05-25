import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, Alert, LogoTitle } from 'react-native';


import Login from './screens/Login';
import Home from './screens/Home';
import Callendar from './screens/Callendar';
import Search from './screens/Search';
import Profile from './screens/Profile';
import NewBilling from './screens/NewBilling';
import ButtonNew from './components/ButtonNew/ButtonNew';
import AddValores from './screens/AddValores';
import Cadastro from './screens/Cadastro';
import Esqueci from './screens/Esqueci';

import { Entypo, Feather } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DefaultColor = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

function Tabs() {
  return(
    <Tab.Navigator
    tabBarOptions={{
        labelStyle: {
            marginBottom: 5
          },
        activeTintColor: '#fff',
    }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopColor: 'transparent',
        },
        paddingBottom: 5,
        paddingTop: 5,
        headerShown: false
      }}
    >
      <Tab.Screen 
      name="Inicio" 
      component={Home}
      options={{
        tabBarIcon: ({size, color}) => (
          <Feather name="home" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Procurar" 
      component={Search}
      options={{
        tabBarIcon: ({size, color}) => (
          <Feather name="search" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Novo" 
      component={AddValores}
      options={{
        title: 'Crie uma nova conta',
        tabBarLabel: '',
        tabBarIcon: ({ focused ,size }) => (
          <ButtonNew size={size} focused={focused}
          
          />
        )
      }}
      />

      <Tab.Screen 
      name="Callendar" 
      component={Callendar} 
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="calendar" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen 
      name="Perfil" 
      component={Profile} 
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="user" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

const AppNavigator = () => (
  <NavigationContainer theme={DefaultColor}>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
      name="Login" 
      component={Login}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name="Home" 
      component={Tabs}
      options={{
        headerStyle: {
          backgroundColor: '#4BE3AC',
          borderBottomColor: 'transparent',
        }
      }}
      />
      <Stack.Screen 
      name="Esqueci" 
      component={Esqueci}
       options={{
        title: 'PAGINA INICIAL',
        headerStyle: {
          backgroundColor: '#4BE3AC',
          borderBottomColor: 'transparent',
        }
      }}
      />
      <Stack.Screen 
      name="Cadastro" 
      component={Cadastro}
      options={{
        title: 'PAGINA INICIAL',
        headerStyle: {
          backgroundColor: '#4BE3AC',
          borderBottomColor: 'transparent',
        }
      }}
      />
      <Stack.Screen 
      name="Search" 
      component={Tabs}
      options={{
        headerShown: false
      }}
      />
      <Stack.Screen 
      name="Callendar" 
      component={Tabs}
      options={{
        title: 'PAGINA DE CALENDARIO',
        headerStyle: {
          backgroundColor: '#4BE3AC'
        }
      }}
      />
      <Stack.Screen 
      name="Profile" 
      component={Tabs}
      options={{
        title: 'PAGINA DE PERFIL',
        headerStyle: {
          backgroundColor: '#4BE3AC',
        }
      }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)

export default AppNavigator;