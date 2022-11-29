import AOS from 'aos';
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import { resepFavorit } from '@/data/Resep';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CardContainer3 from '@/container/homePage/CardContainer3';
import FlexSection from '@/container/homePage/FlexSection';
import Jumbotron from '@/container/homePage/Jumbotron';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Seo />
      <Header />
      <main>
        <Jumbotron />
        <FlexSection
          version={1}
          title='Resep Masakan'
          par='Menyediakan berbagai variasi resep masakan vegan untuk Anda berkreasi di kenyamanan dapur rumah.'
          imgUrl='/images/Frame7.png'
        />
        <FlexSection
          version={2}
          title='Katering Makanan'
          par='Solusi mudah untuk Anda yang tidak mempunyai waktu memasak.'
          imgUrl='/images/Frame6.png'
        />
        <CardContainer3 data={resepFavorit} />
      </main>
      <Footer />
    </Layout>
  );
}
