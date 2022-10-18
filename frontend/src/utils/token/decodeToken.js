import jwt from 'jsonwebtoken';

export const decodeToken = (token) => {
  const decodedToken = jwt.decode(token);

  const {
    _id,
    name,
    email,
    ...dataToken
  } = decodedToken;

  return dataToken;
};

export const decodeTokenFullInfo = (token) => jwt.decode(token);
