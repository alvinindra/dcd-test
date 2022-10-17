import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/layout/Navbar.module.scss';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const dropdownRef = useRef();
  const [dropdown, setDropdown] = useState(false);
  const [colorChange, setColorchange] = useState(false);

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
        colorChange ? styles['navbar--white'] : styles['navbar--black']
      )}
    >
      <div className={styles['navbar__container']}>
        <Link href='/' passHref>
          <a className='flex items-center'>
            <Image
              src={
                colorChange
                  ? '/images/dicoding-logo.svg'
                  : '/images/dicoding-logo-white.svg'
              }
              className='mr-3 h-6 sm:h-9'
              width={115}
              height={32}
              alt='Dicoding Logo'
            />
            <span className={styles['navbar__logoTitle']}>Jobs</span>
          </a>
        </Link>

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
                      colorChange
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
