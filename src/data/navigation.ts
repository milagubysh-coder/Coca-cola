import { NavItem } from '../types';

export const navItems: NavItem[] = [
  {
    label: 'Home',
    path: '/'
  },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'All Beverages', path: '/products' },
      { label: 'Sodas', path: '/products?category=soda' },
      { label: 'Energy', path: '/products?category=energy' },
      { label: 'Water', path: '/products?category=water' },
      { label: 'Juices', path: '/products?category=juice' }
    ]
  },
  {
    label: 'Our Story',
    path: '/about',
    children: [
      { label: 'History', path: '/about#history' },
      { label: 'Mission', path: '/about#mission' },
      { label: 'Leadership', path: '/about#leadership' }
    ]
  },
  {
    label: 'Sustainability',
    path: '/sustainability'
  },
  {
    label: 'News',
    path: '/news'
  },
  {
    label: 'Careers',
    path: '/careers'
  }
];
