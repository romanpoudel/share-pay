'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Pencil } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import useDetectClickOutside from '@/hooks/useDetectClickOutside';
import ToolTip from '../../tool-tip';
import Link from 'next/link';

function Room() {
  const [roomName, setRoomName] = React.useState('Birthdays');
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleRoomNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsEditing(true);
    setRoomName(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  useDetectClickOutside({ ref: inputRef, fn: () => setIsEditing(false) });

  const handleEditClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsEditing(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  return (
    <Link
      href={'/room/1'}
      className="cursor-pointer overflow-hidden rounded-lg bg-background shadow-lg dark:shadow-sm dark:outline"
    >
      <div className="flex items-center justify-between p-4 dark:text-white">
        <div className="flex items-center gap-0.5">
          {isEditing ? (
            <Input
              ref={inputRef}
              value={roomName}
              onChange={handleRoomNameChange}
              onKeyDown={handleKeyDown}
              className="text-black dark:text-white"
            />
          ) : (
            <div className="max-w-56">
              <h3 className="truncate text-lg font-semibold">{roomName}</h3>
            </div>
          )}
          <Button
            size="icon"
            onClick={handleEditClick}
            className="bg-transparent text-black hover:bg-transparent dark:text-white"
          >
            <ToolTip title="Edit name">
              <Pencil size={16} />
            </ToolTip>
          </Button>
        </div>
        <Badge variant="secondary">12</Badge>
      </div>
      <div className="grid gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-sm text-muted-foreground">
              Paid for 3 friends
            </div>
          </div>
          <div className="ml-auto font-medium">$150</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Jane Smith</div>
            <div className="text-sm text-muted-foreground">
              Paid for 2 friends
            </div>
          </div>
          <div className="ml-auto font-medium">$100</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="border">
            <AvatarImage src="/placeholder-user.jpg" alt="@username" />
            <AvatarFallback>MJ</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Michael Johnson</div>
            <div className="text-sm text-muted-foreground">
              Paid for 1 friend
            </div>
          </div>
          <div className="ml-auto font-medium">$50</div>
        </div>
      </div>
    </Link>
  );
}

export default Room;
