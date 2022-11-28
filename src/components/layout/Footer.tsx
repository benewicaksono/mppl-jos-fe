import * as React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function Footer() {
  return (
    <footer className='flex w-full justify-center border-t bg-cdark3 py-4 text-clight'>
      © {new Date().getFullYear()} oleh
      <UnderlineLink href='/' className='ml-1'>
        VEGAN.in
      </UnderlineLink>
    </footer>
  );
}
