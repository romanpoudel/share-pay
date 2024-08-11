import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleArrowDown, CircleArrowUp, Users } from 'lucide-react';
import AddPayment from './add-payment';

const RoomHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-end gap-4">
        <h2 className="text-3xl font-semibold">Header</h2>
        <div className="flex gap-4 pb-0.5 font-semibold">
          <div className="flex items-center gap-1 text-green-500">
            <CircleArrowUp size={16} />
            <span className="text-sm">$5,678.90</span>
          </div>
          <div className="flex items-center gap-1 text-red-500">
            <CircleArrowDown size={16} />
            <span className="text-sm">$5,678.90</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <AddPayment />
        <Button variant={'outline'}>
          <Users className="mr-2 size-5" />
          Add mates
        </Button>
      </div>
    </div>
  );
};

export default RoomHeader;
