import AOS from 'aos';
import Link from 'next/link';
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Daftar() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Daftar' />
      <Header />
      <main>
        <section className='bg-cdark3'>
          <div
            className='layout flex h-[calc(100vh-122px)] flex-col items-center justify-center gap-4 text-center text-black'
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <form className='flex w-96 flex-col gap-4'>
              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='username'
                type='text'
                placeholder='Username'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='namaDepan'
                type='text'
                placeholder='Nama Depan'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='namaBelakang'
                type='text'
                placeholder='Nama Belakang'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='email'
                type='text'
                placeholder='Email'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='konfirmasiEmail'
                type='text'
                placeholder='Konfirmasi Email'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='password'
                type='text'
                placeholder='Password'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='konfirmasiPassword'
                type='text'
                placeholder='Konfirmasi Password'
              />

              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='password'
                type='password'
                placeholder='Password'
              />
              <Link href='/'>
                <button
                  className='focus:shadow-outline mt-4 w-full rounded bg-cred py-2 px-4 font-bold text-white hover:bg-cred2 focus:outline-none'
                  type='button'
                >
                  Daftar
                </button>
              </Link>
            </form>
            <div className='flex w-96 justify-center'>
              <Link className='text-clight hover:text-gray-200' href='/masuk'>
                Masuk
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
