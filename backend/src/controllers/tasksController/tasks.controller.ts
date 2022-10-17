import { NextFunction, Response, Request } from 'express';
import * as tasksServices from '../../services/tasksServices/tasks.service';

export async function createTask(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const result = await tasksServices.createTask(data);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function getAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    const { userId } = request.params;
    const result = await tasksServices.getAllTasks(userId);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function getTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const result = await tasksServices.getTaskById(id);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function updateTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const data = request.body;

    const result = await tasksServices.updateTaskById(id, data);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function deleteTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const result = await tasksServices.deleteTaskById(id);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function deleteAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    const { userId } = request.params;
    const result = await tasksServices.deleteAllTasksByUser(userId);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}
