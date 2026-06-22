import { LogoutApp } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../shared/types';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeHeader = () => {
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
    <View style={styles.headerContainer}>
      <Text style={styles.headerLogo}>Logo</Text>
      <TouchableOpacity style={styles.headerButton} onPress={onPress}>
        <LogoutApp height={18} width={18} style={styles.logoutIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomStartRadius: 1,
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
