import Image from 'next/image';
import Link from 'next/link';

export default function HomeListJobItem({ job }) {
  const showFormattedDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  return (
    <Link href={`/jobs/${parseInt(job.id)}`} passHref>
      <a className='flex border border-secondary rounded p-4'>
        <div className='flex flex-col md:flex-row w-full'>
          <div className='flex'>
            <div className='flex items-center mr-2'>
              <Image src={job.logo} width={96} height={96} alt={job.title} />
            </div>
            <div className='flex flex-col gap-2 text-primary-dark'>
              <div className='font-semibold text-sm md:text-base'>
                {job.title}
              </div>
              <div className='flex flex-nowrap gap-x-2 text-xs'>
                <Image src='/icons/company.svg' alt='' width={16} height={16} />
                <div>{job.company}</div>
                <div>
                  {job.job_type === 'Fulltime' ? 'Full-Time' : job.job_type}
                </div>
              </div>
              <div className='flex flex-nowrap items-center gap-x-2 text-xs'>
                <Image
                  src='/icons/location.svg'
                  alt=''
                  width={16}
                  height={16}
                />
                <div>{job.location}</div>
                <Image
                  src='/icons/job-black.svg'
                  alt=''
                  width={16}
                  height={16}
                />
                <div>
                  {job.experience ? '1-3 tahun pengalaman' : 'Freshgraduate'}
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1 md:gap-2 ml-auto mt-4 md:mt-0 text-right text-xs text-secondary-300'>
            <div>Dibuat pada {showFormattedDate(job.createdAt)}</div>
            <div>Lamar sebelum {showFormattedDate(job.closeAt)}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}
