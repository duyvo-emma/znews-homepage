export interface TrendingSearchItem {
  id: string;
  title: string;
  link: string;
}

export interface TopBannerProps {
  tabs?: TrendingSearchItem[];
  logo?: string;
}
