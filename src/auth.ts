import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
// Your own logic for dealing with plaintext password strings; be careful!
import { saltAndHashPassword } from '@/utils/password';
import { signInSchema } from './lib/zod';
import { getUserFromDb } from './utils/db';
import dbConnect from './lib/db-connect';
import { ZodError } from 'zod';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );
          const pwHash = saltAndHashPassword(password);

          const user = await getUserFromDb(email, pwHash);
          if (!user) {
            throw new Error('No user found');
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
