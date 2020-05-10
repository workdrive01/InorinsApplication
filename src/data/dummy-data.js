import Category from '../models/category';
import Account from '../models/account';

export const CATEGORIES = [
  new Category('c1', 'Bank Account', '#f5428d'),
  new Category('c2', 'Mobile TopUp', '#f54242'),
  new Category('c3', 'Online Report', '#f5a442'),
  new Category('c4', 'Recharge Pins', '#f5d142'),
  new Category('c5', 'BillPayments', '#368dff'),
  new Category('c6', 'Tickets', '#41d95d'),
  // new Category('c7', ' ', '#9eecff'),
  // new Category('c8', ' ', '#b9ffb0'),
  // new Category('c9', ' ', '#ffc7ff'),
  // new Category('c10', ' ', '#47fced'),
];

export const ACCOUNTS = [
  new Account(
    'm1',
    ['c1'],
    'Account opening',
    'simple',
    'https://5.imimg.com/data5/OI/AK/IK/GLADMIN-38975461/selection-352-500x500.png',
    20,
    ['Citizenship card'],
    ['come with photo copy of citizenship photos'],
    false,
    true,
    true,
    true,
  ),
  new Account(
    'm2',
    ['c2'],
    'Account closing',
    'simple',
    'https://5.imimg.com/data5/OI/AK/IK/GLADMIN-38975461/selection-352-500x500.png',
    10,
    ['Citizenship card'],
    ['come with photo copy of citizenship photos'],
    false,
    true,
    true,
    true,
  ),
];
