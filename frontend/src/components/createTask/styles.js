import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 5vh;
  margin-top: 1em;

  & .logo-area {
    margin-left: 1em;
  }

  & .input-task {
    display: flex;
    display: flex;
  }

  & .input-task input {
    border: none;
    border-radius: 8px 0 0 8px;
    height: 100%;
    width: 300px;
    text-indent: 1em;
  }

  & .add-button {
    border: none;
    border-radius: 0 8px 8px 0;
    font-weight: 500;
    height: 100%;
    width: 100px;
  }

  & .loggout {
    align-self: center;
    border: none;
    border-radius: 8px;
    margin-right: 5em;
    padding: 1em;
  }
`;

export default Container;
