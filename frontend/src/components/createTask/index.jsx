import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { addNewTask } from '../../api/tasks';
import AuthContext from '../../contexts/auth/AuthContext';
import generateDate from '../../utils/generateData/generateDateAndHour';
import getDataFromLocalStorage from '../../utils/LocalStorageSetAndGet/getLocalStorageData';

import PopUp from '../popUp';

import logo from '../../images/logo.png';
import Container from './styles';

function CreateTask({ setReloadList }) {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  const [content, setContent] = useState('');
  const [error, setError] = useState(false);

  const handleChange = ({ target }) => {
    setContent(target.value);
  };

  const loggout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const sendTask = async () => {
    const token = getDataFromLocalStorage('user');
    const userId = auth.userData._id;
    const date = generateDate();

    const data = {
      userId,
      taskContent: content,
      date,
    };

    try {
      await addNewTask(token, data);
      setContent('');
      setReloadList(true);
    } catch (statusError) {
      setError('Não foi possível Adicionar Tarefa.');
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <Container>
      { error ? <PopUp props={error} type="error" /> : ''}
      <img className="logo-area" src={logo} alt="logo" />
      <div className="input-task">
        <label htmlFor="create-task-input">
          <input
            type="text"
            id="create-task-input"
            placeholder="Adicionar nova tarefa"
            value={content}
            onChange={handleChange}
          />
        </label>
        <button
          type="button"
          onClick={sendTask}
          className="add-button"
        >
          Adicionar
        </button>
      </div>
      <button
        type="button"
        onClick={loggout}
        className="loggout"
      >
        Sair
      </button>
    </Container>
  );
}

export default CreateTask;
