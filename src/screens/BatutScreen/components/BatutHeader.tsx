import { StyleSheet, Text, View } from 'react-native';
import { BackToScreenButton, LogoutButton } from '../../../shared/UI';

const BatutHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <BackToScreenButton />
      <Text style={styles.headerTitle}>Vaqtni tanlash</Text>
      <LogoutButton />
    </View>
  );
};

export default BatutHeader;

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: 24,
    borderBottomStartRadius: 1,
    borderBottomColor: '#E2E8F0',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#0F766E',
  },
});
