import Link from 'next/link';
import React from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import Profile from './profile';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center bg-background px-4 shadow-md lg:px-6">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <MountainIcon className="size-6" />
        <span className="sr-only">Sharing Money with Friends</span>
      </Link>
      <div className="ml-auto flex items-center gap-2">
        <Profile />
        <ThemeToggle isDropDown={true} />
      </div>
    </header>
  );
};

export default Header;

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
