import HomeListJobItem from '@/components/home/HomeListJobItem';

export default function HomeListJob() {
  return (
    <>
      <div className='grid grid-cols-[2fr,1fr] gap-x-[30px]'>
        <div className='relative'>
          <div className='text-2xl font-semibold text-primary-dark mb-6'>
            Daftar Pekerjaan Terbaru
          </div>
          <div className='flex flex-col gap-y-6'>
            {[...Array(8).keys()].map((indexKey) => (
              <HomeListJobItem key={indexKey} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
