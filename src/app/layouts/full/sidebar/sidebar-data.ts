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
    displayName: 'Booking List',
    iconName: 'list-check',
    route: '/vendor/transaction/booking-list',
  },
  {
    displayName: 'Purchase History',
    iconName: 'shopping-cart',
    route: '/vendor/transaction/purchase-history',
  },
];
