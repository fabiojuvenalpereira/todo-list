import { Router } from 'express';
import * as taskController from '../../controllers/tasksController/tasks.controller';
import validateToken from '../../middlewares/validateToken.midleware';

const taskListRouter = Router();

taskListRouter.post('/', validateToken, taskController.createTask);

taskListRouter.get('/user/:userId', validateToken, taskController.getAllTasks);
taskListRouter.get('/:id', validateToken, taskController.getTaskById);

taskListRouter.put('/:id', validateToken, taskController.updateTaskById);

taskListRouter.delete('/:id', validateToken, taskController.deleteTaskById);
taskListRouter.delete('/user/:userId', validateToken, taskController.deleteAllTasks);

export default taskListRouter;
