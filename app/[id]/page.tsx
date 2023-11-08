import { axios } from '@/axios';
import { getCurrencyValue } from '@/helpers';
import { GetCryptosMetadataRequest, GetCryptosRequest } from '@/type';
import Image from 'next/image';

const isPositive = (v: number) => v >= 0;
const getColor = (v: number) =>
  isPositive(v) ? 'text-red-400' : 'text-green-400';

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const [
    {
      data: { data: market },
    },
    {
      data: { data: metadata },
    },
  ] = await Promise.all([
    axios.get<GetCryptosRequest>(`v2/cryptocurrency/quotes/latest?id=${id}`),
    axios.get<GetCryptosMetadataRequest>(`v2/cryptocurrency/info?id=${id}`),
  ]);

  const {
    name,
    quote: { USD },
  } = Object.values(market)[0];
  const { logo, description } = Object.values(metadata)[0];

  return (
    <main className="space-y-14">
      <div className="flex items-center gap-3 mb-14">
        <Image width={34} height={34} src={logo} alt={`${name} icon`} />
        <h1 className="text-4xl">
          {name}
          <span className="ml-5 text-2xl text-sub-color">
            {getCurrencyValue(USD.price)}
          </span>
        </h1>
      </div>

      <p>{description}</p>

      <div className="grid grid-cols-3 [&_div]:mx-auto [&_div]:p-10 [&_div]:flex [&_div]:flex-col [&_div]:items-center">
        <div>
          <span className={getColor(USD.percent_change_1h)}>
            {USD.percent_change_1h.toFixed(2)}%
          </span>
          <span>1h%</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_24h)}>
            {USD.percent_change_24h.toFixed(2)}%
          </span>
          <span>24h%</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_7d)}>
            {USD.percent_change_7d.toFixed(2)}%
          </span>
          <span>7d%</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_30d)}>
            {USD.percent_change_30d.toFixed(2)}%
          </span>
          <span>30d%</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_60d)}>
            {USD.percent_change_60d.toFixed(2)}%
          </span>
          <span>60d%</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_90d)}>
            {USD.percent_change_90d.toFixed(2)}%
          </span>
          <span>90d%</span>
        </div>
      </div>
    </main>
  );
}
