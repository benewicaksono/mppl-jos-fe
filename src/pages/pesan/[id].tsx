import { useRouter } from 'next/router';
import * as React from 'react';
import { useQuery } from 'react-query';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Jumbotron from '@/components/sections/Jumbotron';
import PesanPricePay from '@/components/sections/PesanPricePay';
import Seo from '@/components/Seo';
import FlexSection from '@/container/detailResepPage/FlexSection';

import { PesanApi } from '@/types/pesan.type';

export default function DetailPesan() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data: queryData } = useQuery<PesanApi, Error>(`/api/foods/${id}`, {
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
          <PesanPricePay cal={`${data.cal}`} price={`${data.price}`} />
        </main>
        <Footer />
      </Layout>
    );
  }
}
