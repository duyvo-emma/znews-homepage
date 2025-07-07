'use client';
import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { HeaderSection } from '../../../components/HeaderSection';
import { BaseSlider } from '../../../components/Slider';
import { Article } from '../../../types/common/articles';

const BookCard = ({ data, className }: { data: Article; className?: string }) => {
  const { title, image, link } = data;
  return (
    <article
      aria-label="book"
      className="p-4 rounded-sm border-[1px] border-[#ddd] overflow-hidden min-h-[234px]"
    >
      <Link href={link} className={`block ${className}`}>
        <div className="flex flex-col items-center h-[134px] w-full">
          <Image fill src={image} alt={title} className="w-full h-full object-cover !relative" />
        </div>
      </Link>
      <div className="!p-[10px] flex">
        <Link href={link} className="text-black hover:!text-[#006BA0] block font-bold">
          {title}
        </Link>
      </div>
    </article>
  );
};

export const BooksSection = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <Container maxWidth="lg">
      <section id="books" className={clsx(className, '!mb-10')}>
        <HeaderSection link="/books" title="Books" />
        <BaseSlider slidesToShow={5} slidesToScroll={5}>
          {data?.map((item) => (
            <BookCard key={item.id} data={item} className="" />
          ))}
        </BaseSlider>
      </section>
    </Container>
  );
};
