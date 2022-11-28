import Router from 'next/router';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';
import NavSearch from '@/components/searchbar/NavSearch';

const links = [
  { href: '/', label: 'Home' },
  { href: '/resep', label: 'Resep' },
  { href: '/katering', label: 'Katering' },
];

export default function Header() {
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
              <Button
                variant='outline'
                className='border-clight text-clight hover:border-cdark hover:bg-clight hover:text-cdark'
                onClick={() => {
                  handleOnClick('/');
                }}
              >
                Login
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
