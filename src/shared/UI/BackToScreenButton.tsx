import React from 'react';
import { ArrowLeft } from '../../assets';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const BackToScreenButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.headerLeftIconContainer}
    >
      <ArrowLeft height={18} width={18} />
    </TouchableOpacity>
  );
};

export default BackToScreenButton;

const styles = StyleSheet.create({
  headerLeftIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
