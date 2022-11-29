import * as React from 'react';

import JumboSearch from '@/components/searchbar/JumboSearch';

export default function Jumbotron() {
  return (
    <>
      <div className="absolute z-[-1] h-[747px] w-full bg-[url('/images/HeroImage.png')] brightness-75"></div>
      <div
        className='layout flex h-[747px] flex-col items-center justify-center gap-1 bg-transparent text-center text-clight'
        data-aos='zoom-in'
        data-aos-duration='1000'
      >
        <h1>VEGAN.in</h1>
        <h3>Solusi Sehat untuk Tubuh Kuat</h3>
        <p className='mb-4'>
          Siap untuk menjadi lebih sehat? Masukkan alamat email anda untuk
          memulai membership
        </p>
        <JumboSearch />
      </div>
    </>
  );
}
