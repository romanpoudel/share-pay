import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RegisterForm from '@/components/register-form';
import GoogleIcon from '@/components/google-icon';

export default function Register() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Create an account
          </h1>
          <p>
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="font-medium text-primary hover:underline"
              prefetch={false}
            >
              Sign in
            </Link>
          </p>
        </div>
        <RegisterForm />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button variant="outline" className="w-full">
          <GoogleIcon className="mr-2 h-4 w-4" />
          Sign up with Google
        </Button>
      </div>
    </div>
  );
}
