import Image from 'next/image';
import { FaCode, FaGlobe } from 'react-icons/fa';
import { BiSolidBook } from 'react-icons/bi';
import { axiosCoinMarket } from '@/axios';
import { getCurrencyValue } from '@/helpers';
import { GetCryptosMetadataRequest, GetCryptosRequest } from '@/type';
import Link from 'next/link';

const isPositive = (v: number) => v >= 0;
const getColor = (v: number) =>
  isPositive(v) ? 'text-green-400' : 'text-red-400';

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
    axiosCoinMarket.get<GetCryptosRequest>(`v2/cryptocurrency/quotes/latest?id=${id}`),
    axiosCoinMarket.get<GetCryptosMetadataRequest>(`v2/cryptocurrency/info?id=${id}`),
  ]);

  const {
    name,
    quote: { USD },
  } = Object.values(market)[0];
  const { logo, description, urls } = Object.values(metadata)[0];

  return (
    <main className="space-y-14">
      <section className="flex items-center justify-between mb-14">
        <div className="flex items-center gap-3">
          <Image width={34} height={34} src={logo} alt={`${name} icon`} />
          <h1 className="text-4xl">
            {name}
            <span className="ml-5 text-2xl text-sub-color">
              {USD.price < 0.1 ? `$${USD.price}` : getCurrencyValue(USD.price)}
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {urls.website.map((url, idx) => (
            <Link href={url} key={idx} target="_blank">
              <FaGlobe />
            </Link>
          ))}
          {urls.source_code.map((url, idx) => (
            <Link href={url} key={idx} target="_blank">
              <FaCode />
            </Link>
          ))}
          {urls.technical_doc.map((url, idx) => (
            <Link href={url} key={idx} target="_blank">
              <BiSolidBook />
            </Link>
          ))}
        </div>
      </section>

      <p>{description}</p>

      <section className="grid grid-cols-3 [&_div]:mx-auto [&_div]:p-10 [&_div]:flex [&_div]:flex-col [&_div]:items-center text-lg">
        <div>
          <span className={getColor(USD.percent_change_1h)}>
            {USD.percent_change_1h.toFixed(2)}%
          </span>
          <span>1h</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_24h)}>
            {USD.percent_change_24h.toFixed(2)}%
          </span>
          <span>24h</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_7d)}>
            {USD.percent_change_7d.toFixed(2)}%
          </span>
          <span>7d</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_30d)}>
            {USD.percent_change_30d.toFixed(2)}%
          </span>
          <span>30d</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_60d)}>
            {USD.percent_change_60d.toFixed(2)}%
          </span>
          <span>60d</span>
        </div>
        <div>
          <span className={getColor(USD.percent_change_90d)}>
            {USD.percent_change_90d.toFixed(2)}%
          </span>
          <span>90d</span>
        </div>

        <div>
          <span>{USD.market_cap_dominance.toFixed(2)}%</span>
          <span>Dominance</span>
        </div>
        <div>
          <span>{getCurrencyValue(USD.market_cap)}</span>
          <span>Market Cap</span>
        </div>
      </section>
    </main>
  );
}
