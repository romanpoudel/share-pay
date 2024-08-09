import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import Profile from '@/components/profile';
import Dashboard from '@/components/dashboard';

export default async function Component() {
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
          <Profile />
          <ThemeToggle isDropDown={true} />
        </div>
      </header>
      <Dashboard />
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
