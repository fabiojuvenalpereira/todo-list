import { NextFunction, Response, Request } from 'express';

export async function getAllUsers(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(users.status).json(users.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function createUser(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(users.status).json(users.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function userLogin(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(users.status).json(users.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteUser(request: Request, response: Response, next: NextFunction) {
  try {
    return response.status(users.status).json(users.content);
  } catch (error: any) {
    return next(error);
  }
}
