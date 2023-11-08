import { FAKE } from '@/fake-data';
import { GetCryptosRequest } from '@/type';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

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

const getCurrencyValue = (v: number) =>
  `$${new Intl.NumberFormat('en-US').format(v)}`;

export default async function Home() {
  // const { data } = await getCryptoList();
  const data = FAKE;

  return (
    <main className="py-20">
      <div className="mx-auto max-w-[600px] w-full rounded-lg">
        <div className="flex items-center">
          <div className="text-sub-color mx-[1px] my-4">
            <FaSearch />
          </div>
          <input
            className="caret-main-color placeholder:text-sub-color bg-transparent border-none focus:border-none focus:ring-0 w-full p-4 outline-none"
            placeholder="Type to search"
          />
        </div>

        <ul className="cursor-pointer max-h-[70vh] overflow-y-scroll select-none">
          {data.map(({ id, name, quote: { USD } }, idx) => (
            <li
              className="text-sub-color text-sm py-2 px-4 hover:bg-text-color hover:text-bg-color flex items-center justify-between"
              key={idx}
            >
              <div className="flex items-center gap-3">
                <Image
                  width={24}
                  height={24}
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                  alt={`${name} icon`}
                />
                {name}
              </div>
              <div>{getCurrencyValue(USD.price)}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
