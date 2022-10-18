import clsx from 'clsx';
import Image from 'next/image';

export default function HomeListFilter({
  showFilter,
  search,
  handleSearch,
  handleChangeFilter,
  handleShowFilter,
}) {
  const listFilter = {
    skills: [
      {
        name: 'Back-End Developer',
        value: 'Backend Developer',
      },
      {
        name: 'Front-End Developer',
        value: 'Frontend Developer',
      },
      {
        name: 'Product Manager',
        value: 'Product Manager',
      },
      {
        name: 'Product Designer',
        value: 'Product Designer',
      },
      {
        name: 'iOS Developer',
        value: 'iOS Developer',
      },
      {
        name: 'Android Developer',
        value: 'Android Developer',
      },
      {
        name: 'Fullstack Developer',
        value: 'Fullstack Developer',
      },
    ],
    jobTypes: [
      {
        name: 'Full-Time',
        value: 'Fulltime',
      },
      {
        name: 'Freelance',
        value: 'Freelance',
      },
      {
        name: 'Intern',
        value: 'Intern',
      },
    ],
    city: [
      {
        name: 'Bisa Remote',
        value: 'Remote',
      },
      {
        name: 'Bandung',
        value: 'Bandung',
      },
      {
        name: 'Jakarta',
        value: 'Jakarta',
      },
      {
        name: 'Yogyakarta',
        value: 'Yogyakarta',
      },
    ],
    experiences: [
      {
        name: 'Freshgraduate',
        value: false,
      },
      {
        name: '1-3 tahun',
        value: true,
      },
      {
        name: '3-5 tahun',
        value: true,
      },
      {
        name: '5-10 tahun',
        value: true,
      },
      {
        name: 'Lebih dari 10 tahun',
        value: true,
      },
    ],
  };

  return (
    <div
      className={clsx(
        showFilter ? 'block' : 'hidden',
        'fixed top-0 z-50 bg-white overflow-x-hidden left-0 overflow-y-auto',
        'h-full pt-16 px-4 pb-4 md:p-0 md:relative md:block w-full'
      )}
    >
      <div className='flex md:hidden flex-row items-center justify-end fixed z-[1002] top-0 left-0 px-8 w-full bg-white border-b'>
        <div className='text-primary-dark mr-auto font-semibold'>Filter</div>
        <div className='cursor-pointer' onClick={handleShowFilter}>
          <svg
            width='48'
            height='48'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.0976 14.0005L20.7708 8.33299C20.9173 8.18637 20.9995 7.98761 20.9993 7.78044C20.9991 7.57327 20.9166 7.37466 20.7698 7.2283C20.623 7.08194 20.4241 6.99982 20.2167 7C20.0093 7.00018 19.8105 7.08266 19.664 7.22928L13.9908 12.8968L8.3196 7.22928C8.172 7.08885 7.97529 7.01163 7.77147 7.01411C7.56765 7.01659 7.37288 7.09858 7.22875 7.24257C7.08461 7.38656 7.00254 7.58113 7.00006 7.78475C6.99757 7.98836 7.07487 8.18488 7.21545 8.33233L12.8886 13.9998L7.21545 19.6653C7.07487 19.8128 6.99757 20.0093 7.00006 20.2129C7.00254 20.4165 7.08461 20.6111 7.22875 20.7551C7.37288 20.8991 7.56765 20.9811 7.77147 20.9836C7.97529 20.986 8.172 20.9088 8.3196 20.7684L13.9928 15.1009L19.664 20.771C19.8108 20.9176 20.0098 21 20.2174 21C20.4249 21 20.624 20.9176 20.7708 20.771C20.9175 20.6244 21 20.4255 21 20.2182C21 20.0108 20.9175 19.812 20.7708 19.6653L15.0976 14.0005Z'
              fill='#18181b'
            />
          </svg>
        </div>
      </div>
      <form className='flex items-center mb-[14px]'>
        <div className='relative w-full'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none'>
            <Image src='/icons/search.svg' width={16} height={16} alt='' />
          </div>
          <input
            type='text'
            id='job-search'
            className='bg-white border border-secondary text-primary-dark placeholder:text-primary-dark2 focus:text-primary-dark text-sm rounded focus:ring-primary-blue focus:border-primary-blue block w-full pl-10 px-6 py-4 '
            placeholder='Pekerjaan apa yang sedang Anda cari?'
            value={search}
            onChange={handleSearch}
          />
        </div>
      </form>
      <div className='flex flex-col rounded-lg border-secondary border-solid border p-4'>
        {/* SKILLS */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-lg md:text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Keahlian
          </div>
          {listFilter.skills.map((skill, indexSkill) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexSkill}>
              <input
                id={skill.value}
                type='checkbox'
                value={skill.value}
                name='skills'
                onChange={handleChangeFilter('skills')}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={skill.value}
                className='ml-2 text-sm md:text-base text-primary-dark2'
              >
                {skill.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* JOB TYPES */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-lg md:text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Tipe Pekerjaan
          </div>
          {listFilter.jobTypes.map((type, indexType) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexType}>
              <input
                id={type.value}
                type='checkbox'
                value={type.value}
                name='jobTypes'
                onChange={handleChangeFilter('jobTypes')}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={type.value}
                className='ml-2 text-sm md:text-base text-primary-dark2'
              >
                {type.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* CITY */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-lg md:text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Kota
          </div>
          {listFilter.city.map((city, indexCity) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexCity}>
              <input
                id={city.value}
                type='checkbox'
                value={city.value}
                name='city'
                onChange={handleChangeFilter('city')}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={city.value}
                className='ml-2 text-sm md:text-base text-primary-dark2'
              >
                {city.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* EXPERIENCES */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-lg md:text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Pengalaman
          </div>
          {listFilter.experiences.map((exp, indexExp) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexExp}>
              <input
                id={exp.name}
                type='checkbox'
                value={exp.name}
                name='experiences'
                onChange={handleChangeFilter('experiences')}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={exp.name}
                className='ml-2 text-sm md:text-base text-primary-dark2'
              >
                {exp.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
