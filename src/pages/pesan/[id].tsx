import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Jumbotron from '@/components/sections/Jumbotron';
import PesanPricePay from '@/components/sections/PesanPricePay';
import Seo from '@/components/Seo';
import FlexSection from '@/container/detailResepPage/FlexSection';

export default function DetailPesan() {
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
        <PesanPricePay />
      </main>
      <Footer />
    </Layout>
  );
}
