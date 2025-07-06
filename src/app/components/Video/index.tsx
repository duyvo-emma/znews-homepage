'use client';

import clsx from 'clsx';
import { FC } from 'react';

type VideoPlayerProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string;
};

export const VideoPlayer: FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
}) => {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline
      className={clsx('shadow-lg w-full h-auto', className)}
    />
  );
};
