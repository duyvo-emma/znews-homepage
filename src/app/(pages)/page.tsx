import { getHomePageData } from '../lib/api';
import { BooksSection } from '../sections/homepage/BooksSection';
import { MultimediaSection } from '../sections/homepage/MultimediaSection';
import { TopNewsSection } from '../sections/homepage/TopNewsSection';
import { TrendingSearch } from '../sections/homepage/TrendingSearch';

export default async function Home() {
  const homepageData = await getHomePageData();
  const { topBanner: trendingSearch, topNews, books, multimedia } = homepageData;

  return (
    <main>
      <TrendingSearch data={trendingSearch} />
      <TopNewsSection data={topNews} />
      <BooksSection data={books} />
      <MultimediaSection data={multimedia} />
    </main>
  );
}
