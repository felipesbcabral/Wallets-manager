import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Splash from './screens/Splash';
import AppNavigator from './app.navigator';

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 0);
  }, []);

  return (
    <AuthProvider>
      {exibeSplash ? <Splash /> : <AppNavigator />}
    </AuthProvider>
  );
}
