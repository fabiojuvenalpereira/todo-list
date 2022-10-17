import { ObjectId } from 'mongodb';
import connection from '../../database/conection';
import { User } from '../../interfaces/user.interface';

export async function createUser(data: User) {
  const conn = await connection('users');
  const { insertedId } = await conn.insertOne({ ...data });
  return insertedId;
}

export async function getAllUsers() {
  const conn = await connection('users');
  const foundUsers = await conn.find({}).toArray();
  return foundUsers;
}

export async function getUserById(userId: ObjectId) {
  const conn = await connection('users');

  const foundUser = await conn.findOne({ _id: userId });
  return foundUser;
}

export async function getUserByEmail(userEmail: string) {
  const conn = await connection('users');
  const foundUser = await conn.findOne({ email: userEmail });
  return foundUser;
}

export async function deleteUserById(userId: ObjectId) {
  const conn = await connection('users');
  const deletedUser = await conn.deleteOne({ _id: userId });
  return deletedUser;
}
