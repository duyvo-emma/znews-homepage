import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '../../../types/common/articles';
import { MainArticleProps, TopNewsSectionProps } from '../../../types/pages/homepage';

const NewsTrendingSection = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <div id="news-trending" className={className}>
      {data.map((article, index) => (
        <article
          key={index}
          className={clsx(
            'flex gap-4 !mb-[15px] !pb-[15px]',
            index < data.length - 1 ? 'border-b border-gray-200' : ''
          )}
        >
          <Link aria-label="article-thumbnail" href={article.link}>
            <div className="w-[180px] h-[120px] sm:w-[120px] sm:h-[80px] relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="w-full h-full object-cover !relative"
              />
            </div>
          </Link>
          <Link
            aria-label="article-title"
            href={article.link}
            className="text-black block flex-1 text-[19px] sm:text-sm lg:text-[12.8px] font-bold hover:!text-[#006BA0] transition during-200"
          >
            {article.title}
          </Link>
        </article>
      ))}
    </div>
  );
};

const MainArticleSection = ({
  mainNews,
  suggestedArticles,
}: {
  mainNews: Article;
  suggestedArticles: Article[];
}) => {
  return (
    <div className="lg:w-[490px] w-full">
      <article className="flex gap-4 !mb-[15px] flex-col">
        <Link aria-label="main-article-thumbnail" href={mainNews.link}>
          <div className="w-full h-[326px] relative">
            <Image
              src={mainNews.image}
              alt={mainNews.title}
              fill
              className="w-full h-full object-cover !relative"
            />
          </div>
        </Link>
        <Link
          aria-label="main-article-title"
          href={mainNews.link}
          className="text-black block flex-1 text-[28px] lg:text-[32px] font-bold hover:!text-[#006BA0] transition during-200"
        >
          {mainNews.title}
        </Link>
        <p
          aria-label="main-article-description"
          className="text-black font-normal text-sm hidden lg:block"
        >
          {mainNews.description}
        </p>
      </article>
      {/* Suggested Articles */}
      <ul className="flex-col gap-1 list-disc pl-5 hidden lg:flex">
        {suggestedArticles.map((article, index) => (
          <li key={index}>
            <Link
              aria-label={`suggested-article-${index}`}
              href={article.link}
              className="text-black font-bold text-[14px] hover:!text-[#006BA0] transition during-200"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SideNewsSection = ({ data, className }: { data: Article[]; className?: string }) => {
  return (
    <div className={clsx(className, 'flex flex-row lg:flex-col gap-6 w-full flex-wrap')}>
      {data.map((article, index) => (
        <article key={index} className="flex gap-2 flex-col flex-1">
          <Link aria-label="side-article-thumbnail" href={article.link}>
            <div className="w-full h-[171px] relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="w-full h-full object-cover !relative"
              />
            </div>
          </Link>
          <Link
            aria-label="side-article-title"
            href={article.link}
            className="text-black block flex-1 text-base font-bold hover:!text-[#006BA0] transition during-200"
          >
            {article.title}
          </Link>
        </article>
      ))}
    </div>
  );
};

const FeaturedNewsSection = ({
  data,
  className,
}: {
  data: { mainArticle: MainArticleProps; sideArticles: Article[] };
  className?: string;
}) => {
  const { mainArticle, sideArticles } = data;
  const { article: mainNews, suggestedArticles } = mainArticle;
  return (
    <div id="featured-news" className={clsx(className, 'flex gap-5 flex-col lg:flex-row')}>
      <MainArticleSection mainNews={mainNews} suggestedArticles={suggestedArticles} />
      <SideNewsSection data={sideArticles} className="flex-1 flex flex-col gap-4" />
    </div>
  );
};

export const TopNewsSection = ({
  data,
  className,
}: {
  data: TopNewsSectionProps;
  className?: string;
}) => {
  const { mainArticle, sideArticles, secondaryArticles } = data;

  return (
    <Container maxWidth="lg">
      <section
        id="top-news"
        className={clsx(
          className,
          'bg-white !my-4 w-full flex flex-col-reverse sm:flex-row-reverse lg:flex-row gap-5'
        )}
      >
        <NewsTrendingSection
          className="w-full sm:w-[45%] lg:w-[30%] !pt-[30px] border-t-[1px] border-[#ddd] sm:border-0 sm:!pt-0"
          data={secondaryArticles}
        />
        <FeaturedNewsSection className="flex-1" data={{ mainArticle, sideArticles }} />
      </section>
    </Container>
  );
};
