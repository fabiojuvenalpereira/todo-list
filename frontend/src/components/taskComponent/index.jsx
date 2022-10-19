import React, { useContext, useState } from 'react';
import { deleteTask, updateTask } from '../../api/tasks';
import AuthContext from '../../contexts/auth/AuthContext';
import generateDate from '../../utils/generateData/generateDateAndHour';
import getDataFromLocalStorage from '../../utils/LocalStorageSetAndGet/getLocalStorageData';
import Card from './styles';

function TaskComponent({ props, setReloadList }) {
  const auth = useContext(AuthContext);
  const [contentValue, setContentValue] = useState(props.taskContent);
  const [taskStatus, setTaskStatus] = useState(props.status);

  const handleChange = ({ target }) => {
    setContentValue(target.value);
  };

  const updateTaskById = async () => {
    const token = getDataFromLocalStorage('user');
    const date = generateDate();

    const userId = auth.userData._id;
    const dataWithUserId = {
      userId,
      taskContent: contentValue,
      status: taskStatus,
      date,
    };

    await updateTask(props._id, token, dataWithUserId);
    setReloadList(true);
  };

  const deleteTaskById = () => {
    const token = getDataFromLocalStorage('user');
    deleteTask(props._id, token);
    setReloadList(true);
  };

  const changeTaskStatus = ({ target }) => {
    setTaskStatus(target.value);
  };

  return (
    <Card>
      <div className="text-input">
        <input
          type="text"
          value={contentValue}
          onChange={handleChange}
        />
      </div>
      <select
        type="select"
        className="slect-button"
        value={taskStatus}
        onChange={changeTaskStatus}
      >
        <option value="pending">Pendente</option>
        <option value="in progress">Em progresso</option>
        <option value="done">Concluida</option>
      </select>
      <button
        className="update-button"
        type="button"
        onClick={updateTaskById}
      >
        Atualizar
      </button>
      <button
        className="delete-button"
        type="button"
        onClick={deleteTaskById}
      >
        Deletar
      </button>
    </Card>
  );
}

export default TaskComponent;
