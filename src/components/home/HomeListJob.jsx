import HomeListJobItem from '@/components/home/HomeListJobItem';
import HomeListFilter from '@/components/home/HomeListFilter';
import { useEffect, useState } from 'react';

export default function HomeListJob({ jobs: initialListJobs }) {
  const [listJobs, setListJobs] = useState(initialListJobs);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    setListJobs(initialListJobs);
  }, [initialListJobs]);

  return (
    <div className='bg-white h-min-screen rounded-t-3xl'>
      <div className='container pt-12 pb-10'>
        <div className='grid grid-cols-[2fr,1fr] gap-x-[30px]'>
          <div className='relative'>
            <div className='text-2xl font-semibold text-primary-dark mb-6'>
              Daftar Pekerjaan Terbaru
            </div>
            <div className='flex flex-col gap-y-6'>
              {listJobs &&
                listJobs.map((job, indexKey) => (
                  <HomeListJobItem job={job} key={indexKey} />
                ))}
            </div>
          </div>
          <div className='relative'>
            <HomeListFilter search={search} handleSearch={handleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}
