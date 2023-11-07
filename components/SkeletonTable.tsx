'use client';

import {
  Table as NextUITable,
  Skeleton,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';

const data = ['', '', '', '', '', '', '', '', '', '', '', '', ''];

export default function SkeletonTable() {
  return (
    <NextUITable aria-label="Crypto currencies" removeWrapper>
      <TableHeader>
        <TableColumn>#</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Price</TableColumn>
        <TableColumn>1h%</TableColumn>
        <TableColumn>24h%</TableColumn>
        <TableColumn>7d%</TableColumn>
        <TableColumn>30d%</TableColumn>
        <TableColumn>Market Cap</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No rows to display.">
        {data.map((_, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell className="flex items-center gap-3">
              <Skeleton className="flex rounded-full w-6 h-6" />
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-3 w-3/5 rounded-lg" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </NextUITable>
  );
}
