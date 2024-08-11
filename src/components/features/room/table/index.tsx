'use client';

import { Table, TableBody } from '@/components/ui/table';
import TablesHeader from './table-header';
import TablesRow from './table-row';

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
