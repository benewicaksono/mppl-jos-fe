// import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

import axiosClient from '@/lib/axios';

import { User } from '@/types/auth.type';

export type AuthStoreType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  loadUser: () => void;
  stopLoading: () => void;
};

const useAuthStore = create<
  AuthStoreType,
  [['zustand/devtools', AuthStoreType]]
>(
  devtools((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    login: (user) => {
      localStorage.setItem('token', user.data || user.access_token);
      // user.data came from /api/login api, user.token came from /get/profile api
      set(
        produce<AuthStoreType>((state) => {
          state.isAuthenticated = true;
          state.loadUser();
        })
      );
    },
    stopLoading: () => {
      set(
        produce<AuthStoreType>((state) => {
          state.isLoading = false;
        })
      );
    },
    loadUser: async () => {
      try {
        const token = localStorage.getItem('token');
        if (token === null || token === undefined) {
          return;
        }
        const res = await axiosClient.get('/api/user');
        set(
          produce<AuthStoreType>((state) => {
            state.user = res.data.data;
            state.isAuthenticated = true;
          })
        );
      } catch (err) {
        localStorage.removeItem('token');
      } finally {
        set(
          produce<AuthStoreType>((state) => {
            state.isLoading = false;
          })
        );
      }
    },
    logout: () => {
      localStorage.removeItem('token');
      set(
        produce<AuthStoreType>((state) => {
          state.isAuthenticated = false;
          state.user = null;
        })
      );
    },
  }))
);

export default useAuthStore;
