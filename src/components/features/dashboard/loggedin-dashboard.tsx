import React from 'react';
import Room from './room';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const LoggedinDashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-14 p-4 sm:p-6 md:grid-cols-2 md:p-8 lg:grid-cols-3">
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
        <Room />
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Plus size={18} className="mr-2" />
            Add Room
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Room</DialogTitle>
            <DialogDescription>
              Name a room and click create room when done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Room</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoggedinDashboard;
