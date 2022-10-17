import { NextFunction, Response, Request } from 'express';

import * as userService from '../../services/userServices/users.services';

export async function createUser(request: Request, response: Response, next: NextFunction) {
  try {
    const data = request.body;
    const result = await userService.createUser(data);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function getAllUsers(_request: Request, response: Response, next: NextFunction) {
  try {
    const result = await userService.getAllUsers();

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function getUserById(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const result = await userService.getUserById(id);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function userLogin(request: Request, response: Response, next: NextFunction) {
  try {
    const { email, password } = request.body;
    const result = await userService.userLogin(email, password);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}

export async function deleteUser(request: Request, response: Response, next: NextFunction) {
  try {
    const { id } = request.params;
    const result = await userService.deleteUserId(id);

    return response.status(result.status).json(result.content);
  } catch (error) {
    return next(error);
  }
}
