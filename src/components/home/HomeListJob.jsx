import HomeListJobItem from '@/components/home/HomeListJobItem';
import HomeListFilter from '@/components/home/HomeListFilter';
import { useEffect, useState } from 'react';

export default function HomeListJob({ jobs: initialListJobs }) {
  const [listJobs, setListJobs] = useState(initialListJobs);
  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const lowercasedSearchInput = search.toLowerCase();
  const filteredListJobs = listJobs.filter((job) =>
    job.title.toLowerCase().includes(lowercasedSearchInput)
  );

  useEffect(() => {
    setListJobs(initialListJobs);
  }, [initialListJobs]);

  return (
    <div className='bg-white h-min-screen rounded-t-3xl'>
      <div className='container pt-6 md:pt-12 pb-10'>
        <div className='grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-x-[30px]'>
          <div className='relative'>
            <div className='text-lg md:text-2xl font-semibold text-primary-dark mb-4 md:mb-6'>
              Daftar Pekerjaan Terbaru
            </div>
            <div className='flex flex-col gap-y-6'>
              {filteredListJobs.length ? (
                filteredListJobs.map((job, indexKey) => (
                  <HomeListJobItem job={job} key={indexKey} />
                ))
              ) : (
                <div className='border border-secondary px-4 py-6 rounded-sm text-base text-primary-dark font-medium text-center'>
                  Maaf, Pekerjaan yang kamu cari tidak ditemukan
                </div>
              )}
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
