'use client';
import { useEffect, useState } from 'react';
import { ArrowIcon } from '../icons/Arrow';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 h-12 w-12 right-4 z-50 bg-white overflow-hidden text-white px-4 py-2 rounded-full border border-[#575757] shadow-2xl md:hidden flex items-center justify-center"
    >
      <ArrowIcon className="w-6 h-6 rotate-270" />
    </button>
  ) : null;
}
