import AOS from 'aos';
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CardContainer from '@/container/resepPage/CardContainer';
import Jumbotron from '@/container/resepPage/Jumbotron';

export default function Resep() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Katalog Resep' />
      <Header />
      <main>
        <Jumbotron />
        <CardContainer />
      </main>
      <Footer />
    </Layout>
  );
}
