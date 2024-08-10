'use client';

import { Table, TableRow, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import TablesRow from './table-row';
import TablesHeader from './table-header';

export default function Component() {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description:
        'High-quality noise-cancelling headphones with Bluetooth connectivity.',
      price: 99.99,
      quantity: 25,
    },
    {
      id: 2,
      name: 'Ergonomic Office Chair',
      description:
        'Adjustable and comfortable office chair with lumbar support.',
      price: 249.99,
      quantity: 12,
    },
    {
      id: 3,
      name: 'Smart TV 55"',
      description: '4K Ultra HD smart TV with built-in streaming apps.',
      price: 599.99,
      quantity: 8,
    },
    {
      id: 4,
      name: 'Fitness Tracker',
      description:
        'Waterproof fitness tracker with heart rate monitoring and activity tracking.',
      price: 79.99,
      quantity: 30,
    },
  ];
  return (
    <div className="mx-auto w-full max-w-6xl">
      <Table>
        <TablesHeader />
        <TableBody>
          {products.map((product) => (
            <TablesRow key={product.id} product={product} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

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
