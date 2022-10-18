import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Button,
  Input,
  Label,
  Main,
} from './styles';

function RegisterForm() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [birhDate, setBirthDate] = useState(new Date());
  const [address, setAddress] = useState();

  const handleChange = (event) => {
    console.log(event.target);
    console.log(birhDate);
    setName();
    setBirthDate();
    setEmail();
    setPassword();
    setAddress();
  };

  const registerButton = () => {

  };

  return (
    <Main>
      <h2>Cadastro</h2>
      <Form>
        <div className="input-name input-area">
          <Label htmlFor="name">
            name
            <Input
              type="text"
              id="name"
              onChange={handleChange}
              value={name}
            />
          </Label>
        </div>

        <div className="email-input-area input-area">
          <Label htmlFor="email">
            E-mail
            <Input
              type="text"
              id="email"
              onChange={handleChange}
              value={email}
            />
          </Label>
        </div>

        <div className="password-input-area input-area">
          <Label htmlFor="password">
            Senha
            <Input
              type="text"
              id="password"
              onChange={handleChange}
              value={password}
            />
          </Label>
        </div>

        <div className="birthdate-input-area input-area">
          <Label htmlFor="birthdate">
            Data de Nascimento
            <Input
              type="text"
              id="birthdate"
              onChange={handleChange}
              value={birhDate}
            />
          </Label>
        </div>

        <div className="address-input-area input-area">
          <Label htmlFor="address">
            Endereço
            <Input
              type="text"
              id="address"
              onChange={handleChange}
              value={address}
            />
          </Label>
        </div>

        <Button
          type="button"
          className="register-button"
          onClick={registerButton}
        >
          Cadastrar
        </Button>

        <button
          type="button"
          className="already-regitered"
          onClick={() => navigate('/login')}
        >
          Já sou cadastrado
        </button>
      </Form>
    </Main>
  );
}

export default RegisterForm;
