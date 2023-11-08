'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(query: string) {
    const params = new URLSearchParams(searchParams);

    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      className="caret-main-color placeholder:text-sub-color bg-transparent border-none focus:border-none focus:ring-0 w-full p-4 outline-none"
      placeholder="Type to search"
      defaultValue={searchParams.get('query')?.toString()}
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}
