'use client';

import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { Login, loginSchema } from '@/schemas/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useRouter } from 'next/navigation';
import loginAction from '@/app/actions/login-action';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

export default function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<Login>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: Login) {
    const response = await loginAction(data);
    if (response?.success) {
      toast({
        description: response?.message,
      });
      router.push('/');
    }
    if (!response?.success) {
      toast({
        variant: 'destructive',
        description: response?.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="mt-1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting && (
            <Loader className="mr-4 animate-spin" size={20} />
          )}
          Sign in
        </Button>
      </form>
    </Form>
  );
}
