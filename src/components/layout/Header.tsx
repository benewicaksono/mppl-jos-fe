/* eslint-disable react-hooks/rules-of-hooks */
import { Menu, Transition } from '@headlessui/react';
import Router from 'next/router';
import * as React from 'react';
import { BiUserCircle } from 'react-icons/bi';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import NavSearch from '@/components/searchbar/NavSearch';

import useAuthStore from '@/store/useAuthStore';

const links = [
  { href: '/', label: 'Home' },
  { href: '/resep', label: 'Resep' },
  { href: '/pesan', label: 'Pesan' },
];

export default function Header() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const loadUser = useAuthStore((state) => state.loadUser);
  const user = useAuthStore((state) => state.user);

  React.useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleOnClick(url: string) {
    Router.push(url);
  }

  return (
    <header className='sticky top-0 z-50 bg-cdark'>
      <div className='layout flex h-16 items-center justify-between text-clight'>
        <div className='flex space-x-4'>
          <UnstyledLink
            href='/'
            className='flex flex-col justify-center font-bold hover:text-gray-200'
          >
            VEGAN.in
          </UnstyledLink>
          <NavSearch />
        </div>

        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-200'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
            <li>
              {isAuthenticated == false ? (
                <Button
                  variant='outline'
                  className='border-clight text-clight hover:border-cdark hover:bg-clight hover:text-cdark'
                  onClick={() => {
                    handleOnClick('/masuk');
                  }}
                >
                  Masuk
                </Button>
              ) : (
                <Menu as='div'>
                  <Menu.Button className='flex flex-col justify-center'>
                    <BiUserCircle className='text-2xl text-clight hover:cursor-pointer hover:text-gray-200  ' />
                  </Menu.Button>
                  <Transition
                    as={React.Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-40 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <div className='px-1 py-1 '>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => {
                                handleOnClick(`/auth/user/${user?.id}/profil`);
                              }}
                            >
                              Profil
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => {
                                handleOnClick(
                                  `/auth/user/${user?.id}/keranjang`
                                );
                              }}
                            >
                              Keranjang
                            </button>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? 'bg-violet-500 text-white'
                                  : 'text-gray-900'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => {
                                logout();
                              }}
                            >
                              Keluar
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
