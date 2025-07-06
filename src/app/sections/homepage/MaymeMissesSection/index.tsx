import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { BoxCategoryProps } from '../../../types/pages/homepage';
import { getTimeDistanceFromNow } from '../../../utils/datetime';

interface SectionProps {
  data: BoxCategoryProps[];
  className?: string;
}

const Section = ({ data, className }: { data: BoxCategoryProps; className?: string }) => {
  const { id, title, articles, link } = data;
  const firstArticle = articles[0];
  const twoSideArticle = articles.slice(1, 3);
  const restArticles = articles.slice(3);
  return (
    <section id={id} className="!mt-10">
      <div className="section-header">
        <Link href={link} className="section-heading uppercase">
          {title}
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-[70%] flex flex-col md:flex-row gap-5 !mb-8 lg:!mb-0">
          <article aria-label="article" className="w-full md:w-2/3 flex flex-col gap-4">
            <Link
              href={firstArticle.link}
              className="w-full h-[200px] sm:h-[350px] md:h-[260px] lg:h-[350px] relative"
            >
              <Image
                src={firstArticle.image}
                alt={firstArticle.title}
                fill
                className="w-full h-full object-cover !relative"
              />
            </Link>
            <Link className="text-2xl font-bold hover:!text-[#006BA0]" href={firstArticle.link}>
              {firstArticle.title}
            </Link>
            <p className="text-sm !text-[#444]">{firstArticle.description}</p>
          </article>
          <div className="flex-1 w-full md:w-auto flex flex-row md:flex-col gap-6">
            {twoSideArticle?.map((article, index) => (
              <article key={index} aria-label="article" className="flex flex-col gap-4">
                <Link href={article.link} className="w-full max-h-[160px] relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="w-full h-full object-cover !relative"
                  />
                </Link>
                <Link className="text-bases font-bold hover:!text-[#006BA0]" href={article.link}>
                  {article.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[28px] lg:flex-1 lg:flex lg:flex-col lg:!pl-6 lg:!ml-6 lg:border-l-[1px] lg:border-[#eee]">
          {restArticles?.map((article, index) => (
            <article
              key={index}
              aria-label="article"
              className={clsx('flex gap-3 !pb-4 !mb-4 border-b-[1px] border-[#ddd]')}
            >
              <div className="flex-1  w-full flex flex-col gap-2">
                <Link className="text-sm font-bold hover:!text-[#006BA0]" href={article.link}>
                  {article.title}
                </Link>
                <div className="flex lg:hidden gap-4 items-center">
                  <p className="text-[11px] text-[#aaa] uppercase">
                    {getTimeDistanceFromNow(article?.publishedAt)}
                  </p>
                  <p className="text-[11px] text-[#444] uppercase">{article.category}</p>
                </div>
              </div>
              <Link href={article.link} className="block">
                <div className="w-[72px] h-[72px] relative rounded-sm overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="w-full h-full object-cover !relative"
                  />
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MaybeMissesSection = ({ data, className }: SectionProps) => {
  return (
    <>
      <Container maxWidth="lg">
        {data?.map((section) => (
          <Section key={section.id} data={section} />
        ))}
      </Container>
    </>
  );
};
