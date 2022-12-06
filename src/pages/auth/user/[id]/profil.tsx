/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */
import AOS from 'aos';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import 'aos/dist/aos.css';

import Input from '@/components/forms/Input';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

export default function Profil() {
  const router = useRouter();
  const methods = useForm();
  const user: any = useAuthStore((state) => state.user);

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
            <FormProvider {...methods}>
              <form className='flex w-96 flex-col gap-4'>
                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='username'
                  type='text'
                  placeholder={`${user?.username}`}
                  readOnly={true}
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='first_name'
                  type='text'
                  placeholder={`${user?.first_name}`}
                  readOnly={true}
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='last_name'
                  type='text'
                  placeholder={`${user?.last_name}`}
                  readOnly={true}
                />

                <Input
                  className='form-control relative m-0 block w-full min-w-0 flex-auto border-solid border-transparent bg-clight bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:bg-clight focus:text-cdark focus:outline-none'
                  id='email'
                  type='text'
                  placeholder={`${user?.email}`}
                  readOnly={true}
                />
              </form>
            </FormProvider>
          </div>
        </section>
      </main>
      <Footer />
    </Layout>
  );
}
