import type { NextPage } from 'next'
import Head from 'next/head';
import { Header } from '../../components/Landing/Header';
import { BeginContent } from '../../components/Landing/Content/BeginContent';
import { Footer } from '../../components/Landing/Footer';
import { RegisterContent } from '../../components/Landing/Content/RegisterContent';

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