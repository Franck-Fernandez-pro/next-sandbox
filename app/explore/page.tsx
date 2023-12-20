import EthData, { EthDataSkeleton } from '@/components/EthData';
import ListWrapper from '@/components/ListWrapper';
import Row, { BlockRow, RowSkeleton, TransactionRow } from '@/components/Row';
import { hexMinus } from '@/helpers';
import { getBlockByNumber } from '@/lib';
import { Suspense } from 'react';

export default async function Page() {
  const {
    result: { hash, number, transactions, timestamp },
  } = await getBlockByNumber('latest', true, 0);

  return (
    <main>
      <Suspense fallback={<EthDataSkeleton />}>
        <EthData />
      </Suspense>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <ListWrapper title="Latest Blocks">
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
        </ListWrapper>

        <ListWrapper title="Latest Transactions">
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
        </ListWrapper>
      </div>
    </main>
  );
}
