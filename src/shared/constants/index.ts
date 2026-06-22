import { ArrowTopRight, Cocteil, IceCream, Water } from '../../assets';
import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 1,
    categoryName: 'Batut',
    categoryIcon: ArrowTopRight,
    categoryText: 'Soatiga batutga kirish',
  },
  {
    id: 2,
    categoryIcon: IceCream,
    categoryName: 'Muzqaymoq',
    categoryText: 'Xajmiga qarab muzqaymoq olish',
  },
  {
    id: 3,
    categoryName: 'Suv',
    categoryIcon: Water,
    categoryText: 'Gazsiz yaxna ichimliklar',
  },
  {
    id: 4,
    categoryIcon: Cocteil,
    categoryName: 'Kokteyl',
    categoryText: "Muzdak ko'ngilni ko'taradigan ichimlik",
  },
];
