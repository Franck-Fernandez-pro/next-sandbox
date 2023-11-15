import { getBlockByNumber } from '@/lib';
import { Block } from '@/type';
import Link from 'next/link';
import { BiCube } from 'react-icons/bi';
import { Hex, hexToNumber } from 'viem';
import { dayjs } from '@/helpers';

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
