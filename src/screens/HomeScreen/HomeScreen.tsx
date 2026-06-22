import { useEffect } from 'react';
import Card from './components/Card';
import { Category } from '../../shared/types';
import { categories } from '../../shared/constants';
import { ScrollView, StyleSheet, Alert, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import XPrinter from '@urolovshohjahon/react-native-xprinter';

const HomeScreen = () => {
  // useEffect(() => {
  //   const initPrinter = async () => {
  //     try {
  //       XPrinter.registerUsbFilters();
  //       XPrinter.connectUSB();

  //       const devices = await XPrinter.searchBTDevices();

  //       if (devices && devices.length > 0) {
  //         XPrinter.connectBt(devices[0].address);
  //       }

  //       console.log('Printer ulandi');
  //     } catch (error) {
  //       console.log('Printer error:', error);
  //       Alert.alert('error', 'asd');
  //       Alert.alert('Printer', 'Ulanishda xatolik yuz berdi');
  //     }
  //   };

  //   initPrinter();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Card {...item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
});
