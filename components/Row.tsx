import { getBlockByNumber } from '@/lib';
import { Block, Transaction } from '@/type';
import Link from 'next/link';
import { BiCube } from 'react-icons/bi';
import { Hex, formatEther, hexToBigInt, hexToNumber } from 'viem';
import { dayjs } from '@/helpers';
import { FaMemory } from 'react-icons/fa';

export default async function Row({
  type,
  blockNumber,
}: {
  type: 'block' | 'transaction';
  blockNumber: Hex;
}) {
  const {
    data: {
      result: { hash, number, transactions, timestamp },
    },
  } = await getBlockByNumber(blockNumber);

  return (
    type === 'block' && (
      <BlockRow block={{ hash, number, transactions, timestamp }} />
    )
  );
}

export function BlockRow({
  block: { hash, number, timestamp, transactions },
}: {
  block: {
    hash: Block['hash'];
    number: Block['number'];
    timestamp: Block['timestamp'];
    transactions: Block['transactions'];
  };
}) {
  return (
    <div className="flex justify-between p-4 text-sm items-center border-b border-sub-color last:border-0">
      <div className="flex items-center gap-3">
        <BiCube className="h-5 w-5" />
        <div className="flex flex-col">
          <Link className="w-fit" href={`/block/${hash}`}>
            {hexToNumber(number)}
          </Link>
          <span>{dayjs(hexToNumber(timestamp) * 1000).fromNow()}</span>
        </div>
      </div>

      <div>
        <div>{transactions.length} txns</div>
      </div>
    </div>
  );
}

export function TransactionRow({
  hash,
  from,
  to,
  timestamp,
  value,
}: {
  hash: Transaction['hash'];
  from: Transaction['from'];
  to: Transaction['to'];
  timestamp: Block['timestamp'];
  value: Transaction['value'];
}) {
  return (
    <div className="flex justify-between p-4 text-sm items-center border-b border-sub-color last:border-0">
      <div className="flex items-center gap-3">
        <FaMemory className="h-5 w-5" />
        <div className="flex flex-col">
          <Link
            className="w-fit max-w-[8rem] truncate"
            href={`/address/${hash}`}
          >
            {hash}
          </Link>
          <span>{dayjs(hexToNumber(timestamp) * 1000).fromNow()}</span>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-1">
          From{' '}
          <Link
            className="max-w-[8rem] truncate"
            href={`/address/${from}`}
            data-bs-toggle="tooltip"
          >
            {from}
          </Link>
        </div>
        <div className="flex flex-wrap gap-1">
          To{' '}
          <Link
            className="max-w-[8rem] truncate"
            href={`/address/${to}`}
            data-bs-toggle="tooltip"
          >
            {from}
          </Link>
        </div>
      </div>

      <div>
        <div>{parseFloat(formatEther(hexToBigInt(value))).toFixed(5)} Eth</div>
      </div>
    </div>
  );
}

export function RowSkeleton() {
  return (
    <div className="flex justify-between p-4 text-sm items-center border-b border-sub-color last:border-0 animate-pulse">
      <div className="flex items-center gap-3">
        <div className="h-5 w-5 bg-slate-200 rounded" />
        <div className="flex flex-col gap-2">
          <div className="h-2 w-32 bg-slate-200 rounded" />
          <div className="h-2 w-28 bg-slate-200 rounded" />
        </div>
      </div>

      <div>
        <div className="h-2 w-20 bg-slate-200 rounded" />
      </div>
    </div>
  );
}
