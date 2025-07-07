import { Container } from '@mui/material';
import { HeaderSection } from '../../../components/HeaderSection';
import { MagazineCard } from '../../../components/MagazineCard';
import { BaseSlider } from '../../../components/Slider';
import { MagazineSectionProps } from '../../../types/pages/homepage';

type SectionProps = {
  data: MagazineSectionProps;
  className?: string;
};

export const MagazineSection = ({ data, className }: SectionProps) => {
  const { id, title, articles } = data;
  return (
    <section
      style={{ background: '#eee', width: '100%', padding: '40px 0 30px', marginBottom: '30px' }}
    >
      <Container id="magazine-section" maxWidth="lg">
        <HeaderSection link="/magazines" title={title} hasUnderline={false} />
        <BaseSlider slidesToShow={4} slidesToScroll={4}>
          {articles?.map((item) => (
            <MagazineCard key={item.id} data={item} className="" />
          ))}
        </BaseSlider>
      </Container>
    </section>
  );
};
