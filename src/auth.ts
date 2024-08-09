import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { getUserFromDb } from './utils/db';
import { ZodError } from 'zod';
import { compare } from 'bcryptjs';
import { loginSchema } from './schemas/user.schema';
import type { Provider } from 'next-auth/providers';

const providers: Provider[] = [
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: { label: 'Email', type: 'email', placeholder: 'Email' },
      password: {
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
      },
    },
    authorize: async (credentials) => {
      if (!credentials) return null;
      try {
        const { email, password } = await loginSchema.parseAsync(credentials);
        if (!email || !password) {
          throw new CredentialsSignin('Please provide both email & password');
        }
        const user = await getUserFromDb(email);
        if (!user || !user.password) {
          throw new CredentialsSignin('User not found');
        }

        const isMatched = await compare(password, user.password);

        if (!isMatched) {
          throw new CredentialsSignin('Password did not match');
        }

        return user as any;
      } catch (error) {
        if (error instanceof ZodError) {
          throw new Error(error.message);
        }
        if (error instanceof CredentialsSignin) {
          throw new Error(error.message);
        }
        return null;
      }
    },
  }),
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers,
  pages: {
    signIn: '/auth/login',
  },
});
