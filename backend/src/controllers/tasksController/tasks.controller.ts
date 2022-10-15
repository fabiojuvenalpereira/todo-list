import { NextFunction, Response, Request } from 'express';

export async function getAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function getTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function updateTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteTaskById(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteAllTasks(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}
