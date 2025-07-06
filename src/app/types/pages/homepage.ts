import { Article } from '../common/articles';
import { TopBannerProps } from '../common/trendingSearch';
import { Video } from '../common/video';

export interface HomePageProps {
  topBanner?: TopBannerProps;
  topNews: TopNewsSectionProps;
  books: Article[];
  multimedia?: MultimediaSectionProps;
  recentNews: Article[];
  mostRead: Article[];
  podcast: PodcastSectionProps;
  sponsor: SponsorSectionProps;
  maybeMisses: BoxCategoryProps[];
  boxCategory: BoxCategoryProps[];
  magazines: MagazineSectionProps;
  videos: VideoSectionProps;
}

export interface TopNewsSectionProps {
  mainArticle: MainArticleProps;
  sideArticles: Article[];
  secondaryArticles: Article[];
}

export interface MainArticleProps {
  article: Article;
  suggestedArticles: Article[];
}

export interface MultimediaSectionProps {
  navigation: {
    title: string;
    link: string;
  }[];
  articles: Article[];
}

export interface PodcastSectionProps {
  logo?: string;
  link: string;
  list: Article[];
}

export interface SponsorSectionProps {
  background?: string;
  link?: string;
  posts: Article[];
}

export interface BoxCategoryProps {
  id: string;
  title: string;
  link: string;
  articles: Article[];
}

export interface MagazineSectionProps {
  id: string;
  title: string;
  link: string;
  articles: Article[];
}

export interface VideoSectionProps {
  id: string;
  title: string;
  link: string;
  videos: Video[];
}
