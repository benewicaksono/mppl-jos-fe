/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export default function VideoSection(props: any) {
  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex justify-between py-[70px]'>
        <div
          className='flex w-full flex-col justify-center gap-4'
          data-aos='fade-right'
          data-aos-duration='1000'
        >
          <h2 className='text-center'>{props.title}</h2>
          <div className='relative flex aspect-video justify-center overflow-hidden rounded-lg'>
            <iframe
              className='w-full'
              src={props.videoUrl}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
