import { useState } from 'react';
import { LogoutRed } from '../../../assets';
import { LogoutButton, Modal } from '../../../shared/UI';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerLogo}>Logo</Text>
          <LogoutButton />
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F8FAFC',
    borderBottomColor: '#E2E8F0',
    justifyContent: 'space-between',
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: 700,
    color: '#0F766E',
    textTransform: 'uppercase',
  },
});
