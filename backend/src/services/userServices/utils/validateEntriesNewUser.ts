import { User } from '../../../interfaces/user.interface';

import STATUS from '../../../fixtures/http-status-code';
import GenetatedError from '../../../utils/generatedError';
import CREATE_USER_SCHEMA from '../../../schemas/createUser.schema';

export default function validateCreateUserEntries(data: User) {
  const validation = CREATE_USER_SCHEMA.validate({ ...data });

  if (validation.error) {
    throw new GenetatedError(STATUS.BADREQUEST, validation.error.message);
  }
}
