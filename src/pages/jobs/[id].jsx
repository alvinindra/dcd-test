import styles from '@/styles/Home.module.scss';
import Navbar from '@/components/layout/Navbar';
import Seo from '@/components/base/Seo';
import JobHeader from '@/components/job/JobHeader';
import JobBody from '@/components/job/JobBody';
import Footer from '@/components/layout/Footer';

export default function Home({ data }) {
  return (
    <>
      <Seo title={data.title + ' - Dicoding Jobs'} />

      <div className='bg-white'>
        <main className={styles.main}>
          <header>
            <Navbar white={true} />
          </header>
          <JobHeader job={data} />
          <JobBody job={data} />
          <Footer />
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const result = await fetch(process.env.baseApi + '/jobs/' + id, {
    headers: {
      Accept: 'application/json',
      'User-Agent': '*',
    },
  });
  const data = await result.json();

  if (data === 'Something went wrong while parsing response JSON') {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
};
