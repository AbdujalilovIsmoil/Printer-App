import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Icon name="archive" size={30} color={'red'} />
    </SafeAreaView>
  );
};

export default HomeScreen;
