import { axiosCoinMarket } from '@/axios';
import CryptoList from '@/components/CryptoList';
import CryptoListContainer from '@/components/CryptoListContainer';
import { GetCryptosRequest } from '@/type';

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const {
    data: { data },
  } = await axiosCoinMarket.get<GetCryptosRequest>(
    'v1/cryptocurrency/listings/latest?convert=USD'
  );
  const query = searchParams?.query || '';

  return (
    <main>
      <CryptoListContainer>
        <CryptoList cryptos={data} filter={query} />
      </CryptoListContainer>
    </main>
  );
}
