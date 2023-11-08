import { ReactNode } from 'react';
import { FaSearch } from 'react-icons/fa';

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
        <input
          className="caret-main-color placeholder:text-sub-color bg-transparent border-none focus:border-none focus:ring-0 w-full p-4 outline-none"
          placeholder="Type to search"
        />
      </div>

      {children}
    </div>
  );
}
