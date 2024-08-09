'use server';

import { signIn } from '@/auth';
import { Login, loginSchema } from '@/schemas/user.schema';
import { AuthError } from 'next-auth';
import { ZodError } from 'zod';

export default async function loginAction(data: Login) {
  try {
    loginSchema.parse(data);
    const response = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (response) {
      return {
        success: true,
        message: 'Login successful',
      };
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        message: 'Validation error',
      };
    }

    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return {
            success: false,
            message: error.message,
          };
        case 'CallbackRouteError':
          return {
            success: false,
            message: error.cause?.err?.message,
          };
        default:
          return {
            success: false,
            message: 'Something went wrong',
          };
      }
    }
    throw error;
  }
}
