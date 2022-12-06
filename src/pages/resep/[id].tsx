import { useRouter } from 'next/router';
import * as React from 'react';
import { useQuery } from 'react-query';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnorderedList from '@/components/sections/Bahan-bahan';
import Jumbotron from '@/components/sections/Jumbotron';
import OrderedList from '@/components/sections/OrderedList';
import VideoSection from '@/components/sections/VideoSection';
import Seo from '@/components/Seo';
import FlexSection from '@/container/detailResepPage/FlexSection';

import { ResepApi } from '@/types/resep.type';

export default function DetailResep() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: queryData } = useQuery<ResepApi, Error>(`/api/foods/${id}`, {
    enabled: id !== undefined,
  });
  const data = queryData?.data;

  if (data) {
    return (
      <Layout>
        <Seo templateTitle={`${data.name}`} />
        <Header />
        <main>
          <Jumbotron
            title={`${data.name}`}
            desc={`${data.desc_a}`}
            imgUrl={`${data.url_thumb}`}
          />
          <FlexSection
            version={1}
            title={`${data.name}`}
            par={`${data.desc_b}`}
          />
          <div className='bg-cdark3'>
            <hr className='layout' />
          </div>
          <UnorderedList
            title='Bahan-bahan'
            par={[
              '350 g Jamur Merang',
              '3 sdm Kecap Manis',
              '1/4 sdt Merica Putih Bubuk',
              '1 sdm minyak',
              '1 lembar daun salam',
              '1/4 sdt garam',
              '100 ml air',
            ]}
          />
          <div className='bg-cdark3'>
            <div className='layout pb-12 text-center text-cred'>
              <h4>{`${data.cal} Calories`}</h4>
            </div>
          </div>
          <div className='bg-cdark3'>
            <hr className='layout' />
          </div>
          <OrderedList
            title='Langkah Pembuatan'
            par={[
              'Panaskan minyak, tumis bumbu halus dan daun salam hingga harum. Masukkan jamur, aduk rata.',
              'Tambahkan Bango Kecap Manis, garam, merica, dan air. Masak hingga matang.',
              'Tusuk jamur menggunakan tusuk sate. Bakar di atas pan sambil dioles sisa bumbu hingga matang dan kecokelatan.',
              'Sajikan.',
            ]}
          />
          <div className='bg-cdark3'>
            <hr className='layout' />
          </div>
          <VideoSection title='Video Pembuatan' videoUrl={`${data.url_vid}`} />
        </main>
        <Footer />
      </Layout>
    );
  }
}
