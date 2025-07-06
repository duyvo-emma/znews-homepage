'use client';

import { ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { ArrowIcon } from '../icons/Arrow';

type BaseSliderProps = {
  children: ReactNode;
  className?: string;
} & Settings;

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 overflow-hidden"
    aria-label="Next"
  >
    <ArrowIcon className="w-8 h-8 text-gray-600" />
  </button>
);

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 overflow-hidden"
    aria-label="Previous"
  >
    <ArrowIcon className="w-8 h-8 text-gray-600 rotate-180" />
  </button>
);

export const BaseSlider = ({
  className,
  children,
  arrows = true,
  infinite = false,
  speed = 500,
  slidesToShow = 4,
  slidesToScroll = 4,
  responsive = [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 667,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  ...rest
}: BaseSliderProps) => {
  return (
    <Slider
      className={className}
      arrows={arrows}
      infinite={infinite}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      responsive={responsive}
      nextArrow={<CustomNextArrow />}
      prevArrow={<CustomPrevArrow />}
      {...rest}
    >
      {children}
    </Slider>
  );
};
