import Row, { BlockRow, RowSkeleton, TransactionRow } from '@/components/Row';
import { hexMinus } from '@/helpers';
import { getBlockByNumber } from '@/lib';
import { Suspense } from 'react';

export default async function Page() {
  const {
    data: {
      result: { hash, number, transactions, timestamp },
    },
  } = await getBlockByNumber('latest', true);

  return (
    <main>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <section className="w-full border rounded-lg border-sub-color h-fit">
          <h2 className="p-4 border-b border-sub-color">Latest Blocks</h2>
          <BlockRow block={{ hash, number, transactions, timestamp }} />
          {['', '', '', '', ''].map((_, idx) => (
            <Suspense fallback={<RowSkeleton />} key={idx}>
              <Row
                key={idx}
                type="block"
                blockNumber={hexMinus(number, idx + 1)}
              />
            </Suspense>
          ))}
        </section>

        <section className="w-full border rounded-lg border-sub-color h-fit">
          <h2 className="p-4 border-b border-sub-color">Latest Transactions</h2>
          {transactions.slice(0, 6).map(({ hash, from, to, value }, idx) => (
            <TransactionRow
              key={idx}
              hash={hash}
              from={from}
              to={to}
              value={value}
              timestamp={timestamp}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
