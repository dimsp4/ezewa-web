import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Dashboard',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/vendor/home',
  },
  {
    displayName: 'Building Management',
    iconName: 'building-store',
    route: '/vendor/building/all',
  },
  {
    navCap: 'Transaction',
  },
  {
    displayName: 'Purchase History',
    iconName: 'shopping-cart',
    route: '/vendor/transaction/purchase-history',
  },
];
