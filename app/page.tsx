import CryptoList from '@/components/CryptoList';
import CryptoListContainer from '@/components/CryptoListContainer';
import { getListings } from '@/lib';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const { data } = await getListings();
  const query = searchParams?.query || '';

  return (
    <main>
      <CryptoListContainer>
        <CryptoList cryptos={data} filter={query} />
      </CryptoListContainer>
    </main>
  );
}
