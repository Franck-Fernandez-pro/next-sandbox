import Table from '@/components/Table';
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
      // cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GetCryptosRequest>;
}





export default async function Home() {
  const { data } = await getCryptoList();

  return (
    <main>
      <Table assets={data} />
    </main>
  );
}
