import * as usersModel from '../../models/users/users.model';
import { deleteAllTasksByUser } from '../../models/tasks/tasks.model';

import { User } from '../../interfaces/user.interface';

import encryptPassword from '../../utils/encrypt';
import GenetatedError from '../../utils/generatedError';
import ObjectIdValidate from '../../utils/objectIdValidate';
import validateLoginEntries from './utils/validateEntriesLogin';
import verifyPassword from './utils/verifyPassword';
import validateCreateUserEntries from './utils/validateEntriesNewUser';

import STATUS from '../../fixtures/http-status-code';
import generateToken from '../../auth/generateToken';

export async function createUser(data: User) {
  validateCreateUserEntries(data);

  const foundUser = await usersModel.getUserByEmail(data.email);
  if (foundUser) throw new GenetatedError(STATUS.BADREQUEST, 'User already exists');

  const { password, ...dataWithOutPassword } = data;
  const encryptedPassword = encryptPassword(password);
  const covertedData = { password: encryptedPassword, ...dataWithOutPassword };

  const createdUser = await usersModel.createUser(covertedData);
  if (!createdUser) throw new GenetatedError(STATUS.BADREQUEST, 'Cannot create user');

  return { status: STATUS.CREATED, content: { message: createdUser } };
}

export async function getAllUsers() {
  const foundUsers = await usersModel.getAllUsers();
  if (!foundUsers) throw new GenetatedError(STATUS.NOTFOUND, 'Users not found');

  return { status: STATUS.OK, content: foundUsers };
}

export async function getUserById(id: string) {
  const objectId = ObjectIdValidate(id);

  const foundUser = await usersModel.getUserById(objectId);
  if (!foundUser) throw new GenetatedError(STATUS.NOTFOUND, 'User not found');

  const { password, ...userWithOutPassword } = foundUser;

  return { status: STATUS.OK, content: userWithOutPassword };
}

export async function userLogin(email: string, passwordFromLogin: string) {
  validateLoginEntries(email, passwordFromLogin);

  const foundUser = await usersModel.getUserByEmail(email);
  if (!foundUser) throw new GenetatedError(STATUS.NOTFOUND, 'User not found');

  const { password, ...userWithoutPassword } = foundUser;

  const isValid = await verifyPassword(passwordFromLogin, password);
  if (!isValid) throw new GenetatedError(STATUS.UNAUTHORIZED, 'Wrong credentials');

  const token = generateToken(userWithoutPassword);
  return { status: STATUS.OK, content: token };
}

export async function deleteUserId(id: string) {
  const objectId = ObjectIdValidate(id);

  await deleteAllTasksByUser(id);
  const deletedUser = await usersModel.deleteUserById(objectId);
  if (!deletedUser) throw new GenetatedError(STATUS.BADREQUEST, 'Cannot delete user');

  return { status: STATUS.OK, content: deletedUser };
}
