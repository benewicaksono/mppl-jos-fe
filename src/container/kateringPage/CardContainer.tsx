/* eslint-disable react/jsx-key */
import * as React from 'react';

import { kateringProps } from '@/data/Katering';

import Card1 from '@/components/card/Card1';

export default function CardContainer({ data }: kateringProps) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div
        className='layout flex flex-col gap-4 py-[70px]'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        <h2 className='text-center'>Resep Favorit</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {data.map(({ id, imgUrl, title, desc, price }) => {
            return (
              <Card1
                jenis='katering'
                id={id}
                imgUrl={imgUrl}
                title={title}
                desc={desc}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
