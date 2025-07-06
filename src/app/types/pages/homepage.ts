interface HomePageProps {
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
}

interface TopNewsSectionProps {
  mainArticle: MainArticleProps;
  sideArticles: Article[];
  secondaryArticles: Article[];
}

interface MainArticleProps {
  article: Article;
  suggestedArticles: Article[];
}

interface MultimediaSectionProps {
  navigation: {
    title: string;
    link: string;
  }[];
  articles: Article[];
}

interface PodcastSectionProps {
  logo?: string;
  link: string;
  list: Article[];
}

interface SponsorSectionProps {
  background?: string;
  link?: string;
  posts: Article[];
}

interface BoxCategoryProps {
  id: string;
  title: string;
  link: string;
  articles: Article[];
}

interface MagazineSectionProps {
  id: string;
  title: string;
  link: string;
  articles: Article[];
}
