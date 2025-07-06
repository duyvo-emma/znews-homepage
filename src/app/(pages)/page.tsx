import { getHomePageData } from '../lib/api';
import { BooksSection } from '../sections/homepage/BooksSection';
import { BoxCategoriesSection } from '../sections/homepage/BoxCategoriesSection';
import { LatestNewsSection } from '../sections/homepage/LatestNewsSection';
import { MagazineSection } from '../sections/homepage/MagazineSection';
import { MaybeMissesSection } from '../sections/homepage/MaymeMissesSection';
import { MultimediaSection } from '../sections/homepage/MultimediaSection';
import { TopNewsSection } from '../sections/homepage/TopNewsSection';
import { TrendingSearch } from '../sections/homepage/TrendingSearch';
import { VideoSection } from '../sections/homepage/VideoSection';

export const metadata = {
  title: 'Znews - Thông tin uy tín, hình ảnh ấn tượng - ZNEWS.VN',
  description: 'Znews - Thông tin uy tín, hình ảnh ấn tượng - ZNEWS.VN',
};

export default async function Home() {
  const homepageData = await getHomePageData();
  const {
    topBanner: trendingSearch,
    topNews,
    books,
    multimedia,
    recentNews,
    mostRead,
    podcast,
    sponsor,
    maybeMisses,
    magazines,
    videos,
  } = homepageData;

  return (
    <main>
      <TrendingSearch data={trendingSearch} />
      <TopNewsSection data={topNews} />
      <BooksSection data={books} />
      <MultimediaSection data={multimedia} />
      <LatestNewsSection data={{ recentNews, mostRead, podcast, sponsor }} />
      <MaybeMissesSection data={maybeMisses} />
      <BoxCategoriesSection data={homepageData.boxCategory} />
      <MagazineSection data={magazines} />
      <VideoSection data={videos} />
    </main>
  );
}
