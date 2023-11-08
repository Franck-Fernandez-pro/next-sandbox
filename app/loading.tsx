import { CryptoListSkeleton } from '@/components/CryptoList';
import CryptoListContainer from '@/components/CryptoListContainer';

export default function Loading() {
  return (
    <CryptoListContainer>
      <CryptoListSkeleton />
    </CryptoListContainer>
  );
}
