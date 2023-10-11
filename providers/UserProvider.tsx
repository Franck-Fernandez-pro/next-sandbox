'use client';

import { MyUserContextProvider } from '@/hooks/useUser';
import { ReactNode } from 'react';

const UserProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => (
  <MyUserContextProvider>{children}</MyUserContextProvider>
);

export default UserProvider;
