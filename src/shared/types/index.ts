import React, { FC, SVGProps } from 'react';
import { SvgProps } from 'react-native-svg';

export type RootStackParamList = {
  home: undefined;
  login: undefined;
};

export interface Category {
  id: number;
  categoryName: string;
  categoryText: string;
  categoryIcon: React.ComponentType<SvgProps>;
}
