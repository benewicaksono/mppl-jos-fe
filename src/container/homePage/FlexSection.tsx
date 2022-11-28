/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import * as React from 'react';

export default function FlexSection(props: any) {
  if (props.version == 1) {
    return (
      <div className='bg-cdark3 text-clight'>
        <div className='layout flex justify-between py-[70px]'>
          <div className='flex flex-col justify-center gap-4'>
            <h2>{props.title}</h2>
            <p>{props.par}</p>
          </div>
          <div>
            <Image src={props.imgUrl} alt='Testing' width={530} height={398} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-cdark3 text-clight'>
        <div className='layout flex justify-between py-[70px]'>
          <div>
            <Image
              src={props.imgUrl}
              alt={props.title}
              width={530}
              height={398}
            />
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <h2>{props.title}</h2>
            <p>{props.par}</p>
          </div>
        </div>
      </div>
    );
  }
}
