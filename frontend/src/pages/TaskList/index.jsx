import React from 'react';
import ListComponent from '../../components/list';
import Main from './styles';

function TaskList() {
  return (
    <Main className="main-tasklist-container">
      <ListComponent />
    </Main>
  );
}

export default TaskList;
