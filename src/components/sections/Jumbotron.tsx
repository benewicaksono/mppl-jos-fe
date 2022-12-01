/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export default function Jumbotron(props: any) {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${props.imgUrl})` }}
        className='absolute z-[-1] h-[747px] w-full bg-cover brightness-50'
      ></div>
      <div className='layout bg-transp arent flex h-[747px] flex-col items-center justify-center  gap-1 text-center text-clight'>
        <h1>{props.title}</h1>
        <p className='mb-4'>{props.desc}</p>
      </div>
    </>
  );
}
