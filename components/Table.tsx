'use client';

import { Crypto } from '@/type';
import {
  Table as NextUITable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import Image from 'next/image';

const getCurrencyValue = (v: number) =>
  `$${new Intl.NumberFormat('en-US').format(v)}`;

const isPositive = (v: string) => parseFloat(v) >= 0;
const getColor = (v: string) =>
  isPositive(v) ? 'text-red-400' : 'text-green-400';

export default function Table({ assets = [] }: { assets: Crypto[] }) {
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
        {assets.map(({ id, name, quote: { USD } }, idx) => (
          <TableRow key={idx}>
            <TableCell>{idx}</TableCell>
            <TableCell className="flex items-center gap-3">
              <Image
                width={24}
                height={24}
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                alt={`${name} icon`}
              />
              {name}
            </TableCell>
            <TableCell>{getCurrencyValue(USD.price)}</TableCell>
            <TableCell className={getColor(USD.percent_change_1h.toFixed(2))}>
              {USD.percent_change_1h.toFixed(2)}%
            </TableCell>
            <TableCell className={getColor(USD.percent_change_24h.toFixed(2))}>
              {USD.percent_change_24h.toFixed(2)}%
            </TableCell>
            <TableCell className={getColor(USD.percent_change_7d.toFixed(2))}>
              {USD.percent_change_7d.toFixed(2)}%
            </TableCell>
            <TableCell className={getColor(USD.percent_change_30d.toFixed(2))}>
              {USD.percent_change_30d.toFixed(2)}%
            </TableCell>
            <TableCell>{getCurrencyValue(USD.market_cap)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </NextUITable>
  );
}
