'use client';

import { Toaster } from 'react-hot-toast';

const ToastProvider = () => (
  <Toaster
    toastOptions={{
      style: {
        background: '#333',
        color: '#FFF',
      },
    }}
  />
);

export default ToastProvider;
