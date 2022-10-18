import React, { useEffect, useMemo, useState } from 'react';
import AuthContext from './AuthContext';
import { login } from '../../api/user';
import createKeyOnLocalStorage from '../../utils/LocalStorageSetAndGet/createKey';
import setDataToLocalStorage from '../../utils/LocalStorageSetAndGet/setLocalStotageData';
import getDataFromLocalStorage from '../../utils/LocalStorageSetAndGet/getLocalStorageData';
import { decodeToken } from '../../utils/token/decodeToken';

function AuthProvider({ children }) {
  const [user, setUser] = useState(false);
  const [loginResult, setLoginResult] = useState({});
  const [userData, setUserData] = useState({});

  const signIn = async (credentials) => {
    try {
      const { data } = await login(credentials);

      if (data) {
        createKeyOnLocalStorage('user');
        setDataToLocalStorage(data, 'user');
        setLoginResult(data);
        return true;
      }
      return false;
    } catch (error) {
      setLoginResult(error);
      return false;
    }
  };

  useEffect(() => {
    const validateToken = () => {
      try {
        const data = decodeToken(getDataFromLocalStorage('user'));

        if (data.name) setUser(true);
        setUserData(data);
      } catch (error) {
        setUser(false);
      }
    };
    validateToken();
  }, [user, loginResult]);

  const contextValue = useMemo(() => ({
    user,
    userData,
    setUser,
    signIn,
    loginResult,
  }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
