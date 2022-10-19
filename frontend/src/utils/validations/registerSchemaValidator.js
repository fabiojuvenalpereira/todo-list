import Joi from 'joi';

const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regBirth = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;

const EMAIL_SCHEMA = Joi.object({
  name: Joi.string().min(5).required(),
  email: Joi.string().regex(new RegExp(regEmail)).required(),
  password: Joi.string().min(8).required(),
  birthdate: Joi.string().regex(new RegExp(regBirth)),
  address: Joi.string(),
});

const registerSchemaValidator = (data) => {
  const validate = EMAIL_SCHEMA.validate({ ...data });
  if (validate.error) throw new Error(validate.error.message);
  return null;
};

export default registerSchemaValidator;
