'use server';

import dbConnect from '@/lib/db-connect';
import User from '@/model/user.model';
import { registerSchema } from '@/schemas/user.schema';
import { saltAndHashPassword } from '@/utils/password';
import { redirect } from 'next/navigation';

export default async function registerAction(
  formState: any,
  formData: FormData
) {
  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  if (password !== confirmPassword) {
    return {
      message: 'Passwords do not match',
    };
  }
  const validatedFields = registerSchema.safeParse({
    username: username,
    email: email,
    password: password,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const hash = await saltAndHashPassword(password);
    await dbConnect();
    await User.create({ email: email, password: hash });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'An unknown error occurred',
      };
    }
  }
  redirect(`/auth/login`);
}
