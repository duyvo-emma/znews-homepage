interface HomePageProps {
  topBanner?: TopBannerProps;
  topNews: TopNewsSectionProps;
  books: Article[];
  multimedia?: MultimediaSectionProps;
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
