import STATUS from '../../../fixtures/http-status-code';
import USER_LOGIN_SCHEMA from '../../../schemas/userLogin.schema';
import GenetatedError from '../../../utils/generatedError';

export default function validateLoginEntries(email: string, password: string) {
  const validation = USER_LOGIN_SCHEMA.validate({ email, password });

  if (validation.error) {
    throw new GenetatedError(STATUS.BADREQUEST, validation.error.message);
  }
}
