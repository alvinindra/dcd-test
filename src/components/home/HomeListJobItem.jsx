import Image from 'next/image';
import Link from 'next/link';

export default function HomeListJobItem() {
  return (
    <Link href='/jobs/1' passHref>
      <a className='flex border border-secondary rounded p-4'>
        <div className='flex items-center mr-2'>
          <Image
            src='/images/art-dicoding.png'
            width={96}
            height={96}
            alt='Job Title'
          />
        </div>
        <div className='flex flex-col gap-2 text-primary-dark'>
          <div className='font-semibold text-base'>
            Academy Code Reviewer (iOS)
          </div>
          <div className='flex flex-nowrap gap-x-2 text-xs'>
            <Image src='/icons/company.svg' alt='' width={16} height={16} />
            <div>Dicoding Indonesia</div>
            <div>Full-time</div>
          </div>
          <div className='flex flex-nowrap gap-x-2 text-xs'>
            <Image src='/icons/location.svg' alt='' width={16} height={16} />
            <div>Bandung</div>
            <div>Full-time</div>
            <Image src='/icons/job-black.svg' alt='' width={16} height={16} />
            <div>1-3 tahun pengalaman</div>
          </div>
        </div>
        <div className='flex flex-col gap-2 ml-auto text-right text-xs text-secondary-300'>
          <div>Dibuat pada 15 Juni 2022</div>
          <div>Lamar sebelum 15 Juli 2022</div>
        </div>
      </a>
    </Link>
  );
}
