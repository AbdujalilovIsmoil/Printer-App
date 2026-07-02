import Modal from './Modal';
import { useState } from 'react';
import { RootStackParamList } from '../types';
import { LogoutApp, LogoutRed } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const LogoutButton = () => {
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logoutApp = () => {
    setIsLogout(false);
    navigation.navigate('login');
  };

  return (
    <>
      <Modal isLogout={isLogout}>
        <View style={styles.logoutIconContainer}>
          <LogoutRed height={22} width={22} style={styles.logoutRedIcon} />
        </View>
        <Text style={styles.logoutText}>Tizimdan chiqishni xohlaysizmi ?</Text>
        <View style={styles.logoutFooter}>
          <TouchableOpacity
            style={styles.logoutFooterButton}
            onPress={() => setIsLogout(false)}
          >
            <Text style={styles.logoutFooterButtonText}>Yo'q</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={logoutApp}
            style={[styles.logoutFooterButton, styles.logoutFooterButtonRed]}
          >
            <Text
              style={[
                styles.logoutFooterButtonText,
                styles.logoutFooterButtonTextRed,
              ]}
            >
              Ha
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => setIsLogout(true)}
      >
        <LogoutApp height={18} width={18} style={styles.logoutIcon} />
      </TouchableOpacity>
    </>
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
  logoutIconContainer: {
    width: 64,
    height: 64,
    padding: 20,
    marginBottom: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'rgba(186, 26, 26,0.1)',
  },
  logoutRedIcon: {
    width: 22,
    height: 22,
  },
  logoutText: {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: 32,
    color: '#191C1E',
    textAlign: 'center',
  },
  logoutFooter: {
    gap: 16,
    flexDirection: 'row',
  },
  logoutFooterButton: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'solid',
    borderColor: '#BEC9C5',
  },
  logoutFooterButtonRed: {
    borderColor: '#BA1A1A',
    backgroundColor: '#BA1A1A',
  },
  logoutFooterButtonText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    textAlign: 'center',
  },
  logoutFooterButtonTextRed: {
    color: '#ffffff',
  },
});
