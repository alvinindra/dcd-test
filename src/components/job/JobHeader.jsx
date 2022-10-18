import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/base/Button';

export default function JobHeader({ job }) {
  return (
    <div className='pt-8'>
      <div className='container'>
        <div className='block mb-4'>
          <Link href='/' passHref>
            <a className='flex flex-row gap-x-2 w-[fit-content]'>
              <span className='text-primary-dark border-b border-b-primary-dark leading-4'>
                Semua daftar pekerjaan
              </span>
              <Image
                src='/icons/arrow-right-corner.svg'
                width={16}
                height={16}
                alt=''
              />
            </a>
          </Link>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='flex'>
            <div className='flex items-center mr-2'>
              <Image src={job.logo} width={96} height={96} alt={job.title} />
            </div>
            <div className='flex flex-col gap-2 text-primary-dark'>
              <div className='font-semibold text-base md:text-2xl'>
                {job.title} ({job.skills})
              </div>
              <div className='font-semibold text-sm'>
                Sektor Bisnis: {job.sector}
              </div>
              <div className='flex flex-nowrap gap-x-2 text-xs leading-4 items-center'>
                <Image src='/icons/company.svg' alt='' width={16} height={16} />
                <div>{job.company}</div>
                <Image
                  src='/icons/location.svg'
                  alt=''
                  width={16}
                  height={16}
                />
                <div>{job.location}</div>
                <Image src='/icons/users.svg' alt='' width={16} height={16} />
                <div>{job.employees.toLocaleString('id-ID')} Karyawan</div>
              </div>
            </div>
          </div>
          <div className='flex flex-row gap-4 mt-4 mx-auto md:mt-0 md:ml-auto md:mr-0 mb-auto text-right text-xs text-secondary-300'>
            <Button variant='secondary'>
              <Image src='/icons/share.svg' width={24} height={24} alt='' />
            </Button>
            <Button variant='secondary'>
              <Image src='/icons/wishlist.svg' width={24} height={24} alt='' />
            </Button>
            <Button>Kirim Lamaran</Button>
          </div>
        </div>
      </div>
      <div className='border border-b-0 border-secondary mt-[25px] mb-8'></div>
    </div>
  );
}
