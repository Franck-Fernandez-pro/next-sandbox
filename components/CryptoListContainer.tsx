import { ReactNode } from 'react';
import { FaSearch } from 'react-icons/fa';
import Search from './Search';

export default function CryptoListContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-[600px] w-full rounded-lg">
      <div className="flex items-center">
        <div className="text-sub-color mx-[1px] my-4">
          <FaSearch />
        </div>

        <Search />
      </div>

      {children}
    </div>
  );
}
