export interface Header {
  logo: string;
  navItems: NavItem[];
  extraNavItems: NavItem[];
  extraChannels: NavItem[];
}

export interface NavItem {
  id: string;
  label: string;
  image?: string;
  link: string;
}
