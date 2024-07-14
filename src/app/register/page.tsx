import { signIn } from '@/auth';
import dbConnect from '@/lib/db-connect';
import { signInSchema } from '@/lib/zod';
import User from '@/model/user.model';
import { registerUser } from '@/utils/db';
import { saltAndHashPassword } from '@/utils/password';

function Register() {
  return (
    <form
      action={async (formData) => {
        'use server';
        const user = formData.get('email');
        const pass = formData.get('password');
        if (!user || !pass) {
          return {
            errors: {
              email: 'Email is required',
              password: 'Password is required',
            },
          };
        }
        const validatedFields = signInSchema.safeParse({
          email: user,
          password: pass,
        });
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          };
        }
        const hash = await saltAndHashPassword(pass);
        await dbConnect();
        await User.create({ email: user, password: hash });
      }}
    >
      <label>
        Email
        <input name='email' type='email' />
      </label>
      <label>
        Password
        <input name='password' type='password' />
      </label>
      <button>Register</button>
    </form>
  );
}

export default Register;