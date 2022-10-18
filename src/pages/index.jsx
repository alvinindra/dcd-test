import HomeHeader from '@/components/home/HomeHeader';
import HomeListJob from '@/components/home/HomeListJob';
import styles from '@/styles/Home.module.scss';
import Navbar from '@/components/layout/Navbar';
import Seo from '@/components/base/Seo';
import Footer from '@/components/layout/Footer';

export default function Home({ data }) {
  return (
    <>
      <Seo />

      <div className='bg-primary-dark'>
        <main className={styles.main}>
          <header>
            <Navbar />
          </header>
          <HomeHeader />
          <HomeListJob jobs={data} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const result = await fetch(process.env.baseApi + '/jobs', {
    headers: {
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const data = await result.json();

  return {
    props: { data },
  };
};
