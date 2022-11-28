/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import * as React from 'react';

export default function Card1(props: any) {
  return (
    <div className='flex flex-col gap-2 text-clight'>
      <div>
        <Image src={props.imgUrl} alt={props.title} width={354} height={247} />
      </div>
      <div className='flex flex-col'>
        <h4>{props.title}</h4>
        <p>{props.name}</p>
        <div className='flex gap-4'>
          <p>{props.views}k views</p>
          <p>{props.time} ago</p>
        </div>
      </div>
    </div>
  );
}
