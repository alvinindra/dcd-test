import Image from 'next/image';

export default function Footer() {
  const listSocialMedia = [
    {
      name: 'Instagram',
      icon: '/icons/social-media/instagram.svg',
      url: 'https://www.instagram.com/dicoding/',
    },
    {
      name: 'Youtube',
      icon: '/icons/social-media/youtube.svg',
      url: 'https://www.youtube.com/channel/UCM6BWkgiGrCHG967i_PyMiw',
    },
    {
      name: 'Twitter',
      icon: '/icons/social-media/twitter.svg',
      url: 'https://twitter.com/dicoding',
    },
    {
      name: 'Facebook',
      icon: '/icons/social-media/facebook.svg',
      url: 'https://www.facebook.com/dicoding',
    },
  ];
  return (
    <footer className='bg-white'>
      <div className='container'>
        <div className='border border-b-0 border-secondary'></div>
        <div className='pt-16 pb-32 bg-white'>
          <div className='mb-8'>
            <Image
              src='/images/dicoding-logo.png'
              width={138}
              height={34}
              alt='Dicoding Logo'
            />
          </div>
          <p className='text-lg text-secondary-100'>
            Dicoding Space <br />
            Jl. Batik Kumeli No.50, Sukaluyu, <br />
            Kec. Cibeunying Kaler, Kota Bandung Jawa Barat 40123
          </p>
          <div className='border border-b-0 border-secondary mt-12 mb-8'></div>
          <div className='flex flex-row'>
            <div className='text-base font-semibold'>
              Decode ideas Discover Potential
            </div>
            <div className='flex flex-row space-x-8 ml-[59px]'>
              {listSocialMedia.map((socmed, indexSocmed) => (
                <a
                  href={socmed.url}
                  target='_blank'
                  key={indexSocmed}
                  rel='noreferrer'
                >
                  <Image
                    src={socmed.icon}
                    width={24}
                    height={24}
                    alt={socmed.name}
                  />
                </a>
              ))}
            </div>
            <div className='flex flex-row ml-auto mr-2 text-base text-secondary-50 items-center'>
              <div className='flex items-center mr-2'>
                <Image
                  src='/icons/copyright-circle-outlined.svg'
                  width={16}
                  height={16}
                  alt=''
                />
              </div>
              <div className='mr-[45px]'>
                Dicoding Indonesia {new Date().getFullYear()}
              </div>
              <a
                href='https://www.dicoding.com/termsofuse'
                target='_blank'
                rel='noreferrer'
              >
                Term
              </a>
              <div className='bg-secondary-50 w-1 h-1 rounded-full mx-4'></div>
              <a
                href='https://www.dicoding.com/privacy'
                target='_blank'
                rel='noreferrer'
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
