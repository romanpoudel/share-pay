import { auth } from '@/auth';
import { RoomHeader, RoomTable } from '@/components/features/room';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  if (!session) {
    redirect('/auth/login');
  }
  return (
    <div className="mt-4 w-full px-4 lg:px-6">
      {/* header */}
      <RoomHeader />
      {/* body */}
      <div className="mt-8 w-full">
        <RoomTable />
      </div>
    </div>
  );
};

export default Page;
