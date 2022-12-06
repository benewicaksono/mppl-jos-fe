/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import * as React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';

export default function KeranjangItem(props: any) {
  return (
    <div className='bg-cdark2'>
      <div className='layout text-clight'>
        <div className='mb-8 flex flex-col gap-8'>
          <h1>Keranjang Belanja</h1>
          <div className='flex gap-4 bg-cgray3 p-6'>
            <div className='flex flex-col justify-center'>
              <GrCircleInformation className='text-2xl text-cdark' />
            </div>
            <h2 className='text-cdark'>Keranjang Anda</h2>
          </div>
          <div className='flex gap-6 rounded-md border-2 border-clight p-8'>
            <div className='relative overflow-hidden'>
              <Image
                src={props.imgUrl}
                alt={props.title}
                width={198}
                height={198}
                className='transition-ease-in-out duration-100 hover:scale-125'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <h3>{props.title}</h3>
              <p className='text-justify'>{props.desc}</p>
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
              Rp{props.price},00
            </div>
            <div className='flex flex-col justify-center'>
              <FaRegTrashAlt className='cursor-pointer text-3xl text-cred hover:text-cred2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
