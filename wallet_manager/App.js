import React, { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import MainNavigator from './routes/MainNavigator';
import Splash from './screens/Splash';

export default function App() {
  const [exibeSplash, setExibeSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => setExibeSplash(false), 3000);
  }, []);

  return (
    <AuthProvider>
      {exibeSplash ? <Splash /> : <MainNavigator />}
    </AuthProvider>
  );
}
