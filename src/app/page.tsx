import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Component() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="flex h-14 items-center px-4 lg:px-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="size-6" />
          <span className="sr-only">Sharing Money with Friends</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" asChild>
            <Link href={'/auth/login'}>Sign In</Link>
          </Button>
          <Button asChild>
            <Link href={'/auth/register'}>Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Manage Your Shared Money with Friends
          </h1>
          <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
            This website helps you keep track of who owes you money from your
            shared payments with friends. Never lose track of who owes you
            again!
          </p>
          <Link
            href="/auth/login"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
