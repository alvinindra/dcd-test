function JobType({ children }) {
  return (
    <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
      {children}
    </div>
  );
}

export default function JobBody({ job }) {
  return (
    <div className='container md:px-[150px] lg:px-[280px] pb-14 md:pb-[165px] text-primary-dark2'>
      <div className='flex flex-wrap gap-4 mb-6 md:mb-10'>
        {['Fulltime', 'Intern'].includes(job.job_type) && (
          <JobType>
            {job.job_type === 'Fulltime' ? 'Full-Time' : job.job_type}
          </JobType>
        )}
        {job.job_type === 'Remote' && (
          <>
            <JobType>Full-Time</JobType>
            <JobType>Remote Friendly</JobType>
          </>
        )}
      </div>
      <div className='mb-8 text-sm md:text-base'>
        <div className='font-semibold mb-2'>Deskripsi Pekerjaan</div>
        <div>{job.description}</div>
      </div>
      <div className='rounded border text-sm md:text-base border-secondary p-4'>
        <div className='font-semibold text-lg md:text-xl mb-2'>Tertarik?</div>
        <div>
          <ul className='list-disc pl-5'>
            <li>Kirimkan CV dan Portofolio terbaik kamu.</li>
            <li>
              Ceritakan ke kami pengalaman apa saja yang kamu miliki. Tunjukan
              karya-karya kamu di bidang pemrograman atau pengembangan aplikasi.
            </li>
            <li>
              Buatlah sebuah artikel yang membahas tentang pemrograman atau
              teknologi yang sedang kamu minati.
              <ul className='list-disc pl-5'>
                <li>
                  Kamu dapat mencantumkan link ke artikel ini di inputan Cover
                  Letter ketika memasukkan lamaran untuk lowongan ini.
                </li>
              </ul>
            </li>
            <li>
              Berapa harapan gaji kamu bila bergabung dengan {job.title}?
              <ul className='list-disc pl-5'>
                <li>
                  Mohon untuk mencantumkan nilainya di inputan Cover Letter.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
