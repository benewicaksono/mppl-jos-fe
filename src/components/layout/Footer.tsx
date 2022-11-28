import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='absolute bottom-2 flex w-full justify-center text-gray-700'>
      © {new Date().getFullYear()} oleh
      <UnderlineLink href='/' className='ml-1'>
        VEGAN.in
      </UnderlineLink>
    </footer>
  );
}
