import React from 'react';
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
import { HandCoins } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getNameShortForm } from '@/utils/getNameShortForm';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV004',
    paymentStatus: 'Paid',
    totalAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV005',
    paymentStatus: 'Paid',
    totalAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV006',
    paymentStatus: 'Pending',
    totalAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    invoice: 'INV007',
    paymentStatus: 'Unpaid',
    totalAmount: '$300.00',
    paymentMethod: 'Credit Card',
  },
];

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
          <div>
            <DialogTitle>Add Payment</DialogTitle>
            <DialogDescription>
              Add amounts to each mate to keep track of who owes what.
            </DialogDescription>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <Label htmlFor="divide-equal-mode">Divide Equally</Label>
              <Switch id="divide-equal-mode" />
            </div>
            <Input placeholder="Enter total amount" className="max-w-40" />
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Mate</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>
                  <p className="sr-only">Actions</p>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="flex items-center gap-4">
                    <Avatar className="font-bold">
                      {/* <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      /> */}
                      <AvatarFallback>
                        {getNameShortForm(invoice.invoice)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="max-w-20">
                      <p className="overflow-hidden text-ellipsis">
                        {invoice.paymentStatus}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Input value={invoice.paymentMethod} />
                  </TableCell>
                  <TableCell>
                    <Input value={invoice.totalAmount} className="max-w-32" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Switch checked={true} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddPayment;
