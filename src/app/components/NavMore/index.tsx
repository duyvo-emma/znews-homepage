'use client';
import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { NavItem } from '../../types/common/header';
import { CloseIcon } from '../icons/Close';
import { ThreeDotsIcon } from '../icons/ThreeDots';
import styles from './index.module.scss';

interface NavMoreProps {
  extraNavItems: NavItem[];
  extraChannels: NavItem[];
}

const NavMore = ({ extraNavItems, extraChannels }: NavMoreProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setNavOpen(false));

  return (
    <div ref={containerRef}>
      <button
        aria-label={navOpen ? 'Close navigation' : 'Open more navigation'}
        className="!p-2 focus:outline-none flex items-center justify-center cursor-pointer"
        onClick={() => setNavOpen((open) => !open)}
        type="button"
      >
        {navOpen ? <CloseIcon /> : <ThreeDotsIcon />}
      </button>

      {navOpen && (
        <div
          id="nav-more"
          className={clsx(
            'absolute bottom-0 translate-y-full mt-2 left-0 right-0 text-white rounded shadow-lg z-50 bg-[#141329] transition-opacity duration-300',
            navOpen ? styles.navMore_fadeIn : styles.navMore_fadeOut,
            !navOpen && 'opacity-0'
          )}
        >
          <Container maxWidth="lg" className="flex flex-col gap-8 items-center !py-6">
            <ul className="p-2 mx-auto max-w-[865px] grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 w-full">
              {extraNavItems?.map((item) => (
                <li
                  key={item.id}
                  className={clsx('px-4 py-2 text-white font-bold', styles.navMore_item)}
                >
                  <a href={item.link}>{item.label}</a>
                </li>
              ))}
            </ul>
          </Container>
          <div className="bg-[#333240] w-full">
            <Container maxWidth="lg" className="flex flex-col gap-8 items-center">
              <ul className="flex flex-row items-center justify-between w-full !py-[18px]">
                {extraChannels?.map((item) => (
                  <li key={item.id} className="px-4 py-2 flex items-center gap-2">
                    <a href={item.link}>
                      <div className="min-h-4  h-auto w-auto">
                        <Image
                          src={item.image}
                          alt={item.label}
                          fill
                          className="w-full h-full object-contain !relative"
                        />
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMore;
