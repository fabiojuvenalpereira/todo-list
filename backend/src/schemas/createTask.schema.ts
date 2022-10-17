import Joi from 'joi';

const TASK_SCHEMA = Joi.object({
  userId: Joi.string().required(),
  taskContent: Joi.string().required(),
  date: Joi.string().required(),
  status: Joi.string(),
});

export default TASK_SCHEMA;
