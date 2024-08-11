import React, { Fragment, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { getNameShortForm } from '@/utils/getNameShortForm';
import { TableRow, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
};

const TablesRow = ({ product }: { product: Product }) => {
  const [expandedRowId, setExpandedRowId] = useState(null);
  const toggleRowExpansion = (id: any) => {
    setExpandedRowId(id === expandedRowId ? null : id);
  };
  return (
    <Fragment key={product.id}>
      <TableRow
        onClick={() => toggleRowExpansion(product.id)}
        className="cursor-pointer [&:not(:last-child)]:border-b [&:not(:last-child)]:border-muted/40"
      >
        <TableCell className="font-medium">
          <Avatar>
            {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
            <AvatarFallback className="text-[10px] font-bold">
              {getNameShortForm(product.name)}
            </AvatarFallback>
          </Avatar>
        </TableCell>
        <TableCell className="text-muted-foreground">
          {product.description.split(' ')[0]}
        </TableCell>
        <TableCell>${product.price.toFixed(2)}</TableCell>
        <TableCell className="text-right">
          <Button
            variant="ghost"
            size="icon"
            className={`transition-transform ${expandedRowId === product.id ? 'rotate-180' : ''}`}
          >
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </TableCell>
        <TableCell className="flex justify-end gap-4 text-right">
          <Button
            variant={'secondary'}
            className="hover:bg-primary hover:text-white hover:dark:text-background"
          >
            Settle
          </Button>
          <Button variant={'outline'}>View All</Button>
        </TableCell>
      </TableRow>
      {expandedRowId === product.id && (
        <TableRow className="bg-muted/20 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-muted/40">
          <TableCell colSpan={5} className="p-6">
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <TagIcon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Price:</span>
                <span>${product.price.toFixed(2)}</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageIcon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Quantity:</span>
                <span>{product.quantity}</span>
              </div>
              <div className="flex items-center gap-2">
                <InfoIcon className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Description:</span>
                <span>{product.description}</span>
              </div>
            </div>
          </TableCell>
        </TableRow>
      )}
    </Fragment>
  );
};

export default TablesRow;

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function InfoIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

function TagIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
    </svg>
  );
}
