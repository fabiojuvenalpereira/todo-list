import axios from 'axios';

const URL = process.env.REACT_APP_URL_USERS || 'http://localHost:3001/user';

export async function getUserById(userId, token) {
  try {
    const response = await axios.get(`${URL}${userId}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export async function login(data) {
  try {
    const response = await axios.post(`${URL}/login`, data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function register(data) {
  try {
    const response = await axios.post(`${URL}`, data);
    return response;
  } catch (error) {
    return error;
  }
}

export async function deleteUser(data, token) {
  try {
    const response = await axios.delete(`${URL}`, data, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
}
