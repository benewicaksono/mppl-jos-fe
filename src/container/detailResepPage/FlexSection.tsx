/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';

export default function FlexSection(props: any) {
  if (props.version == 1) {
    return (
      <div className='bg-cdark3 text-clight'>
        <div className='layout flex justify-between py-[70px]'>
          <div className='flex w-full flex-col content-center justify-center gap-4'>
            <h2 className='text-center'>{props.title}</h2>
            <p>{props.par}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.version == 2) {
    return (
      <div className='bg-cdark3 text-clight'>
        <div className='layout flex justify-between py-[30px]'>
          <div className='flex h-full w-full flex-col content-center justify-center gap-4'>
            <h2 className='py-[30px] text-center'>{props.title}</h2>
            <div className='flex flex-wrap'>
              <div className='mb-10 w-full px-4 lg:w-1/3'>
                <ul className='text-center'>
                  <li>350 g Jamur Merang</li>
                  <li>1 sdm minyak</li>
                  <li>100 ml air</li>
                </ul>
              </div>
              <div className='mb-10 w-full px-4 lg:w-1/3'>
                <ul className='text-center'>
                  <li>3 sdm Kecap Manis</li>
                  <li>1 lembar daun salam</li>
                  <li>Lali</li>
                </ul>
              </div>
              <div className='mb-10 w-full px-4 lg:w-1/3'>
                <ul className='text-center'>
                  <li>1/4 sdt Merica Putih Bubuk</li>
                  <li>1/4 sdt garam</li>
                  <li>Lali</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className='bg-cdark3 text-clight'>
        <div className='layout flex justify-between py-[30px]'>
          <div className='flex h-full w-full flex-col content-center justify-center gap-4'>
            <h2 className='py-[30px] text-center'>{props.title}</h2>
            <div className='flex w-full justify-center'>
              <div className='mb-10 w-full px-4 lg:w-1/2'>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/JpTqSzm4JOk'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
