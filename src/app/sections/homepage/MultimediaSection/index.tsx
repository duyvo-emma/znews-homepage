import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { MultimediaSectionProps } from '../../../types/pages/homepage';
import styles from './index.module.scss';

const Navigation = ({
  navigation,
  className,
}: {
  navigation: { title: string; link: string }[];
  className?: string;
}) => {
  return (
    <div className={clsx('hidden lg:flex gap-[30px] items-center', className)}>
      {navigation.map((navItem, index) => (
        <Link
          key={index}
          href={navItem.link}
          className="text-sm text-black hover:!text-[#dd3333] uppercase font-[600]
              "
        >
          {navItem.title}
        </Link>
      ))}
    </div>
  );
};

const MultimediaCard = ({ data, className }: { data: Article; className?: string }) => {
  const { title, image, link } = data;
  return (
    <article aria-label="media" className={clsx('min-h-[234px]', className)}>
      <Link href={link} className="block !mb-2">
        <div className="flex flex-col items-center h-[180px] md:h-[250px] lg:h-[171px] w-full">
          <Image fill src={image} alt={title} className="w-full h-full object-cover !relative" />
        </div>
      </Link>
      <Link href={link} className="text-black text-base hover:!text-[#006BA0] block font-bold">
        {title}
      </Link>
    </article>
  );
};

export const MultimediaSection = ({
  data,
  className,
}: {
  data: MultimediaSectionProps;
  className?: string;
}) => {
  const { navigation, articles } = data;
  const firstArticle = articles[0];
  const restArticles = articles.slice(1);
  return (
    <Container maxWidth="lg">
      <section id="multimedia" className={clsx(className, styles.multimedia, '!mt-16')}>
        <div className="section-header !border-0 flex gap-10 items-center relative">
          <Link href="/books" className="section-heading uppercase">
            Multimedia
          </Link>

          <Navigation navigation={navigation} />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 relative !pb-8">
          <div className="col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col gap-4">
            <div className="w-full h-[330px]">
              <Image
                fill
                src={firstArticle.image}
                alt={firstArticle.title}
                className="w-full h-full object-cover !relative"
              />
            </div>
            <Link
              href={firstArticle.link}
              className="text-black text-2xl hover:!text-[#006BA0] block font-bold text-center lg:text-left"
            >
              {firstArticle.title}
            </Link>
            <p className="text-sm text-black font-normal text-center lg:text-left">
              {firstArticle.description}
            </p>
          </div>
          {restArticles.map((article, index) => (
            <MultimediaCard key={index} data={article} className="" />
          ))}
        </div>
      </section>
    </Container>
  );
};
