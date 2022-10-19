import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext';
import { login } from '../../api/user';
import createKeyOnLocalStorage from '../../utils/LocalStorageSetAndGet/createKey';
import setDataToLocalStorage from '../../utils/LocalStorageSetAndGet/setLocalStotageData';
import getDataFromLocalStorage from '../../utils/LocalStorageSetAndGet/getLocalStorageData';
import { decodeToken } from '../../utils/token/decodeToken';

function AuthProvider({ children }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState({});
  const [updatePage, setUpdatePage] = useState(false);

  const signIn = async (credentials) => {
    try {
      const result = await login(credentials);
      if (result.status) {
        createKeyOnLocalStorage('user');
        setDataToLocalStorage(result.data, 'user');
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const refreshPage = () => {
    setUpdatePage(!updatePage);
  };

  useEffect(() => {
    const validateToken = () => {
      const token = getDataFromLocalStorage('user');
      if (token) {
        const decodedToken = decodeToken(token);
        if (decodedToken.name) {
          setUser(true);
          setUserData(decodedToken);
          navigate('/tasks');
        }
      }
    };

    validateToken();
  }, [user, updatePage]);

  const contextValue = useMemo(() => ({
    user,
    userData,
    setUser,
    signIn,
    refreshPage,
  }), [user, userData]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
