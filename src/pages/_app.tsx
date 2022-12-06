import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider, QueryOptions } from 'react-query';

import '@/styles/globals.css';
import '@/styles/colors.css';

import axiosClient from '@/lib/axios';

import PrivateRoute from '@/components/PrivateRoute';

import { ProtectedRoute } from '@/types/auth.type';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await axiosClient.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const protectedRoutes: ProtectedRoute[] = [
    { path: '/pesan', type: 'needAuth' },
  ];

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Toaster
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '8px',
              color: '#000',
            },
          }}
        />
      </div>
      <PrivateRoute protectedRoutes={protectedRoutes}>
        <Component {...pageProps} />
      </PrivateRoute>
    </QueryClientProvider>
  );
}

export default MyApp;
