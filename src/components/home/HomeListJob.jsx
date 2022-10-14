import HomeListJobItem from '@/components/home/HomeListJobItem';
import HomeListFilter from '@/components/home/HomeListFilter';

export default function HomeListJob() {
  return (
    <div className='bg-white h-min-screen rounded-t-3xl'>
      <div className='container pt-12 pb-10'>
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
          <div className='relative'>
            <HomeListFilter />
          </div>
        </div>
      </div>
    </div>
  );
}
