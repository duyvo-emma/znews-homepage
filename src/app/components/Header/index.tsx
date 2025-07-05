import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { HeaderSearch } from '../HeaderSearch';
import NavMore from '../NavMore';

export const Header = ({ data }: { data: Header }) => {
  const { logo, navItems, extraNavItems, extraChannels } = data;
  return (
    <header
      id="header"
      className="bg-white border-b-[1px] border-[#ddd] p-4 w-full flex justify-center fixed top-0 z-50 min-h-[52px]"
    >
      <Container maxWidth="lg" className="flex items-center justify-between">
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
            {navItems.map((item) => (
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
    </header>
  );
};
