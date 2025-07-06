import { Container } from '@mui/system';
import Link from 'next/link';
import { Footer as FooterType } from '../../types/common/footer';

export const Footer = ({ className, data }: { className?: string; data: FooterType }) => {
  const { main, address, hotline, email } = data;
  return (
    <footer className="bg-[#f7f7f7] !text-[#888] !py-5 w-full text-[12px]">
      <Container
        maxWidth="lg"
        className="flex gap-0 items-center sm:items-start flex-col sm:flex-row w-full text-center sm:text-left"
      >
        <div
          className=" sm:w-[50%] md:w-[60%] lg:w-[70%]"
          dangerouslySetInnerHTML={{ __html: main }}
        ></div>
        <div className="flex flex-col gap-0 flex-1">
          <div>
            <span>Toà soạn: </span>
            <span>{address}</span>
          </div>
          <div>
            <span>Hotline: </span>
            <span>{hotline}</span>
          </div>
          <div>
            <span>Liên hệ: </span>
            <Link href={`mailto:${email}`}>{email}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
