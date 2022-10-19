import styled from 'styled-components';

const Card = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-bottom: 1em;
  margin-top: 1em;
  width: 800px;

  & .text-input {
    width: 50%;
  }

  & .text-input input {
    background: none;
    border: none;
    height: 100px;
    text-indent: 1em;
    width: 100%;
  }

  & select {
    background: none;
    border: none;
    height: 20%;
  }

  & .update-button {
    border: none;
    color: black;
    height: 100%;
    font-weight: 500;
    font-size: 1em;
    width: 25%;
  }

  & .delete-button {
    background-color: #EE4266;
    border: none;
    border-radius: 0 8px 8px 0;
    color: white;
    height: 100%;
    font-weight: 500;
    font-size: 1em;
    width: 25%;
  }
`;

export default Card;
