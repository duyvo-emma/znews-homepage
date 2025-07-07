import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../types/common/articles';
import { NewsIcon } from '../icons/News';
import styles from './index.module.scss';

export const MagazineCard = ({ className, data }: { className?: string; data: Article }) => {
  const { title, category, image, link } = data;
  return (
    <article className="relative group">
      <Link href={link} className="block h-[435px] w-auto rounded-sm overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          fill
          className="top-0 bottom-0 left-0 right-0 object-cover brightness-50 transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute z-2 top-0 -translate-x-1/2 left-1/2 bg-[#ffde76] rounded-b-sm text-sm font-bold !px-4 !py-1 text-center">
          {category}
        </span>
        <div
          className={clsx(
            'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-0 z-2 w-full',
            styles.magazine_title
          )}
        >
          <p className="text-xl font-bold !text-white group-hover:!text-[#ffde76] line-clamp-3 text-center">
            {title}
          </p>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[40px] z-2 bg-black group-hover:bg-[#ffde76] h-[48px] w-[48px] rounded-full flex items-center justify-center transition-colors duration-300">
          <NewsIcon className="!w-5 !h-5" stroke="group-hover:!stroke-black stroke-[#ffde76]" />
        </div>
      </Link>
    </article>
  );
};
