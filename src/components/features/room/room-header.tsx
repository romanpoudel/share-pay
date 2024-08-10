import React from 'react';
import { Button } from '@/components/ui/button';
import { CircleArrowDown, CircleArrowUp } from 'lucide-react';

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
      <Button>Add mates</Button>
    </div>
  );
};

export default RoomHeader;
