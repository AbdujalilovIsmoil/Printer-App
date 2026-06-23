import { StyleSheet, Text, View } from 'react-native';
import { ConfirmationButton } from '../../shared/UI';

const BatutScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Batut Top</Text>
      <ConfirmationButton />
    </View>
  );
};

export default BatutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9FB' },
});
