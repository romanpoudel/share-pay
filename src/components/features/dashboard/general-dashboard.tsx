import React from 'react';
import Link from 'next/link';

const GeneralDashboard = () => {
  return (
    <main className="flex flex-1 items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Manage Your Shared Money with Friends
        </h1>
        <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
          This website helps you keep track of who owes you money from your
          shared payments with friends. Never lose track of who owes you again!
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
  );
};

export default GeneralDashboard;
