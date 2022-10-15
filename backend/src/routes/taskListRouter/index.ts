import { Router } from 'express';
import * as taskController from '../../controllers/tasksController/tasks.controller';

const taskListRouter = Router();

taskListRouter.post('/:id', taskController.getTaskById);

taskListRouter.get('/', taskController.getAllTasks);
taskListRouter.get('/:id', taskController.getTaskById);

taskListRouter.put('/id', taskController.updateTaskById);

taskListRouter.delete('/:id', taskController.deleteTaskById);
taskListRouter.delete('/', taskController.deleteAllTasks);

export default taskListRouter;
