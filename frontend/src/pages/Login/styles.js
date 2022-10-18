import styled from 'styled-components';

export const Main = styled.div`
  background: linear-gradient(115deg, #B82FD6 0%, #46CCE2 100%);
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled.div`
  background-color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 500px;
  margin: auto;
  width: 700px;

  & img {
    align-self: center;
    padding-top: 5em;
    padding-bottom: 2em;
    width: 45%;
  }
`;
