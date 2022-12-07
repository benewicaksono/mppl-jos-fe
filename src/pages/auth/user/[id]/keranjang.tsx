import AOS from 'aos';
import Image from 'next/image';
import Router from 'next/router';
import * as React from 'react';
import { useEffect } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { GrCircleInformation } from 'react-icons/gr';
import { useQuery } from 'react-query';

import 'aos/dist/aos.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { Pesan, PesanApi } from '@/types/pesan.type';

export default function Keranjang() {
  const { data: queryData } = useQuery<PesanApi, Error>('/api/foods');
  const [pesan, setPesan] = React.useState<Pesan[]>([]);
  const data = queryData?.data;
  const newDate = new Date();
  let date = newDate.getDate();
  let qty = 0;

  if (date >= 8 && date <= 14) {
    date -= 7;
  } else if (date >= 15 && date <= 21) {
    date -= 14;
  } else if (date >= 22 && date <= 28) {
    date -= 21;
  } else if (date >= 29 && date <= 31) {
    date -= 28;
  }

  React.useEffect(() => {
    if (data) {
      setPesan(data);
    }
  }, [data]);

  useEffect(() => {
    AOS.init();
  }, []);

  function handleOnClick(url: string) {
    Router.push(url);
  }

  function handleQty() {
    qty += 1;
  }

  return (
    <Layout>
      <Seo templateTitle='Keranjang Belanja' />
      <Header />
      <main>
        <div className='min-h-[calc(100vh-122px)] bg-cdark2'>
          <div className='flex flex-col justify-between py-32'>
            {data ? (
              <>
                {pesan.map(({ id, name, url_thumb, desc_a, price }) => {
                  if (id == date.toString()) {
                    return (
                      <>
                        <div className='bg-cdark2'>
                          <div className='layout text-clight'>
                            <div className='mb-8 flex flex-col gap-8'>
                              <h1>Keranjang Belanja</h1>
                              <div className='flex gap-4 bg-cgray3 p-6'>
                                <div className='flex flex-col justify-center'>
                                  <GrCircleInformation className='text-2xl text-cdark' />
                                </div>
                                <h2 className='text-cdark'>Keranjang Anda</h2>
                              </div>
                              <div className='flex gap-6 rounded-md border-2 border-clight p-8'>
                                <div className='relative overflow-hidden'>
                                  <Image
                                    src={`${url_thumb}`}
                                    alt={`${name}`}
                                    width={198}
                                    height={198}
                                    className='transition-ease-in-out duration-100 hover:scale-125'
                                  />
                                </div>
                                <div className='flex flex-col gap-2'>
                                  <h3>{`${name}`}</h3>
                                  <p className='text-justify'>{`${desc_a}`}</p>
                                </div>
                                <div className='flex flex-col justify-center'>
                                  <input
                                    type='number'
                                    className='form-control relative m-0 max-h-12 w-20 flex-auto border-solid border-transparent bg-cgray3 bg-clip-padding px-3 py-1.5 text-base font-normal text-cdark transition ease-in-out focus:text-cdark focus:outline-none'
                                    placeholder=''
                                    aria-describedby='button-addon2'
                                    min='1'
                                    onChange={() => handleQty()}
                                  />
                                </div>
                                <div className='flex flex-col gap-2'>
                                  <h3>Harga Satuan</h3>
                                  <p className='text-justify'>{`Rp${price},00`}</p>
                                </div>
                                <button
                                  className='flex flex-col justify-center'
                                  onClick={() => {
                                    handleOnClick(`/pesan/${id}`);
                                  }}
                                >
                                  <FaRegTrashAlt className='cursor-pointer text-3xl text-cred hover:text-cred2' />
                                </button>
                              </div>
                            </div>
                            <button
                              className='btn flex w-full items-center justify-center rounded-md bg-cred px-6 py-4 text-center text-xs font-medium uppercase leading-tight text-white shadow-md transition  duration-150 ease-in-out hover:bg-cred2 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
                              type='button'
                              id='button-addon2'
                              onClick={() =>
                                handleOnClick(
                                  `https://api.whatsapp.com/send?phone=6281327304986&text=Halo%20saya%20mau%20order%20${name}%20sebanyak%20${qty}%20porsi.`
                                )
                              }
                            >
                              Hubungi Admin Whatsapp
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
