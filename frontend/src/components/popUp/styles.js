import styled from 'styled-components';

const Main = styled.div`
  background-color: ${(props) => (props.onCreate === 'error' ? '#DF7373' : '#88CCF1')};
  border-radius: 8px 0 0 8px;
  height: 150px;
  position: fixed;
  margin: auto;
  right: 0;
  top: 5%;
  width: 300px;
  z-index: 1;
`;

export default Main;
