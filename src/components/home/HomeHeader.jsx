import Image from 'next/image';
import styles from '@/styles/home/HomeHeader.module.css';
import clsx from 'clsx';

export default function HomeHeader() {
  return (
    <div className={clsx('container py-12', styles.sectionHeader)}>
      <div className='text-xl text-primary-blue mb-4'>Dicoding Jobs</div>
      <div className='relative text-white font-semibold w-[fit-content]'>
        <div className='text-2xl md:text-[40px] md:leading-[61px]'>
          Temukan lowongan yang <br />
          cocok untuk Anda
        </div>
        <div className='relative mt-4 md:mt-0 md:absolute md:-bottom-2 md:-right-24'>
          <Image
            src='/images/art-header-home.png'
            width={203}
            height={61}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}
