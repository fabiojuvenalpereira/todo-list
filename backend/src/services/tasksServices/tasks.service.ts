import STATUS from '../../fixtures/http-status-code';
import { Task } from '../../interfaces/task.interface';
import * as tasksModel from '../../models/tasks/tasks.model';
import GenetatedError from '../../utils/generatedError';
import ObjectIdValidate from '../../utils/objectIdValidate';
import validateEntriesTask from './utils/validateEntriesTask';

export async function createTask(data: Task) {
  validateEntriesTask(data);

  const dataWithStatus = {
    status: 'pending',
    ...data,
  };

  const createdTask = await tasksModel.createTask(dataWithStatus);
  if (!createdTask) throw new GenetatedError(STATUS.BADREQUEST, 'Create task failed.');

  return { status: 200, content: createdTask };
}

export async function getAllTasks(userId: string) {
  ObjectIdValidate(userId);

  const foundTasks = await tasksModel.getAllTasks(userId);
  if (!foundTasks) throw new GenetatedError(STATUS.NOTFOUND, 'Tasks not found.');

  return { status: 200, content: foundTasks };
}

export async function getTaskById(taskId: string) {
  const objectId = ObjectIdValidate(taskId);

  const foundTask = await tasksModel.getTaskById(objectId);
  if (!foundTask) throw new GenetatedError(STATUS.NOTFOUND, 'Task not found.');

  return { status: 200, content: foundTask };
}

export async function updateTaskById(taskId: string, data: Task) {
  const objectId = ObjectIdValidate(taskId);
  validateEntriesTask(data);

  const foundTask = await tasksModel.getTaskById(objectId);
  if (!foundTask) throw new GenetatedError(STATUS.NOTFOUND, 'Task not found.');

  const updated = await tasksModel.updateTask(objectId, data);
  if (!updated) throw new GenetatedError(STATUS.BADREQUEST, 'Cannot update task');

  return { status: 200, content: updated };
}

export async function deleteTaskById(taskId: string) {
  const objectId = ObjectIdValidate(taskId);

  const deletedTask = await tasksModel.deleteTask(objectId);
  if (!deletedTask) throw new GenetatedError(STATUS.BADREQUEST, 'Cannot update task');

  return { status: 200, content: { message: 'Task successfully deleted' } };
}

export async function deleteAllTasksByUser(userId: string) {
  ObjectIdValidate(userId);

  const deletedTasks = await tasksModel.deleteAllTasksByUser(userId);
  if (!deletedTasks) throw new GenetatedError(STATUS.NOTFOUND, 'Cannot delete tasks.');

  return { status: 200, content: { message: `deleted all tasks for user ${userId}` } };
}
