import React from 'react';

import Main from './styles';

function PopUp({ props, type }) {
  return (
    <Main onCreate={type}>
      {props}
    </Main>
  );
}

export default PopUp;
