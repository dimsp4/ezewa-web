import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Dashboard',
  },
  {
    displayName: 'Home',
    iconName: 'home',
    route: '/dashboard/home',
  },
  {
    displayName: 'Product',
    iconName: 'list',
    route: '/dashboard/product',
  },
  {
    displayName: 'Store',
    iconName: 'building-store',
    route: '/dashboard/store',
  },
  {
    displayName: 'Customers',
    iconName: 'users',
    route: '/dashboard/customer',
  },
  {
    navCap: 'Transaction',
  },
  {
    displayName: 'Purchase',
    iconName: 'shopping-cart',
    route: '/dashboard/transaction',
  },
];
