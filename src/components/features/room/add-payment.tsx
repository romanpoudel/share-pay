import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { HandCoins } from 'lucide-react';
import PaymentModal from './payment-modal';

const AddPayment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <HandCoins className="mr-2 size-5" />
          Add payment
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <PaymentModal />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddPayment;
