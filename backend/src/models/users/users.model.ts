import { ObjectId } from 'mongodb';
import connection from '../../database/conection';

export async function createUser(test: string) {
  const conn = await connection('users');
  const addedUser = conn.insertOne({ test });
  return addedUser;
}

export async function getAllUsers() {
  const conn = await connection('users');
  const foudedUsers = conn.find({}).toArray();
  return foudedUsers;
}

export async function getUserById(userId: ObjectId) {
  const conn = await connection('users');
  const foudedUsers = conn.findOne({ id: userId });
  return foudedUsers;
}

export async function getUserByEmail(userEmail: string) {
  const conn = await connection('users');
  const foudedUsers = conn.findOne({ email: userEmail });
  return foudedUsers;
}

export async function deleteUser(userId: ObjectId) {
  const conn = await connection('users');
  const foudedUsers = conn.deleteOne({ id: userId });
  return foudedUsers;
}
