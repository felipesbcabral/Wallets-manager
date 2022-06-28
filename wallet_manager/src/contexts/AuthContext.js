import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [logado, setLogado] = useState(false);

  return (
    <AuthContext.Provider value={[logado, setLogado]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };