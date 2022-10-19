import React, { useContext, useEffect, useState } from 'react';

import { getTasks } from '../../api/tasks';
import getDataFromLocalStorage from '../../utils/LocalStorageSetAndGet/getLocalStorageData';

import AuthContext from '../../contexts/auth/AuthContext';
import Loading from '../loading';

import TaskComponent from '../taskComponent';
import PopUp from '../popUp';
import CreateTask from '../createTask/index';

import { Container, List } from './styles';

function ListComponent() {
  const auth = useContext(AuthContext);
  const [userTasks, setUserTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reloadList, setReloadList] = useState(false);

  const emptyList = () => {
    if (!userTasks.length) {
      return (<div className="empty-list">Lista Vazia</div>);
    }
    return '';
  };

  useEffect(() => {
    if (!userTasks.length || reloadList === true) {
      const getUserTasks = async () => {
        try {
          const userId = auth.userData._id;
          const token = getDataFromLocalStorage('user');

          const tasks = await getTasks(userId, token);
          setUserTasks([...tasks.data]);
          setReloadList(false);
          setLoading(false);
        } catch (statusError) {
          setError(statusError.message);
          setTimeout(() => {
            setError(false);
          }, 2000);
          setLoading(false);
        }
      };
      getUserTasks();
    }
  }, [reloadList]);

  if (loading) return <Loading />;
  return (
    <Container>
      {error ? <PopUp props={error} type="error" /> : ''}
      <div>
        <CreateTask setReloadList={setReloadList} />
      </div>
      { emptyList() }
      <List>
        {
          userTasks.map((item) => (
            <li
              key={item._id}
            >
              <TaskComponent props={item} setReloadList={setReloadList} />
            </li>
          ))
        }
      </List>
    </Container>
  );
}

export default ListComponent;
