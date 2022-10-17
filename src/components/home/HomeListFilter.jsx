import Image from 'next/image';

export default function HomeListFilter({ search, handleSearch }) {
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
        value: false,
      },
    ],
  };

  return (
    <>
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
          <div className='flex items-center font-semibold text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Keahlian
          </div>
          {listFilter.skills.map((skill, indexSkill) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexSkill}>
              <input
                id={skill.value}
                type='checkbox'
                value={skill.value}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={skill.value}
                className='ml-2 text-base text-primary-dark2'
              >
                {skill.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* JOB TYPES */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Tipe Pekerjaan
          </div>
          {listFilter.jobTypes.map((type, indexType) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexType}>
              <input
                id={type.value}
                type='checkbox'
                value={type.value}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={type.value}
                className='ml-2 text-base text-primary-dark2'
              >
                {type.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* CITY */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Kota
          </div>
          {listFilter.city.map((city, indexCity) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexCity}>
              <input
                id={city.value}
                type='checkbox'
                value={city.value}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={city.value}
                className='ml-2 text-base text-primary-dark2'
              >
                {city.name}
              </label>
            </div>
          ))}
        </div>
        <div className='border border-b-0 border-secondary mt-6 mb-4'></div>
        {/* EXPERIENCES */}
        <div className='flex flex-col'>
          <div className='flex items-center font-semibold text-xl text-primary-dark tracking-[-0.017em] mb-4'>
            Pengalaman
          </div>
          {listFilter.experiences.map((exp, indexExp) => (
            <div className='flex items-center mb-4 last:mb-0' key={indexExp}>
              <input
                id={exp.name}
                type='checkbox'
                value={exp.value}
                className='w-4 h-4 text-blue-600 bg-white rounded border-secondary focus:ring-primary-blue'
              />
              <label
                htmlFor={exp.name}
                className='ml-2 text-base text-primary-dark2'
              >
                {exp.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
