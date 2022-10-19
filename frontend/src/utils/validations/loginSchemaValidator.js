import Joi from 'joi';

const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAIL_SCHEMA = Joi.object({
  email: Joi.string().regex(new RegExp(reg)).message('O campo e-mail não pode ser vazio e precisa ser um e-mail válido.').required(),
  password: Joi.string().min(8).message('O campo de senha precisa de no mínimo 8 caracteres!').required(),
});

const validateLogin = (data) => {
  const validate = EMAIL_SCHEMA.validate({ ...data });
  if (validate.error) return validate.error.message;
  return null;
};

export default validateLogin;
