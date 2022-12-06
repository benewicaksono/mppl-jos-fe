import { useRouter } from 'next/router';
import * as React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import useAuthStore from '@/store/useAuthStore';

import { ProtectedRoute } from '@/types/auth.type';

type PrivateRouteProps = {
  protectedRoutes: ProtectedRoute[];
  children: JSX.Element;
};

export default function PrivateRoute({
  protectedRoutes,
  children,
}: PrivateRouteProps) {
  const router = useRouter();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const user = useAuthStore((state) => state.user);
  const loadUser = useAuthStore((state) => state.loadUser);

  const currentRoute: ProtectedRoute = React.useMemo(() => {
    return (
      protectedRoutes.find((route) => router.pathname.includes(route.path)) || {
        path: router.pathname,
        type: 'all',
      }
    );
  }, [protectedRoutes, router.pathname]);

  React.useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated && currentRoute.type == 'needAuth') {
      router.replace('/masuk');
    }
    if (!isLoading && isAuthenticated && currentRoute.type == 'auth') {
      router.replace('/admin/dashboard/products');
    }
  }, [currentRoute, isAuthenticated, isLoading, router, user]);

  if ((isLoading || !isAuthenticated) && currentRoute.type == 'admin') {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
        <ImSpinner8 className='mb-4 animate-spin text-4xl' />
        <p>Loading...</p>
      </div>
    );
  }

  return children;
}
