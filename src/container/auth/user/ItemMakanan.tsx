import Image from 'next/image';
import * as React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

import { keranjangItemProps } from '@/data/Keranjang';

export default function ItemMakanan({ data }: keranjangItemProps) {
  return (
    <>
      {data.map(({ imgUrl, title, desc, price }) => {
        return (
          <>
            <div className='flex gap-6 rounded-md border-2 border-clight p-8'>
              <div className='relative overflow-hidden'>
                <Image
                  src={imgUrl}
                  alt={title}
                  width={198}
                  height={198}
                  className='transition-ease-in-out duration-100 hover:scale-125'
                />
              </div>
              <div className='flex flex-col gap-2'>
                <h3>{title}</h3>
                <p className='text-justify'>{desc}</p>
              </div>
              <div className='flex flex-col justify-center'>
                <input
                  type='number'
                  className='form-control relative m-0 max-h-12 w-20 flex-auto border-solid border-transparent bg-cgray3 bg-clip-padding px-3 py-1.5 text-base font-normal text-cdark transition ease-in-out focus:text-cdark focus:outline-none'
                  placeholder='0'
                  aria-describedby='button-addon2'
                />
              </div>
              <div className='flex flex-col justify-center text-lg'>
                Rp{price},00
              </div>
              <div className='flex flex-col justify-center'>
                <FaRegTrashAlt className='cursor-pointer text-3xl text-cred hover:text-cred2' />
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
