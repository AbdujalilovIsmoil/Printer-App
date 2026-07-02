import { useEffect } from 'react';
import Card from './components/Card';
import { categories } from '../../shared/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, FlatList, NativeModules } from 'react-native';

const Xprinter = NativeModules.XPModule;

const HomeScreen = () => {
  useEffect(() => {
    Xprinter.registerUsbFilters();
    Xprinter.connectUSB();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        contentContainerStyle={styles.categories}
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
    backgroundColor: '#F7F9FB',
  },
  categories: {
    gap: 24,
  },
});
