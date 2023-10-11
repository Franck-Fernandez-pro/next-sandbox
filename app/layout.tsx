import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import ToastProvider from '@/providers/ToasterProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';
import Player from '@/components/Player';
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';

const font = Figtree({ subsets: ['latin'] });

export const revalidate = 0;
export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'Listen your music',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const songs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <SupabaseProvider>
          <UserProvider>
            <Sidebar songs={songs}>{children}</Sidebar>
            <Player />
            <ModalProvider products={products} />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
