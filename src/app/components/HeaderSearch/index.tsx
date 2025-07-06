'use client';
import { TextField } from '@mui/material';
import clsx from 'clsx';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { SearchIcon } from '../icons/Search';

export const HeaderSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, () => setIsSearchOpen(false));

  return (
    <div ref={containerRef} id="header-search" className="flex items-center gap-2 relative">
      <div className="hidden md:block">
        <button
          aria-label="Search"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex items-center justify-center w-10 h-10 p-2 cursor-pointer"
        >
          <SearchIcon className="w-5 h-5 text-black hover:text-[#24aee4] transition-colors during-150" />
        </button>
        <div
          className={clsx(
            'absolute top-full right-0 z-20 rounded p-2 bg-white transition-all duration-300 ease-in-out transform',
            isSearchOpen
              ? 'opacity-100 translate-y-2'
              : 'opacity-0 translate-y-4 pointer-events-none'
          )}
        >
          <TextField
            className="text-white shadow-md !text-sm !w-[250px]"
            id="filled-basic"
            label="Tìm kiếm"
            variant="filled"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button
          aria-label="Search"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="flex items-center justify-center w-10 h-10 p-2 cursor-pointer"
        >
          <SearchIcon className="w-5 h-5 text-black hover:text-[#24aee4] transition-colors duration-150" />
        </button>

        {isSearchOpen && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-40 z-100 top-[52px]"
              onClick={() => setIsSearchOpen(false)}
            />
            <div className="fixed top-[50px] left-0 w-full z-110 p-4">
              <TextField
                fullWidth
                autoFocus
                className="!bg-white !rounded shadow-md"
                id="filled-basic"
                label="Tìm kiếm"
                variant="filled"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
