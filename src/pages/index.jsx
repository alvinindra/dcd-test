import Head from 'next/head';
import Image from 'next/image';
import HomeHeader from '@/components/home/HomeHeader';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/layout/Navbar';
import Seo from '@/components/base/Seo';

export default function Home() {
  return (
    <>
      <Seo />

      <div className='bg-primary-dark'>
        <Head>
          <title>Dicoding Jobs</title>
          <meta name='description' content='Generated by create next app' />
        </Head>

        <main className={styles.main}>
          <header>
            <Navbar />
          </header>
          <HomeHeader />
          <div className='bg-white h-screen'>
            <h1 className={styles.title}>
              Welcome to <a href='https://nextjs.org'>Next.js!</a>
            </h1>
          </div>
        </main>
      </div>
    </>
  );
}
