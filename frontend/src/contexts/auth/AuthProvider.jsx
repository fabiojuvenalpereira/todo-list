import React, { useMemo, useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(true);

  const contextValue = useMemo(() => ({
    user,
    setUser,
    isLogged,
    setIsLogged,
  }), []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
