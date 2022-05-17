import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Routes from './routes';


const { Navigator, Screen} = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator headerMode="none" initialRouteName="Login">
      <Screen name="Login" component={Login}></Screen>
      <Screen name="Home" component={Routes}></Screen>
    </Navigator>
  </NavigationContainer>
)

export default AppNavigator;