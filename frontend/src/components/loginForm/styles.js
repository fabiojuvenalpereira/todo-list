import styled from 'styled-components';

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 60%;
  width: 80%;

  & .input-area {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
    width: 100%;
  }

  & .email-input-area {
    /* background-color: red; */
  }

  & .password-input-area {
    /* background-color: green; */
  }

  & .register-button {
    align-self: center;
    background: none;
    border: none;
    margin-top: 1em;
    width: 50px;
  }
`;

export const Label = styled.label`
  
`;

export const Button = styled.button`
  background-color: blueviolet;
  border: none;
  border-radius: 8px;
  height: 50px;
  margin-top: 0.5em;
  width: 500px;
`;

export const Input = styled.input`
  align-items: center;
  background-color: #F7F7F7;
  border: 1px solid #F1F1F1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: center;
  width: 500px;
  text-indent: 2em;
`;
