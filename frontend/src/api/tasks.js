import axios from 'axios';

const URL = process.env.REACT_APP_URL_TASKS || 'http://localHost:3001/tasks';

export async function addNewTask(token, data) {
  const response = await axios.post(`${URL}`, data, {
    headers: {
      authorization: token,
    },
  });

  return response;
}

export async function getTasks(userId, token) {
  const response = await axios.get(`${URL}/user/${userId}`, {
    headers: {
      authorization: token,
    },
  });

  return response;
}

export async function getTaskById(taskId, token) {
  const response = await axios.get(`${URL}/${taskId}`, {
    headers: {
      authorization: token,
    },
  });

  return response;
}

export async function updateTask(taskId, token, data) {
  const response = await axios.put(`${URL}/${taskId}`, data, {
    headers: {
      authorization: token,
    },
  });

  return response;
}

export async function deleteTask(taskId, token) {
  const response = await axios.delete(`${URL}/${taskId}`, {
    headers: {
      authorization: token,
    },
  });

  return response;
}

export async function deleteAllTasks(userId, token, data) {
  const response = await axios.delete(`${URL}/user/${userId}`, data, {
    headers: {
      authorization: token,
    },
  });

  return response;
}
