/* eslint-disable unused-imports/no-unused-vars */
import AOS from 'aos';
import Link from 'next/link';
import router from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import toast from 'react-hot-toast';

import 'aos/dist/aos.css';

import axiosClient from '@/lib/axios';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { defaultToastMessage } from '@/constant/toast';

export default function Daftar() {
  const methods = useForm();
  const { handleSubmit } = methods;

  useEffect(() => {
    AOS.init();
  }, []);

  const handleRegis: SubmitHandler<FieldValues> = (data) => {
    toast.promise(
      axiosClient.post('/api/register', data).then((res) => {
        router.push('/masuk');
      }),

      {
        ...defaultToastMessage,
        success:
          'Berhasil melakukan pendaftaran akun, silakan masuk ke akun anda',
        error: 'Gagal melakukan pendaftaran akun',
      }
    );
  };

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
            <FormProvider {...methods}>
              <form
                className='flex w-96 flex-col gap-4'
                onSubmit={handleSubmit(handleRegis)}
              >
                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='username'
                  type='text'
                  placeholder='Username'
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='first_name'
                  type='text'
                  placeholder='Nama Depan'
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='last_name'
                  type='text'
                  placeholder='Nama Belakang'
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='email'
                  type='text'
                  placeholder='Email'
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='konfirmasiEmail'
                  type='text'
                  placeholder='Konfirmasi Email'
                />

                <PasswordInput
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='password'
                  type='text'
                  placeholder='Password'
                />

                <PasswordInput
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='konfirmasiPassword'
                  type='text'
                  placeholder='Konfirmasi Password'
                />
                <Button
                  className='focus:shadow-outline mt-4 w-full rounded bg-cred py-2 px-4 font-bold text-white hover:bg-cred2 focus:outline-none'
                  type='submit'
                >
                  Daftar
                </Button>
              </form>
            </FormProvider>
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
