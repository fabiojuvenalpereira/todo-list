import React from 'react';
import FormLoginComponent from '../../components/loginForm';
import { Main, Container } from './styles';

import logoImage from '../../images/ativi-dade.png';

function Login() {
  return (
    <Main>
      <Container>
        <img src={logoImage} alt="logo" />
        <FormLoginComponent />
      </Container>
    </Main>
  );
}

export default Login;
