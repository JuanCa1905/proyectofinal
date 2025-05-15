import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const login = (nombre) => {
    const user = { id: uuid(), nombre };
    setUsuario(user);
  };

  return (
    <AuthContext.Provider value={{ usuario, login }}>
      {children}
    </AuthContext.Provider>
  );
}
