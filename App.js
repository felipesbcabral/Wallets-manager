import * as firebase from 'firebase';
import Login from './src/screens/Login.js'
import React, { useState, useEffect } from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import MainNavigator from './src/routes/MainNavigator';
import Splash from './src/screens/Splash';
import { UsuarioProvider } from './src/contexts/UsuarioContext';

export default function App() {

const firebaseConfig = {
  apiKey: "AIzaSyApA0b5xMdZ1VFCMY7yTbP03xooUt6147k",
  authDomain: "wallet-manager-25c59.firebaseapp.com",
  projectId: "wallet-manager-25c59",
  storageBucket: "wallet-manager-25c59.appspot.com",
  messagingSenderId: "52131882680",
  appId: "1:52131882680:web:ec18ed4d6451bfafef364d"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);

  return (
  <UsuarioProvider>
    <AuthProvider>
      {exibeSplash ? <Splash /> : <MainNavigator />}
    </AuthProvider>
  </UsuarioProvider>
  );
}