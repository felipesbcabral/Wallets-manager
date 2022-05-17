import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import Login from './screens/Login';
import AppNavigator from './app.navigator';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
    // <NavigationContainer>
    // <Routes/>
    // </NavigationContainer>
  );
}