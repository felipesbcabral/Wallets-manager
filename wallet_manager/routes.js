import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Callendar from './screens/Callendar';
import NewBilling from './screens/NewBilling';
import ButtonNew from './components/ButtonNew/ButtonNew';

import { Entypo, Feather } from '@expo/vector-icons';

// const Stack = createStackNavigator();


// function HomeStackScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//     </Stack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function Routes(){
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
        headerShown: false,
      }}
    >
      <Tab.Screen 
      name="Inicio" 
      component={Home} 
      options={{
        tabBarIcon: ({size, color}) => (
          <Entypo name="home" size={size} color={color} />
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
      component={NewBilling} 
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ focused ,size }) => (
          <ButtonNew size={size} focused={focused}/>
        )
      }}
      />

      <Tab.Screen 
      name="Calendário" 
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