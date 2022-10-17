import * as bcrypt from 'bcryptjs';

export default function encryptPassword(password: string): string {
  const salt = bcrypt.genSaltSync(10);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
}
