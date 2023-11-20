import { getCurrencyValue } from '@/helpers';
import { getQuotes } from '@/lib';
import { Crypto } from '@/type';
import { ReactNode } from 'react';
import { BiCube } from 'react-icons/bi';
import { FaEthereum, FaGlobe, FaServer } from 'react-icons/fa';
import { FaGasPump, FaGauge } from 'react-icons/fa6';

export default async function EthData() {
  const {
    data: {
      1027: {
        quote: { USD },
      },
    },
  } = await getQuotes({ id: '1027' }); // ETH

  return (
    <section className="border w-fit mx-auto p-4 rounded-lg border-sub-color grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 divide-sub-color [&>div]:grid [&>div]:grid-rows-2 [&>div]:divide-y [&>div]:divide-sub-color">
      <div>
        <Case icon={<FaEthereum />} title="ETHER PRICE">
          {getCurrencyValue(USD.price)} ({USD.percent_change_24h.toFixed(2)}%)
        </Case>

        <Case icon={<FaGlobe />} title="MKT CAP">
          {getCurrencyValue(USD.market_cap)}
        </Case>
      </div>

      <div>
        <Case icon={<FaServer />} title="TRANSACTIONS">
          2,159.08 M (13.1 TPS)
        </Case>
        <Case icon={<FaGasPump />} title="MED GAS PRICE">
          38 Gwei ($1.62)
        </Case>
      </div>

      <div>
        <Case icon={<FaGauge />} title="LAST FINALIZED BLOCK">
          18585296
        </Case>
        <Case icon={<BiCube />} title="LAST SAFE BLOCK">
          18585327
        </Case>
      </div>
    </section>
  );
}

const Case = ({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) => (
  <div className="flex items-center gap-5 p-4 [&_svg]:h-8 [&_svg]:w-8">
    {icon}
    <div className="flex flex-col [&-span]:truncate">
      <span className="text-xs">{title}</span>
      <span>{children}</span>
    </div>
  </div>
);

export const EthDataSkeleton = () => (
  <section className="border w-[893.94px] h-[180px] mx-auto p-4 rounded-lg border-sub-color grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 divide-sub-color [&>div]:grid [&>div]:grid-rows-2 [&>div]:divide-y [&>div]:divide-sub-color animate-pulse">
    <div>
      <Case icon={<FaEthereum />} title="ETHER PRICE">
        <div className="h-2 w-32 bg-slate-200 rounded" />
      </Case>

      <Case icon={<FaGlobe />} title="MKT CAP">
        <div className="h-2 w-28 bg-slate-200 rounded" />
      </Case>
    </div>

    <div>
      <Case icon={<FaServer />} title="TRANSACTIONS">
        <div className="h-2 w-32 bg-slate-200 rounded" />
      </Case>
      <Case icon={<FaGasPump />} title="MED GAS PRICE">
        <div className="h-2 w-28 bg-slate-200 rounded" />
      </Case>
    </div>

    <div>
      <Case icon={<FaGauge />} title="LAST FINALIZED BLOCK">
        <div className="h-2 w-28 bg-slate-200 rounded" />
      </Case>
      <Case icon={<BiCube />} title="LAST SAFE BLOCK">
        <div className="h-2 w-32 bg-slate-200 rounded" />
      </Case>
    </div>
  </section>
);
