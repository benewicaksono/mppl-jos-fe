/* eslint-disable react/jsx-key */
import * as React from 'react';

import { resepProps } from '@/data/Resep';

import Card1 from '@/components/card/Card1';

export default function CardContainer({ data }: resepProps) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex flex-col gap-4 py-[70px]'>
        <h2 className='text-center'>Resep Favorit</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {data.map(({ imgUrl, title, desc }) => {
            return <Card1 imgUrl={imgUrl} title={title} desc={desc} />;
          })}
        </div>
      </div>
    </div>
  );
}
