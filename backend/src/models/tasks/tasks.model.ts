import { ObjectId, ReturnDocument } from 'mongodb';
import { Task } from '../../interfaces/task.interface';

import connection from '../../database/conection';

const COLLECTION = 'tasks';

export async function createTask(data: Task) {
  const conn = await connection(COLLECTION);

  const createdTask = await conn.insertOne(data);
  return createdTask;
}

export async function getAllTasks(userId: string) {
  const conn = await connection(COLLECTION);

  const foundTasks = await conn.find({ userId }).toArray();
  return foundTasks;
}

export async function getTaskById(taskId: ObjectId) {
  const conn = await connection(COLLECTION);

  const foundTask = await conn.findOne({ _id: taskId });
  return foundTask;
}

export async function updateTask(taskId: ObjectId, data:Task) {
  const conn = await connection(COLLECTION);

  const { taskContent, date, status } = data;
  const updatedTask = await conn.findOneAndUpdate(
    { _id: taskId },
    { $set: { taskContent, date, status } },
    { returnDocument: 'after' },
  );

  return updatedTask.value;
}

export async function deleteTask(taskId: ObjectId) {
  const conn = await connection(COLLECTION);

  const deletedTask = await conn.deleteOne({ _id: taskId });
  return deletedTask;
}

export async function deleteAllTasksByUser(userId: string) {
  const conn = await connection(COLLECTION);

  const deletedTask = await conn.deleteMany({ userId });
  return deletedTask;
}
