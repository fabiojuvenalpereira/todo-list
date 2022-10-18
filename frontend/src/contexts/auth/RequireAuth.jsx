import React, { useContext } from 'react';
import Login from '../../pages/Login';
import AuthContext from './AuthContext';

function RequireAuth({ children }) {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />;
  }

  return children;
}

export default RequireAuth;
