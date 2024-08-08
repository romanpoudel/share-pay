'use server';

import dbConnect from '@/lib/db-connect';
import User from '@/model/user.model';
import { Register, registerSchema } from '@/schemas/user.schema';
import { saltAndHashPassword } from '@/utils/password';
import { redirect } from 'next/navigation';

export default async function registerAction(data: Register) {
  const validatedFields = registerSchema.safeParse(data);
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  try {
    const hash = await saltAndHashPassword(data.password);
    await dbConnect();
    const existUser = await User.findOne({
      $or: [{ email: data.email }, { username: data.username }],
    });
    if (existUser) {
      return {
        success: false,
        message: 'Email or username already exists',
      };
    }
    await User.create({
      username: data.username,
      email: data.email,
      password: hash,
    });
    return {
      success: true,
      message: 'User registered successfully',
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    } else {
      return {
        success: false,
        message: 'An unknown error occurred',
      };
    }
  }
}
