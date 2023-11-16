import { ReactNode } from 'react';
import { BiCube } from 'react-icons/bi';
import { FaEthereum, FaGlobe, FaServer } from 'react-icons/fa';
import { FaGasPump, FaGauge } from 'react-icons/fa6';

export default function EthData() {
  return (
    <section className="border w-fit mx-auto p-4 rounded-lg border-sub-color grid grid-cols-1 lg:grid-cols-3 lg:divide-x divide-y lg:divide-y-0 divide-sub-color [&>div]:grid [&>div]:grid-rows-2 [&>div]:divide-y [&>div]:divide-sub-color">
      <div>
        <Case icon={<FaEthereum />} title="ETHER PRICE">
          $2000 @ 0.055133 BTC (+0.53%)
        </Case>

        <Case icon={<FaGlobe />} title="MKT CAP">
          $244,412,573,538.00
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
