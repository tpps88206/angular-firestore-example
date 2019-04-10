import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '儀表板',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '功能列表',
    group: true,
  },
  {
    title: '帳目清單',
    icon: 'nb-tables',
    link: '/pages/list',
  },
];