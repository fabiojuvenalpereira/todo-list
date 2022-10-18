import { createContext } from 'react';

const AuthContext = createContext({
  user: Boolean,
  login: () => {},
});

export default AuthContext;
