import Row, { BlockRow } from '@/components/Row';
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
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
        <section className="w-full border rounded-lg border-sub-color">
          <h2 className="p-4 border-b border-sub-color">Latest Blocks</h2>
          <BlockRow block={{ hash, number, transactions, timestamp }} />
          {['', '', '', '', ''].map((_, idx) => (
            <Suspense fallback="Loading..." key={idx}>
              <Row type="block" blockNumber={hexMinus(number, idx + 1)} />
            </Suspense>
          ))}
        </section>
      </div>
    </main>
  );
}
