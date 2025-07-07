'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import usePreventScroll from '../../hooks/usePreventScroll';
import { Footer } from '../../types/common/footer';
import { NavItem } from '../../types/common/header';
import { BurgerIcon } from '../icons/Burger';
import { CloseIcon } from '../icons/Close';

export const MobileMenu = ({ data, footerData }: { data: NavItem[]; footerData: Footer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { main, address, hotline, email } = footerData;

  usePreventScroll(isOpen);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="z-50 relative">
        {isOpen ? <CloseIcon className="w-8 h-8" /> : <BurgerIcon className="w-8 h-8" />}
      </button>

      <div
        className={`fixed top-[52px] left-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="!pt-10 w-full flex flex-col justify-between relative h-full !pb-10">
          <div className="max-w-[420px] max-h-[320px] overflow-auto !mx-auto">
            <ul className="gap-8 grid grid-cols-2">
              {data?.map((item) => (
                <li key={item.id} className="text-center">
                  <Link
                    href={item.link}
                    className="text-base font-normal text-black uppercase text-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Copy right */}
          <div className="flex flex-col items-center !text-[#444] !py-5 w-full text-[12px] absolute bottom-[50px] left-0 right-0 leading-relaxed">
            <div className="text-center" dangerouslySetInnerHTML={{ __html: main }}></div>
            <div className="flex flex-col gap-0 flex-1 text-center">
              <div>
                <span>Toà soạn: </span>
                <span>{address}</span>
              </div>
              <div>
                <span>Hotline: </span>
                <span>{hotline}</span>
              </div>
              <div>
                <span>Liên hệ: </span>
                <Link href={`mailto:${email}`}>{email}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
