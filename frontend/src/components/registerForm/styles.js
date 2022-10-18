import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  & h2 {
    padding-top: 1em;
    padding-bottom: 0.2em;
  }
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;

  & .already-regitered {
    align-self: center;
    background: none;
    border: none;
    color: #00000095;
    margin-top: 1em;
    font-weight: 500;
    width: 150px;
  }

  & .input-area {
    display: flex;
    flex-direction: column;
    height: 80%;
    justify-content: space-around;
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-top: 0.5em;
  color: #00000095;
`;

export const Button = styled.button`
  background-color: blueviolet;
  border: none;
  border-radius: 8px;
  color: white;
  margin-top: 1em;
  font-weight: 500;
  height: 60%;
  width: 100%;
`;

export const Input = styled.input`
  align-items: center;
  background-color: #F7F7F7;
  border: 1px solid #F1F1F1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 35px;
  justify-content: center;
  width: 100%;
  text-indent: 1em;
`;
