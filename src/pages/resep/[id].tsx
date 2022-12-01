import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnorderedList from '@/components/sections/Bahan-bahan';
import Jumbotron from '@/components/sections/Jumbotron';
import OrderedList from '@/components/sections/OrderedList';
import VideoSection from '@/components/sections/VideoSection';
import Seo from '@/components/Seo';
import FlexSection from '@/container/detailResepPage/FlexSection';

export default function DetailResep() {
  return (
    <Layout>
      <Seo templateTitle='Resep' />
      <Header />
      <main>
        <Jumbotron
          title='Sate Jamur'
          desc='Sate jamur, gurih manis berpadu untuk mengisi waktu sore sembari
          menikmati teh hangat'
          imgUrl='/images/SateJamur.jpg'
        />
        <FlexSection
          version={1}
          title='Sate Jamur'
          par='Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate. Sesuai namanya, sate jamur menggunakan bahan dasar jamur sebagai paengganti daging
          '
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
            <h4>416 Calories</h4>
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
        <VideoSection
          title='Video Pembuatan'
          videoUrl='https://www.youtube.com/embed/JpTqSzm4JOk'
        />
      </main>
      <Footer />
    </Layout>
  );
}
