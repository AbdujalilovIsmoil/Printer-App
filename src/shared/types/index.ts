import React from 'react';
import { SvgProps } from 'react-native-svg';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
  batut: undefined;
  check: undefined;
};

export interface Category {
  id: number;
  categoryName: string;
  categoryText: string;
  categoryIcon: React.ComponentType<SvgProps>;
  categoryLink: 'home' | 'batut' | 'ice-cream' | 'water' | 'cocteil';
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
  setIsPressed?: (num: number) => void;
}

export interface IceCreamTypes {
  id: number;
  grammText: string;
  priceText: string;
  grammNumber: number;
  priceNumber: number;
  isPressed?: number | null;
  icon: React.ComponentType<SvgProps>;
  setIsPressed?: (num: number) => void;
}

export interface WaterTypes {
  id: number;
  priceText: string;
  bottleText: string;
  priceNumber: number;
  bottleNumber: number;
  isPressed?: number | null;
  icon: React.ComponentType<SvgProps>;
  setIsPressed?: (num: number) => void;
}