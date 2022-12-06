import * as React from 'react';
import { GrCircleInformation } from 'react-icons/gr';

export default function KeranjangRingkasan() {
  return (
    <div className='layout text-clight'>
      <div className='flex flex-col gap-8'>
        <div className='flex gap-4 bg-cgray3 p-6'>
          <div className='flex flex-col justify-center'>
            <GrCircleInformation className='text-2xl text-cdark' />
          </div>
          <h2 className='text-cdark'>Ringkasan Keranjang</h2>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-6 rounded-md border-2 border-clight p-8'>
            <div className='flex w-full flex-col justify-center'>
              <div className='flex w-full justify-between border-b px-2'>
                <p>Total Pesanan</p>
                <p>3 Masakan</p>
              </div>
              <div className='flex w-full justify-between px-2'>
                <p>Total Harga</p>
                <p>Rp30.000,00</p>
              </div>
            </div>
            <button
              className='btn flex items-center rounded-md bg-cred px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition  duration-150 ease-in-out hover:bg-cred2 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
              type='button'
              id='button-addon2'
            >
              Beli
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
