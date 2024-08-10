import { RoomHeader, RoomTable } from '@/components/features/room';
import React from 'react';

const Page = ({ params }: { params: { id: string } }) => {
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
