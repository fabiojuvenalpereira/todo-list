import Joi from 'joi';

const USER_LOGIN_SCHEMA = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).message('Password must be between 6 and 14 characters.')
    .required(),
});

export default USER_LOGIN_SCHEMA;
