'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed -mt-20 -mx-9 p-5 flex justify-center w-full gap-5">
      <Link className={`${pathname === '/' ? '' : 'text-text-color'}`} href="/">
        Currencies
      </Link>
      <Link
        className={`${pathname === '/explore' ? '' : 'text-text-color'}`}
        href="/explore"
      >
        Explore
      </Link>
    </nav>
  );
}
