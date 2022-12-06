/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dialog, Transition } from '@headlessui/react';
import Router from 'next/router';
import * as React from 'react';
import { Fragment, useState } from 'react';

export default function PesanPricePay(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenVer, setIsOpenVer] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalVer() {
    setIsOpenVer(false);
  }

  function openModalVer() {
    setIsOpenVer(true);
  }

  function handleOnClick(url: string) {
    Router.push(url);
  }

  return (
    <>
      <Transition appear show={isOpenVer} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModalVer}>
          <Transition.Child
            as={Fragment}
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
                as={Fragment}
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
                    Verifikasi
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Apakah anda yakin ingin menambahkan masakan ke daftar
                      belanja?
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModalVer(), openModal();
                      }}
                    >
                      Ya
                    </button>
                    <button
                      type='button'
                      className='ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModalVer();
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
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
                as={Fragment}
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
                    Pesanan berhasil!
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      Makanan telah ditambahkan ke keranjang. Silakan cek
                      keranjang belanja anda.
                    </p>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={() => {
                        closeModal(),
                          handleOnClick(`/auth/user/${props.id}/keranjang`);
                      }}
                    >
                      Cek Keranjang Belanja
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <div className='bg-cdark3'>
        <div className='layout pb-[70px] text-center text-cred'>
          <h4>{`${props.cal} Calories`}</h4>
        </div>
      </div>
      <div className='bg-cdark3'>
        <hr className='layout' />
      </div>
      <div className='bg-cdark3'>
        <div className='layout flex flex-col gap-4 py-12 text-center text-clight'>
          <h4 className='text-2xl'>{`Rp${props.price},00`}</h4>
          <div className='flex justify-center'>
            <button
              className='btn flex w-min items-center rounded-md bg-cred px-12 py-4 text-center text-xs font-medium uppercase leading-tight text-white shadow-md  transition duration-150 ease-in-out hover:bg-cred2 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
              type='button'
              id='button-addon2'
              onClick={() => {
                openModalVer();
              }}
            >
              Pesan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
