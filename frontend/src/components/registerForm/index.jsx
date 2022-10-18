import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { register } from '../../api/user';
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
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');

  // const sendRegisterRequest = async () => {
  // };

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleBirthdate = ({ target }) => {
    setBirthdate(target.value);
  };

  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };

  const registerButton = () => {
    setTimeout(() => {
      console.log(name, email, password, birthdate, address);
    }, 1000);
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
              onChange={handleName}
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
              onChange={handleEmail}
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
              onChange={handlePassword}
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
              onChange={handleBirthdate}
              value={birthdate}
            />
          </Label>
        </div>

        <div className="address-input-area input-area">
          <Label htmlFor="address">
            Endereço
            <Input
              type="text"
              id="address"
              onChange={handleAddress}
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
