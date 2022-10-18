import React from 'react';
import RegisterForm from '../../components/registerForm';
import { Container, Main } from './styles';

import logoImage from '../../images/ativi-dade.png';

function Register() {
  return (
    <Main className="main-Register-container">
      <Container>
        <div className="image-container">
          <img src={logoImage} alt="logo" />
        </div>
        <RegisterForm />
      </Container>
    </Main>
  );
}

export default Register;
