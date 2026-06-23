import React from 'react';
import { LogoutApp } from '../../assets';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LogoutButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const logoutHandler = () => {
    navigation.navigate('login');
  };

  const onPress = () => {
    Alert.alert(
      'Siz haqiqatdan ham dasturdan chiqmoqchimisiz ?',
      "Siz dasturdan chiqsangiz yana qayta login va parolingizni terib kirishingiz kerak bo'ladi.",
      [
        { text: 'Ha', style: 'destructive', onPress: logoutHandler },
        { text: "Yo'q", style: 'cancel' },
      ],
    );
  };

  return (
    <TouchableOpacity style={styles.headerButton} onPress={onPress}>
      <LogoutApp height={18} width={18} style={styles.logoutIcon} />
    </TouchableOpacity>
  );
};

export default LogoutButton;

const styles = StyleSheet.create({
  headerButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: '30%',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    backgroundColor: '#F1F5F9',
  },
  logoutIcon: {
    width: 18,
    height: 18,
  },
});
