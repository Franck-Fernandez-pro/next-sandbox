import Image from 'next/image';
import { Crypto } from '@/type';

const getCurrencyValue = (v: number) =>
  `$${new Intl.NumberFormat('en-US').format(v)}`;

export default function CryptoList({ cryptos }: { cryptos: Crypto[] }) {
  return (
    <ul className="cursor-pointer max-h-[70vh] overflow-y-scroll select-none">
      {cryptos.map(({ id, name, quote: { USD } }, idx) => (
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
  );
}

export function CryptoListSkeleton() {
  return (
    <ul className="max-h-[70vh] overflow-y-scroll select-none animate-pulse">
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-40 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-10 bg-slate-200 rounded" />
        </div>
      </li>

      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-32 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-9 bg-slate-200 rounded" />
        </div>
      </li>

      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-28 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-7 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-40 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-10 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-32 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-9 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-28 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-7 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-40 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-10 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-32 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-9 bg-slate-200 rounded" />
        </div>
      </li>
      <li className="py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-200 h-6 w-6" />
          <div className="h-2 w-28 bg-slate-200 rounded" />
        </div>
        <div>
          <div className="h-2 w-7 bg-slate-200 rounded" />
        </div>
      </li>
    </ul>
  );
}
