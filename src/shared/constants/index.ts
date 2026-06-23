import { BatutTimesTypes, Category } from '../types';
import { ArrowTopRight, Cocteil, Hour, IceCream, Water } from '../../assets';

export const categories: Category[] = [
  {
    id: 1,
    categoryLink: 'batut',
    categoryName: 'Batut',
    categoryIcon: ArrowTopRight,
    categoryText: 'Soatiga batutga kirish',
  },
  {
    id: 2,
    categoryIcon: IceCream,
    categoryName: 'Muzqaymoq',
    categoryLink: 'ice-cream',
    categoryText: 'Xajmiga qarab muzqaymoq olish',
  },
  {
    id: 3,
    categoryName: 'Suv',
    categoryIcon: Water,
    categoryLink: 'water',
    categoryText: 'Gazsiz yaxna ichimliklar',
  },
  {
    id: 4,
    categoryIcon: Cocteil,
    categoryName: 'Kokteyl',
    categoryLink: 'cocteil',
    categoryText: "Muzdak ko'ngilni ko'taradigan ichimlik",
  },
];

export const batutTimes: BatutTimesTypes[] = [
  {
    id: 1,
    icon: Hour,
    timeText: 10,
    soumNumber: 10.0,
    soumText: "so'm",
    minuteText: 'minut',
    priceCategory: 'hamyonbop',
  },
  {
    id: 2,
    icon: Hour,
    timeText: 20,
    soumNumber: 20.0,
    soumText: "so'm",
    minuteText: 'minut',
    priceCategory: 'ommabop',
  },
  {
    id: 3,
    icon: Hour,
    timeText: 30,
    soumNumber: 30.0,
    soumText: "so'm",
    minuteText: 'minut',
    priceCategory: 'premium',
  },
];
