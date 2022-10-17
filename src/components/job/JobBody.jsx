export default function JobBody({ job }) {
  return (
    <div className='container md:px-[150px] lg:px-[280px] pb-[165px] text-primary-dark2'>
      <div className='flex flex-wrap gap-4 mb-10'>
        {['Fulltime', 'Intern'].includes(job.job_type) && (
          <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
            {job.job_type === 'Fulltime' ? 'Full-Time' : job.job_type}
          </div>
        )}
        {job.job_type === 'Remote' && (
          <>
            <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
              Full-Time
            </div>
            <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
              Remote Friendly
            </div>
          </>
        )}
      </div>
      <div className='mb-8'>
        <div className='font-semibold text-base mb-2'>Deskripsi Pekerjaan</div>
        <div>{job.description}</div>
      </div>
      <div className='rounded border border-secondary p-4 mb-8'>
        <div className='font-semibold text-xl mb-2'>Tertarik?</div>
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
