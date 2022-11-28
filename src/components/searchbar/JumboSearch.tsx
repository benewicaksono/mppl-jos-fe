import * as React from 'react';

export default function JumboSearch() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex items-stretch '>
        <input
          type='search'
          className='form-control relative m-0 block w-96 min-w-0 flex-auto border-solid border-transparent bg-cdark2 bg-clip-padding px-4 py-4 text-base font-normal text-gray-700 transition ease-in-out focus:bg-cdark2 focus:text-clight focus:outline-none'
          placeholder='Alamat Email'
          aria-label='Search'
          aria-describedby='button-addon2'
        />
        <button
          className='btn flex items-center bg-cred px-6 py-2 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150  ease-in-out hover:bg-cred2 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg'
          type='button'
          id='button-addon2'
        >
          Mulai Sekarang
        </button>
      </div>
    </div>
  );
}
