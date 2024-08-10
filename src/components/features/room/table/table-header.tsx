import React from 'react';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

const TablesHeader = () => {
  return (
    <TableHeader>
      <TableRow>
        <TableHead>Mates</TableHead>
        <TableHead>Username</TableHead>
        <TableHead>Price</TableHead>
        <TableHead>
          <span className="sr-only">Actions</span>
        </TableHead>
      </TableRow>
    </TableHeader>
  );
};

export default TablesHeader;
