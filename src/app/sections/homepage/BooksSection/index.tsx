'use client';
import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ArrowIcon } from '../../../components/icons/Arrow';
import { BaseSlider } from '../../../components/Slider';

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

const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute overflow-hidden cursor-pointer right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
      aria-label="Next"
    >
      <ArrowIcon className="w-6 h-6 text-gray-600" />
    </button>
  );
};

const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute overflow-hidden cursor-pointer left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-100"
      aria-label="Previous"
    >
      <ArrowIcon className="w-6 h-6 text-gray-600 rotate-180" />
    </button>
  );
};

export const BooksSection = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <Container maxWidth="lg">
      <section id="books" className={clsx(className, '!mb-10')}>
        <div className="section-header">
          <Link href="/books" className="section-heading uppercase">
            Books
          </Link>
        </div>
        <BaseSlider slidesToShow={5} slidesToScroll={5}>
          {data.map((item) => (
            <BookCard key={item.id} data={item} className="" />
          ))}
        </BaseSlider>
      </section>
    </Container>
  );
};
