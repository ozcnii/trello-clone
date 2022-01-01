import type { NextPage } from 'next'
import Head from 'next/head';

import { Header } from './Header';
import { RegisterContent } from './RegisterContent';
import { BeginContent } from './BeginContent';
import { Footer } from './Footer';

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trello</title>
      </Head>

      <div className='bg-gradient-to-r from-gray-200 to-gray-50 min-h-screen'>
        <Header />
        <RegisterContent />
        <BeginContent />
        <Footer />
      </div>
    </>
  )
}

export default Landing;