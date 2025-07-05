interface Header {
  logo: string;
  navItems: NavItem[];
  extraNavItems: NavItem[];
  extraChannels: NavItem[];
}

interface NavItem {
  id: string;
  label: string;
  image?: string;
  link: string;
}
