import Card from './components/Card';
import { StyleSheet, FlatList } from 'react-native';
import { categories } from '../../shared/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
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
    backgroundColor: '#F7F9FB',
  },
});
