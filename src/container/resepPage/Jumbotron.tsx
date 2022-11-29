import * as React from 'react';

export default function Jumbotron() {
  return (
    <>
      <div className="absolute z-[-1] h-[747px] w-full bg-[url('/images/HeroImage.png')] brightness-75"></div>
      <div className='layout flex h-[747px] flex-col items-center justify-center gap-1 bg-transparent text-center text-clight'>
        <h1>Temukan Resep Favoritmu</h1>
        <p className='mb-4'>
          Banyak resep untuk kamu coba, langsung saja pilih!
        </p>
      </div>
    </>
  );
}
