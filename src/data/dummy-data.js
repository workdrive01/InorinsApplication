import Category from '../models/category';
import Account from '../models/account';

export const CATEGORIES = [
  new Category('c1', 'Account', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced'),
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
];
