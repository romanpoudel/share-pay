import { object, string, z } from 'zod';

export const loginSchema = object({
  email: string({ required_error: 'Email is required' })
    .min(1, 'Email is required')
    .email('Invalid email'),
  password: string({ required_error: 'Password is required' })
    .min(6, 'Password must be more than 6 characters')
    .max(16, 'Password must be less than 16 characters'),
});

export type Login = z.infer<typeof loginSchema>;

export const registerSchema = loginSchema
  .extend({
    username: string({ required_error: 'Username is required' })
      .min(6, 'Username is required')
      .max(16, 'Username must be less than 16 characters'),
    confirmPassword: string().min(1, 'Confirm password is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type Register = z.infer<typeof registerSchema>;
