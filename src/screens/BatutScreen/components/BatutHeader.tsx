import { StyleSheet, Text, View } from 'react-native';
import { BackToScreenButton, LogoutButton } from '../../../shared/UI';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BatutHeader = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top }}>
      <View style={styles.headerContainer}>
        <BackToScreenButton />
        <Text style={styles.headerTitle}>Vaqtni tanlash</Text>
        <LogoutButton />
      </View>
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
    backgroundColor: '#F8FAFC',
    borderBottomColor: '#E2E8F0',
    justifyContent: 'space-between',
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#0F766E',
  },
});
