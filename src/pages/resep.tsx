import * as React from 'react';

import { semuaResep } from '@/data/Resep';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import CardContainer from '@/container/resepPage/CardContainer';
import Jumbotron from '@/container/resepPage/Jumbotron';

export default function resep() {
  return (
    <Layout>
      <Seo templateTitle='Resep' />
      <Header />
      <main>
        <Jumbotron />
        <CardContainer data={semuaResep} />
      </main>
      <Footer />
    </Layout>
  );
}
