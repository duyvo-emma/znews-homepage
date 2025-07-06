import { Container } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { TopBannerProps, TrendingSearchItem } from '../../../types/common/trendingSearch';
import styles from './index.module.scss';

const TrendingTab = ({ data }: { data: TrendingSearchItem }) => {
  const item = data;
  return (
    <Link key={item.id} href={item.link} className={clsx(styles.trendingSearch_link)}>
      {item.title}
    </Link>
  );
};

export const TrendingSearch = ({
  data,
  className,
}: {
  data: TopBannerProps;
  className?: string;
}) => {
  const { tabs = [], logo } = data;
  return (
    <Container maxWidth="lg">
      <section
        id="trending-search"
        className={clsx('bg-white w-full hidden !my-2 lg:flex', className)}
      >
        {tabs.length > 0 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <div className="w-6 h-6">
              {logo && (
                <Image
                  src={logo}
                  alt="Trending Search Logo"
                  fill
                  className="w-full h-full object-contain !relative"
                />
              )}
            </div>
            {tabs?.map((item) => (
              <TrendingTab key={item.id} data={item} />
            ))}
          </div>
        )}
      </section>
    </Container>
  );
};
