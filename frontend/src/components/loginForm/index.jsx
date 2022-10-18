import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../contexts/auth/AuthContext';
import validateLogin from '../../utils/validations/loginSchemaValidator';

import {
  Form,
  Input,
  Button,
  Label,
} from './styles';

function FormLoginComponent() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidFields, setIsValidFields] = useState(false);

  const auth = useContext(AuthContext);

  const signIn = async (data) => {
    const isLogged = auth.signIn(data);
    if (isLogged) console.log(auth.user);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const loginButton = (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
    };

    const isNotValid = validateLogin(data);
    if (isNotValid) { /* lançar popUp na tela */ } else {
      signIn(data);
    }
  };

  const registerButton = (event) => {
    event.preventDefault();
    navigate('/register');
  };

  useEffect(() => {
    if (email.length === 0 || password.length === 0) setIsValidFields(false);
    else setIsValidFields(true);
  }, [email, password, isValidFields]);

  return (
    <Form>
      <div className="input-area">
        <div className="email-input-area">
          <Label htmlFor="email">
            E-mail
            <Input
              type="text"
              id="email"
              onChange={handleEmail}
              value={email}
            />
          </Label>
        </div>
        <div className="password-input-area">
          <Label htmlFor="password">
            Password
            <Input
              type="text"
              id="password"
              onChange={handlePassword}
              value={password}
            />
          </Label>
        </div>

        <Button
          isEnable={isValidFields}
          type="button"
          className=""
          onClick={loginButton}
          disabled={!isValidFields}
        >
          Entrar
        </Button>
      </div>

      <button
        type="button"
        className="register-button"
        onClick={registerButton}
      >
        Registrar
      </button>
    </Form>
  );
}

export default FormLoginComponent;
