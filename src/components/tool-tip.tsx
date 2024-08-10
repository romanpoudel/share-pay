import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import dynamic from 'next/dynamic';

type props = {
  children: React.ReactNode;
  title: string;
};

const ToolTip = ({ children, title }: props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default dynamic(() => Promise.resolve(ToolTip), { ssr: false });
