import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const changeText = ({ target }) => {
    if (target.id === 'email') setEmail(target.value);
    else if (target.id === 'password') setPassword(target.value);
  };

  const loginButton = (event) => {
    event.preventDefault();
  };

  const registerButton = (event) => {
    event.preventDefault();
    navigate('/register');
    console.log('registr');
  };

  return (
    <Form>
      <div className="input-area">
        <div className="email-input-area">
          <Label htmlFor="email">
            E-mail
            <Input
              type="text"
              id="email"
              onChange={changeText}
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
              onChange={changeText}
              value={password}
            />
          </Label>
        </div>
        <Button
          type="button"
          className=""
          onClick={loginButton}
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
