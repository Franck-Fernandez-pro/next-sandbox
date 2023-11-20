import { EthDataSkeleton } from '@/components/EthData';
import ListWrapper from '@/components/ListWrapper';
import { RowSkeleton } from '@/components/Row';

export default function Loading() {
  return (
    <main>
      <EthDataSkeleton />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mt-10">
        <ListWrapper title="Latest Blocks">
          {['', '', '', '', '', ''].map((_, idx) => (
            <RowSkeleton key={idx} />
          ))}
        </ListWrapper>

        <ListWrapper title="Latest Transactions">
          {['', '', '', '', '', ''].map((_, idx) => (
            <RowSkeleton key={idx} />
          ))}
        </ListWrapper>
      </div>
    </main>
  );
}
