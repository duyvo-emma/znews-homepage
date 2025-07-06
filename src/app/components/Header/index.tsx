import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '../../types/common/footer';
import { Header as HeaderType } from '../../types/common/header';
import { HeaderSearch } from '../HeaderSearch';
import { MobileMenu } from '../MobileMenu';
import NavMore from '../NavMore';

const DesktopHeader = ({ data }: { data: HeaderType }) => {
  const { logo, navItems, extraNavItems, extraChannels } = data;
  return (
    <Container maxWidth="lg" className="hidden items-center justify-between md:flex">
      <div className="block lg:hidden">
        <NavMore extraNavItems={extraNavItems} extraChannels={extraChannels} />
      </div>
      <Link id="logo" href="/">
        <div className="w-[180px] h-full p-0">
          <Image src={logo} alt="Logo" fill className="!relative w-full h-full object-contain" />
        </div>
      </Link>
      <nav className="hidden lg:flex flex-1 justify-center gap-2">
        <ul className="flex items-center justify-center flex-wrap">
          {navItems?.map((item) => (
            <li key={item.id} className="inline-block !mr-4">
              <Link
                href={item.link}
                className="text-sm font-bold hover:!text-[#04b2f7] hover:border-[#04b2f7] flex items-center justify-center min-h-[52px] border-b-[3px] border-white "
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="!ml-4">
            <NavMore extraNavItems={extraNavItems} extraChannels={extraChannels} />
          </li>
        </ul>
      </nav>
      <div>
        <HeaderSearch />
      </div>
    </Container>
  );
};

const MobileHeader = ({ data, footerData }: { data: HeaderType; footerData: Footer }) => {
  const { logo, navItems, extraNavItems, extraChannels } = data;

  return (
    <Container maxWidth="lg" className="flex md:hidden items-center justify-between">
      <div className="flex gap-4 items-center">
        <MobileMenu data={extraNavItems} footerData={footerData} />
        <Link id="logo" href="/">
          <div className="w-[180px] h-full p-0">
            <Image src={logo} alt="Logo" fill className="!relative w-full h-full object-contain" />
          </div>
        </Link>
      </div>
      <div>
        <HeaderSearch />
      </div>
    </Container>
  );
};

export const Header = ({ data, footerData }: { data: HeaderType; footerData: Footer }) => {
  return (
    <header
      id="header"
      className="bg-white border-b-[1px] border-[#ddd] p-4 w-full flex justify-center fixed top-0 z-50 min-h-[52px]"
    >
      <DesktopHeader data={data} />
      <MobileHeader data={data} footerData={footerData} />
    </header>
  );
};
