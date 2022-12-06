/* eslint-disable react/jsx-key */
import * as React from 'react';
import { useQuery } from 'react-query';

import Card1 from '@/components/card/Card1';

import { Resep, ResepApi } from '@/types/resep.type';

export default function CardContainer() {
  const { data: queryData } = useQuery<ResepApi, Error>('/api/foods');
  const [resep, setResep] = React.useState<Resep[]>([]);
  const data = queryData?.data;

  React.useEffect(() => {
    if (data) {
      setResep(data);
    }
  }, [data]);

  return (
    <div className='bg-cdark3 text-clight'>
      <div className='layout flex flex-col gap-4 py-[70px]'>
        <h2 className='text-center' data-aos='fade-up' data-aos-duration='1000'>
          Daftar Resep
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {data ? (
            <>
              {resep.map(({ id, name, url_thumb, desc_a }) => {
                return (
                  <Card1
                    jenis='resep'
                    id={id}
                    imgUrl={`${url_thumb}`}
                    title={name}
                    desc={desc_a}
                  />
                );
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
