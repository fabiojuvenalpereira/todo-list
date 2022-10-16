import { NextFunction, Response, Request } from 'express';

import * as userService from '../../services/userServices/users.services';

export async function createUser(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.createUser();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function getAllUsers(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.getAllUsers();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function getUserById(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.getUserById();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function userLogin(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.userLogin();

    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}

export async function deleteUser(request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.deleteUser();
    return response.status(result.status).json(result.content);
  } catch (error: any) {
    return next(error);
  }
}
