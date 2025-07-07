import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderSection } from '../../../components/HeaderSection';
import { Article as ArticleType } from '../../../types/common/articles';
import { BoxCategoryProps } from '../../../types/pages/homepage';

const Article = ({ article, isLast }: { article: ArticleType; isLast?: boolean }) => {
  const { id, title, description, image, link } = article;
  return (
    <article className={clsx('flex gap-2  !pb-4 !mb-4', !isLast && 'border-b-[1px] border-[#ddd]')}>
      <Link href={link} className="w-[105px] h-[70px] relative">
        <Image src={image} alt={title} fill className="w-full h-full object-cover !relative" />
      </Link>
      <Link className="text-sm font-bold hover:!text-[#006BA0] flex-1 line-clamp-2" href={link}>
        {title}
      </Link>
    </article>
  );
};

const Section = ({ data, className }: { data: BoxCategoryProps; className?: string }) => {
  const { id, title, link, articles } = data;
  const firstArticle = articles[0];
  const restArticles = articles.slice(1);
  return (
    <div id={id} className={clsx('', className)}>
      <HeaderSection link={link} title={title} className="!mb-2" hasUnderline={false} />
      {/* Desktop */}
      <div className="hidden lg:flex flex-col">
        <article className="!mb-4 flex flex-col gap-2 border-b-[1px] border-[#ddd] !pb-4">
          <Link href={firstArticle.link} className="w-full h-[170px] relative">
            <Image
              src={firstArticle.image}
              alt={firstArticle.title}
              fill
              className="w-full h-full object-cover !relative"
            />
          </Link>
          <Link className="text-[18px] font-bold hover:!text-[#006BA0]" href={firstArticle.link}>
            {firstArticle.title}
          </Link>
        </article>
        <div className="flex flex-col gap-2">
          {restArticles?.map((article, index) => (
            <Article
              key={article.id}
              article={article}
              isLast={index === restArticles.length - 1}
            />
          ))}
        </div>
      </div>
      {/* Mobile */}
      <div className="flex lg:hidden flex-col">
        {articles?.map((article, index) => (
          <Article key={article.id} article={article} isLast={index === articles.length - 1} />
        ))}
      </div>
    </div>
  );
};

export const BoxCategoriesSection = ({
  data,
  className,
}: {
  data: BoxCategoryProps[];
  className?: string;
}) => {
  return (
    <Container maxWidth="lg">
      <div className="border-t-[2px] border-[#333] !mt-10 !mb-5 !pt-5">
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 lg:grid-cols-4">
          {data?.map((section) => (
            <Section key={section.id} data={section} />
          ))}
        </div>
      </div>
    </Container>
  );
};
