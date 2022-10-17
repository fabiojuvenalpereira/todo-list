import { ObjectId } from 'mongodb';
import STATUS from '../fixtures/http-status-code';
import GenetatedError from './generatedError';

export default function ObjectIdValidate(id: string): ObjectId {
  if (!ObjectId.isValid(id)) {
    throw new GenetatedError(STATUS.BADREQUEST, 'Invalid ObjectId');
  }

  return new ObjectId(id);
}
