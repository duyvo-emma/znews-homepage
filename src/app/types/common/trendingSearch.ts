interface TrendingSearchItem {
  id: string;
  title: string;
  link: string;
}

interface TopBannerProps {
  tabs?: TrendingSearchItem[];
  logo?: string;
}
