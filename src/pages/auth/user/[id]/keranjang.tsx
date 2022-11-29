import AOS from 'aos';
import * as React from 'react';
import { useEffect } from 'react';

import 'aos/dist/aos.css';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import KeranjangItem from '@/container/auth/user/KeranjangItem';
import KeranjangRingkasan from '@/container/auth/user/KeranjangRingkasan';

export default function Keranjang() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Keranjang Belanja' />
      <Header />
      <main>
        <div className='min-h-[calc(100vh-122px)] bg-cdark2'>
          <div className='flex flex-col justify-between py-32'>
            <KeranjangItem />
            <KeranjangRingkasan />
          </div>
        </div>
      </main>
      <Footer />
    </Layout>
  );
}
