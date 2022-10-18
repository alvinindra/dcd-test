import HomeListJobItem from '@/components/home/HomeListJobItem';
import HomeListFilter from '@/components/home/HomeListFilter';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function HomeListJob({ jobs: initialListJobs }) {
  const [listJobs, setListJobs] = useState(initialListJobs);
  const [search, setSearch] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [listFilter, setListFilter] = useState({
    skills: [],
    jobTypes: [],
    city: [],
    experiences: [],
  });

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleChangeFilter = useCallback(
    (type) => (event) => {
      if (!event.target.checked) {
        setListFilter((prevValue) => {
          return {
            ...prevValue,
            [type]: [
              ...prevValue[type].filter(
                (value) => value !== event.target.value
              ),
            ],
          };
        });
      } else {
        setListFilter((prevValue) => {
          return {
            ...prevValue,
            [type]: [...prevValue[type], event.target.value],
          };
        });
      }
    },
    []
  );

  const lowercasedSearchInput = search.toLowerCase();

  const filteredListJobs = useMemo(
    () =>
      listJobs
        .filter((job) =>
          job.title.toLowerCase().includes(lowercasedSearchInput)
        )
        .filter(
          (job) =>
            listFilter.skills.length < 1 ||
            listFilter.skills.includes(job.skills)
        )
        .filter(
          (job) =>
            listFilter.jobTypes.length < 1 ||
            listFilter.jobTypes.includes(job.job_type)
        )
        .filter(
          (job) =>
            listFilter.city.length < 1 || listFilter.city.includes(job.city)
        )
        .filter((job) => {
          if (listFilter.experiences.length === 0) {
            return job.experience === false || job.experience === true;
          } else if (listFilter.experiences.includes('Freshgraduate')) {
            return job.experience === false;
          } else {
            return job.experience === true;
          }
        }),
    [listFilter, listJobs, lowercasedSearchInput]
  );

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

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
            <div
              className='flex md:hidden cursor-pointer text-sm py-2 px-4 border border-l-0 
              border-r-0 border-secondary bg-white z-20 sticky top-[64px] 
              font-semibold text-primary-dark mb-4 md:mb-6 -mx-4'
              onClick={handleShowFilter}
            >
              <div>Filter</div>
              <div className='ml-auto'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.6664 6.81675V2.50008C16.6664 2.27907 16.5786 2.06711 16.4224 1.91083C16.2661 1.75455 16.0541 1.66675 15.8331 1.66675C15.6121 1.66675 15.4001 1.75455 15.2438 1.91083C15.0876 2.06711 14.9998 2.27907 14.9998 2.50008V6.81675C14.5171 6.99192 14.1001 7.31144 13.8055 7.73189C13.5108 8.15233 13.3527 8.65332 13.3527 9.16675C13.3527 9.68018 13.5108 10.1812 13.8055 10.6016C14.1001 11.0221 14.5171 11.3416 14.9998 11.5167V17.5001C14.9998 17.7211 15.0876 17.9331 15.2438 18.0893C15.4001 18.2456 15.6121 18.3334 15.8331 18.3334C16.0541 18.3334 16.2661 18.2456 16.4224 18.0893C16.5786 17.9331 16.6664 17.7211 16.6664 17.5001V11.5167C17.1491 11.3416 17.566 11.0221 17.8607 10.6016C18.1554 10.1812 18.3135 9.68018 18.3135 9.16675C18.3135 8.65332 18.1554 8.15233 17.8607 7.73189C17.566 7.31144 17.1491 6.99192 16.6664 6.81675ZM15.8331 10.0001C15.6683 10.0001 15.5072 9.95121 15.3701 9.85964C15.2331 9.76807 15.1263 9.63792 15.0632 9.48565C15.0001 9.33338 14.9836 9.16582 15.0158 9.00417C15.0479 8.84252 15.1273 8.69404 15.2438 8.57749C15.3604 8.46095 15.5089 8.38158 15.6705 8.34943C15.8322 8.31727 15.9997 8.33378 16.152 8.39685C16.3043 8.45992 16.4344 8.56673 16.526 8.70377C16.6176 8.84081 16.6664 9.00193 16.6664 9.16675C16.6664 9.38776 16.5786 9.59972 16.4224 9.756C16.2661 9.91228 16.0541 10.0001 15.8331 10.0001ZM10.8331 11.8167V2.50008C10.8331 2.27907 10.7453 2.06711 10.589 1.91083C10.4327 1.75455 10.2208 1.66675 9.99977 1.66675C9.77875 1.66675 9.56679 1.75455 9.41051 1.91083C9.25423 2.06711 9.16643 2.27907 9.16643 2.50008V11.8167C8.68381 11.9919 8.26682 12.3114 7.97213 12.7319C7.67745 13.1523 7.51937 13.6533 7.51937 14.1667C7.51937 14.6802 7.67745 15.1812 7.97213 15.6016C8.26682 16.0221 8.68381 16.3416 9.16643 16.5167V17.5001C9.16643 17.7211 9.25423 17.9331 9.41051 18.0893C9.56679 18.2456 9.77875 18.3334 9.99977 18.3334C10.2208 18.3334 10.4327 18.2456 10.589 18.0893C10.7453 17.9331 10.8331 17.7211 10.8331 17.5001V16.5167C11.3157 16.3416 11.7327 16.0221 12.0274 15.6016C12.3221 15.1812 12.4802 14.6802 12.4802 14.1667C12.4802 13.6533 12.3221 13.1523 12.0274 12.7319C11.7327 12.3114 11.3157 11.9919 10.8331 11.8167ZM9.99977 15.0001C9.83495 15.0001 9.67383 14.9512 9.53679 14.8596C9.39975 14.7681 9.29294 14.6379 9.22987 14.4857C9.16679 14.3334 9.15029 14.1658 9.18244 14.0042C9.2146 13.8425 9.29397 13.694 9.41051 13.5775C9.52705 13.4609 9.67554 13.3816 9.83719 13.3494C9.99884 13.3173 10.1664 13.3338 10.3187 13.3968C10.4709 13.4599 10.6011 13.5667 10.6927 13.7038C10.7842 13.8408 10.8331 14.0019 10.8331 14.1667C10.8331 14.3878 10.7453 14.5997 10.589 14.756C10.4327 14.9123 10.2208 15.0001 9.99977 15.0001ZM4.99977 5.15008V2.50008C4.99977 2.27907 4.91197 2.06711 4.75569 1.91083C4.59941 1.75455 4.38745 1.66675 4.16643 1.66675C3.94542 1.66675 3.73346 1.75455 3.57718 1.91083C3.4209 2.06711 3.3331 2.27907 3.3331 2.50008V5.15008C2.85047 5.32525 2.43348 5.64477 2.1388 6.06522C1.84412 6.48567 1.68604 6.98665 1.68604 7.50008C1.68604 8.01351 1.84412 8.5145 2.1388 8.93494C2.43348 9.35539 2.85047 9.67491 3.3331 9.85008V17.5001C3.3331 17.7211 3.4209 17.9331 3.57718 18.0893C3.73346 18.2456 3.94542 18.3334 4.16643 18.3334C4.38745 18.3334 4.59941 18.2456 4.75569 18.0893C4.91197 17.9331 4.99977 17.7211 4.99977 17.5001V9.85008C5.48239 9.67491 5.89938 9.35539 6.19406 8.93494C6.48875 8.5145 6.64683 8.01351 6.64683 7.50008C6.64683 6.98665 6.48875 6.48567 6.19406 6.06522C5.89938 5.64477 5.48239 5.32525 4.99977 5.15008ZM4.16643 8.33342C4.00161 8.33342 3.8405 8.28454 3.70346 8.19297C3.56642 8.10141 3.45961 7.97126 3.39653 7.81898C3.33346 7.66671 3.31696 7.49916 3.34911 7.33751C3.38127 7.17586 3.46063 7.02737 3.57718 6.91083C3.69372 6.79428 3.84221 6.71491 4.00386 6.68276C4.16551 6.65061 4.33306 6.66711 4.48534 6.73018C4.63761 6.79325 4.76776 6.90006 4.85932 7.03711C4.95089 7.17415 4.99977 7.33526 4.99977 7.50008C4.99977 7.7211 4.91197 7.93306 4.75569 8.08934C4.59941 8.24562 4.38745 8.33342 4.16643 8.33342Z'
                    fill='#181818'
                  />
                </svg>
              </div>
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
            <HomeListFilter
              showFilter={showFilter}
              search={search}
              handleSearch={handleSearch}
              handleChangeFilter={handleChangeFilter}
              handleShowFilter={handleShowFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
