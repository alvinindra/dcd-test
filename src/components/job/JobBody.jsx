export default function JobBody() {
  return (
    <div className='container md:px-[150px] lg:px-[280px] pb-[165px]'>
      <div className='flex flex-wrap gap-4 mb-10'>
        <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
          Full-Time
        </div>
        <div className='py-2 px-4 rounded-[32px] border border-primary-blueborder bg-primary-bluebg text-primary-blue text-sm font-semibold'>
          Remote Friendly
        </div>
      </div>
      <div className='mb-8'>
        <div className='font-semibold text-base text-primary-dark mb-2'>
          Tentang Perusahaan
        </div>
        <div>
          Dicoding Academy adalah platform learning online yang ditujukan untuk
          para software developer di Indonesia. Kami selalu menawarkan kurikulum
          terbaik agar dapat mewujudkan mimpi menjadi developer hebat bagi
          seluruh developer di Indonesia. Kurikulum yang disusun memiliki
          standar industri global. Kami bekerja sama dengan perusahaan teknologi
          dunia seperti Google, Microsoft, AWS, IBM, dan Line dalam
          mengembangkan kelas dari tingkat pemula hingga profesional.
        </div>
      </div>
      <div className='mb-8'>
        <div className='font-semibold text-base text-primary-dark mb-2'>
          Deskripsi Pekerjaan
        </div>
        <div>
          Proses code review di Dicoding Academy mengacu pada praktik nyata yang
          dilakukan di industri pengembangan software. Siswa akan mendapatkan
          feedback secara langsung mengenai kode yang ditulis untuk sebuah tugas
          pada kelas yang dipelajari.
          <br /> <br />
          Sebagai Academy Code Reviewer, kamu akan berpartisipasi dalam proses
          belajar siswa di Dicoding Academy. Kamu akan mengarahkan siswa dalam
          menuliskan kode yang baik, efisien, dan sesuai dengan kaidah yang
          berlaku pada sebuah bahasa pemrograman atau platform tertentu.
        </div>
      </div>
      <div className='mb-8'>
        <div className='font-semibold text-base text-primary-dark mb-2'>
          Responsibilities
        </div>
        <div>
          <ul className='list-disc pl-5'>
            <li>
              Me-review submission (tugas) siswa dalam sebuah kelas sesuai
              target yang diberikan.
            </li>
            <li>
              Bekolaborasi dengan tim Academy dalam merancang submission (tugas)
              dari sebuah kelas.
            </li>
            <li>
              Berkontribusi pada project-project yang dikerjakan oleh tim
              Reviewer.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
