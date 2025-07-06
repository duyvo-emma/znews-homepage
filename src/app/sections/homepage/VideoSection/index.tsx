import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { VideoPlayer } from '../../../components/Video';
import { Video } from '../../../types/common/video';
import { VideoSectionProps } from '../../../types/pages/homepage';

const VideoCard = ({ data }: { data: Video }) => {
  const { thumbnail, title, link, category } = data;
  return (
    <article className="flex gap-2 flex-col lg:flex-row" aria-label="video">
      <Link href={link} className="w-full h-[135px] lg:w-[120px] lg:h-[80px]">
        <Image src={thumbnail} alt={title} fill className="w-full h-full object-cover !relative" />
      </Link>
      <div className="flex-1 flex flex-col gap-1">
        <Link
          href={link}
          className="text-sm !text-white lg:!text-black line-clamp-3 font-bold hover:!text-[#006BA0] block"
        >
          {title}
        </Link>
        <p className="text-xs uppercase !text-[#888]">{category}</p>
      </div>
    </article>
  );
};

const DesktopVideoList = ({ data, className }: { data: Video[]; className?: string }) => {
  return (
    <section
      className={clsx(
        'flex-col gap-5 !p-[10px] w-[300px] min-w-[300px] h-[400px] overflow-auto bg-[#eee] hidden lg:flex',
        className
      )}
    >
      {data?.map((item) => (
        <VideoCard key={item.id} data={item} />
      ))}
    </section>
  );
};

const MobileVideoList = ({ data, className }: { data: Video[]; className?: string }) => {
  const first4videos = data.slice(0, 4);
  return (
    <section
      className={clsx(
        'gap-5 !p-4 min-w-[300px] overflow-auto bg-[#333] grid grid-cols-4 lg:hidden w-full',
        className
      )}
    >
      {first4videos?.map((item) => (
        <VideoCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export const VideoSection = ({
  data,
  className,
}: {
  data: VideoSectionProps;
  className?: string;
}) => {
  const { videos, title, id, link } = data;
  return (
    <Container id={id} maxWidth="lg" className="!mb-20 hidden md:block">
      <div className="section-header">
        <Link href={link} className="section-heading uppercase">
          {title}
        </Link>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-0">
        <VideoPlayer className="max-h-[400px]" src={data.videos[0].videoURL} />
        <DesktopVideoList data={videos} />
        <MobileVideoList data={videos} />
      </div>
    </Container>
  );
};
