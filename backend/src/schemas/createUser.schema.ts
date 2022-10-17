import Joi from 'joi';

const CREATE_USER_SCHEMA = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  birthdate: Joi.string().regex(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/).message('wrong date format, please the accept format is: dd/MM/YYYY'),
  address: Joi.string().required(),
});

export default CREATE_USER_SCHEMA;
