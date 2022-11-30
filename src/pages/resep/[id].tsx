import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import FlexSection from '@/container/detailResepPage/FlexSection';
import Jumbotron from '@/container/detailResepPage/Jumbotron';

export default function resep() {
  return (
    <Layout>
      <Seo templateTitle='Resep' />
      <Header />
      <main>
        <Jumbotron />
        <FlexSection
          version={1}
          title='Sate Jamur'
          par='Sate atau satai adalah makanan yang terbuat dari daging yang dipotong kecil-kecil dan ditusuk sedemikian rupa dengan tusukan lidi tulang daun kelapa atau bambu, kemudian dipanggang menggunakan bara arang kayu. Sate disajikan dengan berbagai macam bumbu yang bergantung pada variasi resep sate. Sesuai namanya, sate jamur menggunakan bahan dasar jamur sebagai paengganti daging
          '
        />
        <FlexSection version={2} title='Bahan-bahan' />
        <FlexSection version={3} title='Video Pembuatan' />
      </main>
      <Footer />
    </Layout>
  );
}
