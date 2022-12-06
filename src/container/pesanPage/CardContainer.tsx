/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useQuery } from 'react-query';

import Card1 from '@/components/card/Card1';

import { Pesan, PesanApi } from '@/types/pesan.type';

export default function CardContainer() {
  const { data: queryData } = useQuery<PesanApi, Error>('/api/foods');
  const [pesan, setPesan] = React.useState<Pesan[]>([]);
  const data = queryData?.data;
  const newDate = new Date();
  let date = newDate.getDate();

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

  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex flex-col gap-4 py-[70px]'>
        <h2 className='text-center' data-aos='fade-up' data-aos-duration='1000'>
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
  );
}
