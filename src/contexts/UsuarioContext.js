import React, { createContext, useState } from 'react';

const UsuarioContext = createContext();

const UsuarioProvider = (props) => {
  const [logado, setLogado] = useState(false);

  return (
    <UsuarioContext.Provider value={[logado, setLogado]}>
      {props.children}
    </UsuarioContext.Provider>
  );
};

export { UsuarioContext, UsuarioProvider };
