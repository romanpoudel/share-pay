import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { saltAndHashPassword } from '@/utils/password';
import { signInSchema } from './lib/zod';
import { getUserFromDb } from './utils/db';
import { ZodError } from 'zod';
import { compare } from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
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
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);
          if (!email || !password) {
            throw new CredentialsSignin('Please provide both email & password');
          }
          const pwHash = saltAndHashPassword(password);
          const user = await getUserFromDb(email);
          if(!user){
            throw new CredentialsSignin('User not found');
          }

          const isMatched = await compare(password, user.password);

          if (!isMatched) {
            throw new CredentialsSignin('Password did not matched');
          }

          return user as any;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
