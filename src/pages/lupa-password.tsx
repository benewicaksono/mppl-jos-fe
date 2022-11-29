import Link from 'next/link';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function lupaPassword() {
  return (
    <Layout>
      <Seo templateTitle='Lupa Password' />
      <Header />
      <main>
        <section className='bg-cdark3'>
          <div className='layout flex h-[calc(100vh-122px)] flex-col items-center justify-center gap-4 text-center text-clight'>
            <p className='mb-4 w-96 text-justify'>
              Silakan masukkan email yang anda gunakan pada akun VEGAN.in, kami
              akan mengirimkan link reset password pada email anda.
            </p>
            <form className='flex w-96 flex-col gap-4'>
              <input
                className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                id='email'
                type='text'
                placeholder='Email'
              />
              <button
                className='focus:shadow-outline mt-4 w-full rounded bg-cred py-2 px-4 font-bold text-white hover:bg-cred2 focus:outline-none'
                type='button'
              >
                Kirim
              </button>
            </form>
            <div className='flex w-96 justify-center'>
              <Link className='text-clight hover:text-gray-200' href='/masuk'>
                Kembali
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
