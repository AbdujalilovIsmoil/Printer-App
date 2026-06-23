import { Category } from '../types';
import { ArrowTopRight, Cocteil, IceCream, Water } from '../../assets';

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
