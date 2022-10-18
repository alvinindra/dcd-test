import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/layout/Navbar.module.scss';
import { useState, useEffect, useRef } from 'react';

export default function Navbar({ white }) {
  const dropdownRef = useRef();
  const [navbarMenu, setNavbarMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const handleNavbarMenu = () => {
    setNavbarMenu(!navbarMenu);
  };

  const handleToggleDropdown = (e) => {
    if (dropdownRef.current.contains(e.target)) {
      return;
    }

    setDropdown(false);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
  });

  useEffect(() => {
    document.addEventListener('mousedown', handleToggleDropdown);

    return () => {
      document.removeEventListener('mousedown', handleToggleDropdown);
    };
  });

  return (
    <nav
      className={clsx(
        styles.navbar,
        colorChange ? styles['navbar--white'] : styles['navbar--black'],
        white ? styles['navbar--white'] : ''
      )}
    >
      <div className={styles['navbar__container']}>
        <Link href='/' passHref>
          <a className='flex items-center ml-4 md:ml-0'>
            <Image
              src={
                colorChange || white
                  ? '/images/dicoding-logo.svg'
                  : '/images/dicoding-logo-white.svg'
              }
              width={115}
              height={32}
              alt='Dicoding Logo'
            />
            <span className={styles['navbar__logoTitle']}>Jobs</span>
          </a>
        </Link>
        <div className='flex md:hidden ml-auto'>
          <ul>
            <li>
              <div className='flex'>
                <div
                  ref={dropdownRef}
                  className='flex items-center cursor-pointer h-12'
                  onClick={(e) => setDropdown(!dropdown)}
                >
                  <div className='flex rounded-full border-primary-blue border-solid border-2'>
                    <Image
                      width={28}
                      height={28}
                      src='/images/photo-profile.png'
                      alt='Alvin Indra Pratama'
                    />
                  </div>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.70709 6.09761L7.90235 8.29287L10.0976 6.09761L11.0404 7.04042L8.37376 9.70708C8.11341 9.96743 7.6913 9.96743 7.43095 9.70708L4.76428 7.04042L5.70709 6.09761Z'
                      fill='#71717A'
                    />
                  </svg>
                </div>
                <div
                  className={clsx(
                    dropdown ? 'block' : 'hidden',
                    'absolute top-[55px] right-12 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow'
                  )}
                >
                  <div className='py-3 px-4 text-sm text-primary-dark'>
                    <div>Alvin Indra Pratama</div>
                  </div>
                  <ul
                    className='py-1 text-sm text-primary-dark'
                    aria-labelledby='dropdownInformationButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Pengaturan
                      </a>
                    </li>
                  </ul>
                  <div className='py-1'>
                    <a
                      href='#'
                      className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Log out
                    </a>
                  </div>
                </div>
                <a href='#' className='flex items-center py-1 px-2'>
                  <Image
                    src={
                      colorChange || white
                        ? '/icons/notification-black.svg'
                        : '/icons/notification.svg'
                    }
                    width={24}
                    height={24}
                    alt=''
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div
          className='flex md:hidden mr-4 md:mr-0 p-2 cursor-pointer'
          onClick={handleNavbarMenu}
        >
          <svg
            width='20'
            height='15'
            viewBox='0 0 20 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM0 7.032C0 6.76678 0.105357 6.51243 0.292893 6.32489C0.48043 6.13736 0.734784 6.032 1 6.032H19C19.2652 6.032 19.5196 6.13736 19.7071 6.32489C19.8946 6.51243 20 6.76678 20 7.032C20 7.29722 19.8946 7.55157 19.7071 7.73911C19.5196 7.92664 19.2652 8.032 19 8.032H1C0.734784 8.032 0.48043 7.92664 0.292893 7.73911C0.105357 7.55157 0 7.29722 0 7.032ZM1 12.064C0.734784 12.064 0.48043 12.1694 0.292893 12.3569C0.105357 12.5444 0 12.7988 0 13.064C0 13.3292 0.105357 13.5836 0.292893 13.7711C0.48043 13.9586 0.734784 14.064 1 14.064H19C19.2652 14.064 19.5196 13.9586 19.7071 13.7711C19.8946 13.5836 20 13.3292 20 13.064C20 12.7988 19.8946 12.5444 19.7071 12.3569C19.5196 12.1694 19.2652 12.064 19 12.064H1Z'
              fill={colorChange || white ? '#18181b' : 'white'}
            />
          </svg>
        </div>
        {navbarMenu && (
          <div className='md:hidden items-center w-full md:w-auto mt-4 mx-4'>
            <ul
              className={clsx(
                styles['navbar__link'],
                'flex flex-col gap-y-2 !border-0 !mt-0 !px-0'
              )}
            >
              <li>
                <div className='relative w-full'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none'>
                    <Image src='/icons/job.svg' width={20} height={20} alt='' />
                  </div>
                  <select
                    id='select-interview'
                    className={styles['navbar__interview']}
                  >
                    <option className='text-black' value='DEFAULT' disabled>
                      Pilih status
                    </option>
                    <option className='text-black' value='ready'>
                      Siap untuk di-interview
                    </option>
                    <option className='text-black' value='not-ready'>
                      Belum siap di-interview
                    </option>
                  </select>
                </div>
              </li>
              <li>
                <a href='#' className='py-1 px-2' aria-current='page'>
                  Looking for job
                </a>
              </li>
              <li>
                <a href='#' className='py-1 px-2'>
                  Hiring
                </a>
              </li>
            </ul>
          </div>
        )}
        <div className='hidden items-center w-full md:flex md:w-auto'>
          <div className='relative flex ml-4 w-0.5 h-2 bg-secondary'></div>
          <ul className={styles['navbar__link']}>
            <li>
              <a href='#' className='py-1 px-2' aria-current='page'>
                Looking for job
              </a>
            </li>
            <li>
              <a href='#' className='py-1 px-2'>
                Hiring
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden ml-auto w-full md:flex md:w-auto'>
          <ul className='flex flex-col items-center py-[11px] mt-4 rounded-lg border md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 text-white'>
            <li>
              <div className='relative w-full'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-4 pointer-events-none'>
                  <Image src='/icons/job.svg' width={20} height={20} alt='' />
                </div>
                <select
                  id='select-interview'
                  className={styles['navbar__interview']}
                >
                  <option className='text-black' value='DEFAULT' disabled>
                    Pilih status
                  </option>
                  <option className='text-black' value='ready'>
                    Siap untuk di-interview
                  </option>
                  <option className='text-black' value='not-ready'>
                    Belum siap di-interview
                  </option>
                </select>
              </div>
            </li>
            <li>
              <div className='flex'>
                <div
                  ref={dropdownRef}
                  className='flex items-center cursor-pointer h-12'
                  onClick={(e) => setDropdown(!dropdown)}
                >
                  <div className='flex rounded-full border-primary-blue border-solid border-2'>
                    <Image
                      width={28}
                      height={28}
                      src='/images/photo-profile.png'
                      alt='Alvin Indra Pratama'
                    />
                  </div>
                  <svg
                    className='ml-2'
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5.70709 6.09761L7.90235 8.29287L10.0976 6.09761L11.0404 7.04042L8.37376 9.70708C8.11341 9.96743 7.6913 9.96743 7.43095 9.70708L4.76428 7.04042L5.70709 6.09761Z'
                      fill='#71717A'
                    />
                  </svg>
                </div>
                <div
                  className={clsx(
                    dropdown ? 'block' : 'hidden',
                    'absolute top-[55px] z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow'
                  )}
                >
                  <div className='py-3 px-4 text-sm text-primary-dark'>
                    <div>Alvin Indra Pratama</div>
                  </div>
                  <ul
                    className='py-1 text-sm text-primary-dark'
                    aria-labelledby='dropdownInformationButton'
                  >
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href='#'
                        className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      >
                        Pengaturan
                      </a>
                    </li>
                  </ul>
                  <div className='py-1'>
                    <a
                      href='#'
                      className='block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
                    >
                      Log out
                    </a>
                  </div>
                </div>
                <a href='#' className='flex items-center ml-5 py-1 px-2'>
                  <Image
                    src={
                      colorChange || white
                        ? '/icons/notification-black.svg'
                        : '/icons/notification.svg'
                    }
                    width={24}
                    height={24}
                    alt=''
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
