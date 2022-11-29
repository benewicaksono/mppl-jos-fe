import AOS from 'aos';
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import { semuaKatering } from '@/data/Katering';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CardContainer from '@/container/kateringPage/CardContainer';
import Jumbotron from '@/container/kateringPage/Jumbotron';

export default function Katering() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Katalog Katering' />
      <Header />
      <main>
        <Jumbotron />
        <CardContainer data={semuaKatering} />
      </main>
      <Footer />
    </Layout>
  );
}
