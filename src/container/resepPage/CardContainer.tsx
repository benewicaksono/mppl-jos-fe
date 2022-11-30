/* eslint-disable react/jsx-key */
import * as React from 'react';

import { resepProps } from '@/data/Resep';

import Card1 from '@/components/card/Card1';

export default function CardContainer({ data }: resepProps) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex flex-col gap-4 py-[70px]'>
        <h2 className='text-center' data-aos='fade-up' data-aos-duration='1000'>
          Resep Favorit
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {data.map(({ id, imgUrl, title, desc }) => {
            return (
              <Card1
                jenis='resep'
                id={id}
                imgUrl={imgUrl}
                title={title}
                desc={desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
