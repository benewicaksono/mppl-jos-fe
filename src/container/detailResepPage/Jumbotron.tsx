import * as React from 'react';

export default function Jumbotron() {
  return (
    <>
      <div className="absolute z-[-1] h-[747px] w-full bg-[url('/images/SateJamur.jpg')] brightness-75"></div>
      <div className='layout flex h-[747px] flex-col items-center justify-center gap-1 bg-transparent text-center text-clight'>
        <h1>Sate Jamur</h1>
        <p className='mb-4'>
          Sate jamur, gurih manis berpadu untuk mengisi waktu sore sembari
          menikmati teh hangat
        </p>
      </div>
    </>
  );
}
