/* eslint-disable react/jsx-key */
import * as React from 'react';

import { resepFavoritProps } from '@/data/ResepFavorit';

import Card1 from '@/components/card/Card1';

export default function CardContainer3({ data }: resepFavoritProps) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex flex-col gap-4 py-[70px]'>
        <h2 className='text-center'>Resep Favorit</h2>
        <div className='flex gap-4'>
          {data.map(({ imgUrl, title, name, views, time }) => {
            return (
              <Card1
                imgUrl={imgUrl}
                title={title}
                name={name}
                views={views}
                time={time}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
