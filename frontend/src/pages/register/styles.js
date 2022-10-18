import styled from 'styled-components';

export const Main = styled.div`
  background: linear-gradient(225deg, #B82FD6 0%, #46CCE2 100%);
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Container = styled.div`
  background-color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.51);
  display: flex;
  height: 500px;
  margin: auto;
  width: 1000px;

  & .image-container {
    margin: auto;
    align-items: center;
    width: 50%;
  }

  & img {
    transform: scale(0.8);
  }
`;
