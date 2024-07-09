import bcrypt from 'bcryptjs';

export function saltAndHashPassword(password: string | unknown) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password as string, salt);
  return hashedPassword;
}
