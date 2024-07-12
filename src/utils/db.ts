import dbConnect from '@/lib/db-connect';
import User from '@/model/user.model';

export async function getUserFromDb(email: string) {
  await dbConnect();
  const user = await User.findOne({ email });
  return user;
}

export async function registerUser(email: string, password: string) {
  await dbConnect();
  const user = await User.create({ email, password });
  return user;
}
