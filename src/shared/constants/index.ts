import { BatutTimesTypes, Category, IceCreamTypes, WaterTypes } from '../types';
import {
  Hour,
  Water,
  Cocteil,
  IceCream,
  IceCream1,
  IceCream2,
  IceCream3,
  ArrowTopRight,
  Bottle1,
  Bottle2,
  Bottle3,
} from '../../assets';

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

export const iceCreams: IceCreamTypes[] = [
  {
    id: 1,
    icon: IceCream1,
    priceNumber: 10,
    grammNumber: 100,
    grammText: 'gram',
    priceText: "so'm",
  },
  {
    id: 2,
    icon: IceCream1,
    priceNumber: 18,
    grammNumber: 200,
    grammText: 'gram',
    priceText: "so'm",
  },
  {
    id: 3,
    icon: IceCream2,
    priceNumber: 45,
    grammNumber: 500,
    grammText: 'gram',
    priceText: "so'm",
  },
  {
    id: 4,
    grammNumber: 1,
    grammText: 'kg',
    icon: IceCream3,
    priceNumber: 85,
    priceText: "so'm",
  },
];

export const waters: WaterTypes[] = [
  {
    id: 1,
    icon: Bottle1,
    priceNumber: 10,
    bottleNumber: 1,
    priceText: "so'm",

    bottleText: 'stakan',
  },
  {
    id: 2,
    icon: Bottle2,
    priceNumber: 13,
    priceText: "so'm",
    bottleNumber: 0.5,
    bottleText: 'litr',
  },
  {
    id: 3,
    icon: Bottle3,
    priceNumber: 25,
    bottleNumber: 1,
    priceText: "so'm",
    bottleText: 'litr',
  },
];
