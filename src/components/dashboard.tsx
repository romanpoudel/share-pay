import { auth } from '@/auth';
import Link from 'next/link';
import React from 'react';
import Room from './room';

async function Dashboard() {
  const session = await auth();
  if (!session) {
    return (
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
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 p-4 sm:p-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </div>
  );
}

export default Dashboard;
