import * as bcrypt from 'bcryptjs';

export default async function verifyPassword(passwordFromLogin: string, passwordFromDb: string) {
  const validation = await bcrypt.compare(passwordFromLogin, passwordFromDb);

  return validation;
}
