/* eslint-disable react/jsx-key */
import { Dialog, Transition } from '@headlessui/react';
import Router from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import Card1 from '@/components/card/Card1';

import { Pesan, PesanApi } from '@/types/pesan.type';

export default function CardContainer() {
  const { data: queryData } = useQuery<PesanApi, Error>('/api/foods');
  const [pesan, setPesan] = React.useState<Pesan[]>([]);
  const data = queryData?.data;
  const newDate = new Date();
  let date = newDate.getDate();
  const [isOpen, setIsOpen] = useState(true);

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

  function closeModal() {
    setIsOpen(false);
  }

  function handleOnClick(url: string) {
    Router.push(url);
  }

  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Verifikasi Lokasi
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Fitur pesan masakan hanya tersedia untuk lokasi Surabaya
                      saja. Apakah anda berlokasi di Surabaya?
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Ya
                    </button>
                    <button
                      type='button'
                      className='ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        handleOnClick('/');
                      }}
                    >
                      Tidak
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='bg-cdark3 text-clight'>
        <div className='layout flex flex-col gap-4 py-[70px]'>
          <h2
            className='text-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Menu Masakan
          </h2>
          <p
            className='mb-4 text-center'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            Menu masakan berbeda setiap harinya.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {data ? (
              <>
                {pesan.map(({ id, name, url_thumb, desc_a, price }) => {
                  if (id == date.toString()) {
                    return (
                      <Card1
                        jenis='pesan'
                        id={id}
                        imgUrl={`${url_thumb}`}
                        title={name}
                        desc={desc_a}
                        price={price}
                      />
                    );
                  }
                })}
              </>
            ) : (
              <h1 className='text-center text-2xl'>
                Tidak ada makananan untuk saat ini <br />
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
