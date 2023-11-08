import CryptoList from '@/components/CryptoList';
import CryptoListContainer from '@/components/CryptoListContainer';
import { GetCryptosRequest } from '@/type';

async function getCryptoList() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(
    'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=USD',
    {
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY || '',
        Accept: 'application/json',
      },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetCryptosRequest>;
}

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const { data } = await getCryptoList();
  const query = searchParams?.query || '';

  return (
    <main>
      <CryptoListContainer>
        <CryptoList cryptos={data} filter={query} />
      </CryptoListContainer>
    </main>
  );
}
