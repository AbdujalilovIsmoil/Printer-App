import React from 'react';
import { SvgProps } from 'react-native-svg';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
};

export interface Category {
  id: number;
  categoryLink: string;
  categoryName: string;
  categoryText: string;
  categoryIcon: React.ComponentType<SvgProps>;
}

export interface BatutTimesTypes {
  id: number;
  timeText: number;
  soumText: string;
  minuteText: string;
  soumNumber: number;
  priceCategory: string;
  isPressed?: number | null;
  icon: React.ComponentType<SvgProps>;
  setIsPressed: (num: number) => void;
}

export interface IceCreamTypes {
  id: number;
  grammText: string;
  priceText: string;
  grammNumber: number;
  priceNumber: number;
  isPressed?: number | null;
  icon: React.ComponentType<SvgProps>;
  setIsPressed: (num: number) => void;
}
