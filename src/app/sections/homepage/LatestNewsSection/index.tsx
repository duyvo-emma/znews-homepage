import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../../types/common/articles';
import { PodcastSectionProps, SponsorSectionProps } from '../../../types/pages/homepage';
import styles from './index.module.scss';

interface SectionProps {
  data: {
    recentNews: Article[];
    mostRead: Article[];
    podcast: PodcastSectionProps;
    sponsor: SponsorSectionProps;
  };
  className?: string;
}

const News = ({
  data,
  className,
  isLast,
}: {
  data: Article;
  className?: string;
  isLast?: boolean;
}) => {
  const { title, image, link, description } = data;
  return (
    <article
      aria-label="media"
      className={clsx(
        '!pb-3 !mb-3 flex flex-row gap-4',
        className,
        !isLast && 'border-b-[1px] border-[#ddd]'
      )}
    >
      <Link href={link} className="block !mb-2">
        <div className="flex flex-col items-center h-[150px] w-[200px] md:h-[190px] md:w-[250px] lg:h-[171px] lg:w-[257px]">
          <Image fill src={image} alt={title} className="w-full h-full object-cover !relative" />
        </div>
      </Link>
      <div className="flex flex-col gap-2">
        <Link href={link} className="text-black text-xl hover:!text-[#006BA0] block font-bold">
          {title}
        </Link>
        <p className="!text-[#888] text-sm font-normal">{description}</p>
      </div>
    </article>
  );
};

const NewsList = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <div className={clsx('flex flex-col', className)}>
      {data?.map((article, index) => (
        <News data={article} key={index} isLast={index === data.length - 1} />
      ))}
    </div>
  );
};

const MostRead = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <div className="!p-6 !mb-5 border border-[#f0f0f0] rounded-sm">
      <h3 className="!mb-6 text-xl font-bold !text-black">Đọc nhiều</h3>
      <div className="flex flex-col gap-5">
        {data?.map((article, index) => (
          <div key={index} className="flex gap-3">
            <Link
              href={article.link}
              className="block w-[72px] h-[72px] rounded-lg overflow-hidden"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="w-full h-full object-cover !relative"
              />
            </Link>
            <div className="flex flex-col gap-2">
              <p className="text-[10px] text-[#5c5c5c] uppercase">{article.category}</p>
              <Link
                href={article.link}
                className="text-black hover:!text-[#006BA0] block text-sm font-bold"
              >
                {article.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PodcastSection = ({ data, className }: { data: PodcastSectionProps; className?: string }) => {
  const { logo, link, list } = data;
  const firstNews = list?.[0];
  const restNews = list?.slice(1);
  return (
    <div className={clsx('!p-5 !mb-5 bg-[#2f2f3f] relative', styles.latestNews_podcastWrapper)}>
      <div
        className={styles.latestNews_podcastOverlay}
        style={{ backgroundImage: `url(${firstNews?.image})` }}
      ></div>
      <div className="relative flex flex-col gap-3 items-center z-10">
        <Link href={link} className="h-[18px] w-auto !mb-4">
          <Image src={logo} alt="podcast" fill className="w-full h-full object-contain !relative" />
        </Link>
        <div className="w-full flex flex-col gap-[10px] items-center !mb-4 !pb-4 border-b border-[#ffffff1a]">
          <Link
            href={firstNews?.link}
            className="block w-[250px] h-[166px] rounded-sm overflow-hidden"
          >
            <Image
              fill
              src={firstNews?.image}
              alt={firstNews?.title}
              className="w-full h-full object-cover !relative"
            />
          </Link>
          <Link
            href={firstNews?.link}
            className="!text-white hover:!text-[#006BA0] block font-bold"
          >
            {firstNews?.title}
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        {restNews?.map((article, index) => (
          <div
            key={index}
            className={clsx(
              'flex gap-2',
              index < restNews.length - 1 && 'border-b border-[#ffffff1a] !mb-4 !pb-4 '
            )}
          >
            <Link
              href={article.link}
              className="block w-[72px] h-[50px] rounded-sm overflow-hidden"
            >
              <Image
                fill
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover !relative"
              />
            </Link>
            <Link
              href={article.link}
              className="!text-white text-sm hover:!text-[#006BA0] block font-bold flex-1"
            >
              {article.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const SponsorSection = ({ data, className }: { data: SponsorSectionProps; className?: string }) => {
  const { background, link, posts } = data;
  const firstPost = posts?.[0];
  const restPosts = posts?.slice(1);
  return (
    <div
      className={clsx('block !pt-[150px]', styles.latestNews_sponsor)}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col gap-4 w-full items-center">
        <Link
          href={firstPost?.link}
          className="w-[270px] h-[180px] relative rounded-sm overflow-hidden block"
        >
          <Image
            fill
            src={firstPost?.image}
            alt={firstPost?.title}
            className="object-cover absolute top-0 bottom-0 left-0 right-0"
          />
          <div className="absolute bottom-0 left-0 right-0 z-2 !py-[15px] !px-[22.5px]">
            <p className="!text-white text-sm block">{firstPost?.title}</p>
          </div>
        </Link>
        <div className="flex gap-4">
          {restPosts?.map((post, index) => (
            <div key={index} className="flex flex-col gap-2">
              <Link
                href={post?.link}
                className="w-[128px] h-[85px] relative rounded-sm overflow-hidden block"
              >
                <Image
                  fill
                  src={post?.image}
                  alt={post?.title}
                  className="object-cover w-full h-full !relative"
                />
              </Link>
              <Link href={post?.link} className="!text-black text-sm block">
                {post?.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LatestNewsSection = ({ data, className }: SectionProps) => {
  const { recentNews, mostRead, podcast, sponsor } = data;
  return (
    <Container maxWidth="lg">
      <section className="flex gap-4 !mt-8">
        <NewsList data={recentNews} className="w-full lg:w-[70%]" />
        <div className="flex-1 hidden lg:block">
          <MostRead data={mostRead} className="w-full" />
          <PodcastSection data={podcast} className="w-full" />
          <SponsorSection data={sponsor} className="w-full" />
        </div>
      </section>
    </Container>
  );
};
