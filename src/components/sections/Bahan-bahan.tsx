/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export default function UnorderedList(props: any) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex justify-between py-[70px]'>
        <div
          className='flex w-full flex-col justify-center gap-4'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <h2 className='text-center'>{props.title}</h2>
          <ul className='flex w-full list-disc flex-wrap justify-center gap-4 space-x-24'>
            {props.par.map((par: string) => {
              return <li>{par}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
