import * as React from 'react';

export default function Jumbotron() {
  return (
    <>
      <div className="absolute z-[-1] h-[747px] w-full bg-[url('/images/HeroImage.png')] brightness-75"></div>
      <div
        className='layout flex h-[747px] flex-col items-center justify-center gap-1 bg-transparent text-center text-clight'
        data-aos='zoom-in'
        data-aos-duration='1000'
      >
        <h1>Pesan Makanan Pilihanmu</h1>
        <p className='mb-4'>
          Tidak ada waktu untuk memasak? Tinggal klik, masakan kami langsung
          tersedia di depan pintu anda
        </p>
      </div>
    </>
  );
}
