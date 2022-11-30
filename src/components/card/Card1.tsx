/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

export default function Card1(props: any) {
  return (
    <Link href={`/${props.jenis}/${props.id}`}>
      <div
        className='flex w-[354px] flex-col gap-2 text-clight'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <div>
          <Image
            src={props.imgUrl}
            alt={props.title}
            width={354}
            height={247}
          />
        </div>
        <div className='flex flex-col'>
          <h4>{props.title}</h4>
          <p className={props.price ? '' : 'mb-6'}>{props.desc}</p>
          {props.price ? (
            <p className='mt-2 mb-6 text-center'>Rp{props.price},00</p>
          ) : (
            ''
          )}
        </div>
      </div>
    </Link>
  );
}
