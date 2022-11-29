import * as React from 'react';
import { GrCircleInformation } from 'react-icons/gr';

import { keranjangItemData } from '@/data/Keranjang';

import ItemMakanan from '@/container/auth/user/ItemMakanan';

export default function KeranjangItem() {
  return (
    <div className='min-h-[calc(100vh-122px)] bg-cdark2'>
      <div className='layout text-clight'>
        <div
          className='flex flex-col gap-8'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <h1>Keranjang Belanja</h1>
          <div className='flex gap-4 bg-cgray3 p-6'>
            <div className='flex flex-col justify-center'>
              <GrCircleInformation className='text-2xl text-cdark' />
            </div>
            <h2 className='text-cdark'>Keranjang Anda</h2>
          </div>
          <div className='flex flex-col gap-4'>
            <ItemMakanan data={keranjangItemData} />
          </div>
        </div>
      </div>
    </div>
  );
}
