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
  isPressed: number | null;
  setIsPressed: (num: number) => void;
  icon: React.ComponentType<SvgProps>;
}
