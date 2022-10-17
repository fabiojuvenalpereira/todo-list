import STATUS from '../../../fixtures/http-status-code';
import { Task } from '../../../interfaces/task.interface';
import TASK_SCHEMA from '../../../schemas/createTask.schema';
import GenetatedError from '../../../utils/generatedError';

export default function validateEntriesTask(data: Task) {
  const validation = TASK_SCHEMA.validate({ ...data });

  if (validation.error) {
    throw new GenetatedError(STATUS.BADREQUEST, validation.error.message);
  }
}
