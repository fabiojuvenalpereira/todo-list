import { NextFunction, Response, Request } from 'express';
import * as tasksServices from '../../services/tasksServices/tasks.service';

export async function getAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await tasksServices.getAllTasks();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function getTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await tasksServices.getTaskById();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function updateTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await tasksServices.updateTaskById();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await tasksServices.deleteTaskById();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await tasksServices.deleteAllTasks();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}
