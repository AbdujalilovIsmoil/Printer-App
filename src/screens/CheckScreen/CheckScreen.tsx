import { Home, Print, Success } from '../../assets';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const CheckScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.succesContent}>
        <View style={styles.successContainer}>
          <Success height={30} width={30} style={styles.successIcon} />
        </View>
        <Text style={styles.successText}>Muvaffaqiyatli!</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Batut xizmati</Text>

        <View style={styles.cardHorizontalRule} />

        <View style={styles.cardValuesContainer}>
          <View style={styles.cardValues}>
            <Text style={styles.cardKey}>Vaqt:</Text>
            <Text style={styles.cardValue}>20 min</Text>
          </View>
          <View style={styles.cardValues}>
            <Text style={styles.cardKey}>Narx:</Text>
            <Text style={styles.cardValue}>20 000 so'm</Text>
          </View>
          <View style={styles.cardValues}>
            <Text style={styles.cardKey}>Operator:</Text>
            <Text style={styles.cardValue}>Azamat</Text>
          </View>
          <View style={styles.cardValues}>
            <Text style={styles.cardKey}>Sana:</Text>
            <Text style={styles.cardValue}>25.05.2024</Text>
          </View>
        </View>

        <View style={styles.cardHorizontalRule} />

        <Text style={styles.thanksText}>Rahmat!</Text>
      </View>

      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.printBtn}>
          <View style={styles.printBox}>
            <Print height={20} width={20} style={styles.printIcon} />
            <Text style={styles.printBtnText}>Chop etish</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goBack}>
          <View style={styles.printBox}>
            <Home height={20} width={20} style={styles.printIcon} />
            <Text style={styles.goBackText}>Bosh sahifaga qaytish</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CheckScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  succesContent: {
    paddingVertical: 24,
  },
  successContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    backgroundColor: '#005146',
  },
  successIcon: {
    width: 30,
    height: 30,
  },
  successText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    color: '#191C1E',
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 30,
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  cardTitle: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400,
    letterSpacing: 1.8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  cardHorizontalRule: {
    width: 200,
    borderWidth: 1,
    marginVertical: 24,
    borderStyle: 'dashed',
    marginHorizontal: 'auto',
    borderColor: '#94A3B8',
  },
  cardValuesContainer: {
    gap: 12,
    flexDirection: 'column',
  },
  cardValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardKey: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    color: '#64748B',
  },
  cardValue: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    color: '#1E293B',
  },
  thanksText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400,
    color: '#1E293B',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  printBtn: {
    padding: 22,
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: '#005146',
  },
  printBtnText: {
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 1,
    color: '#FFFFFF',
  },
  printIcon: {
    width: 20,
    height: 20,
  },
  printBox: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBack: {
    padding: 22,
    borderRadius: 8,
    borderColor: '#ECEEF0',
    backgroundColor: 'rgb(0, 81, 70, 0.1)',
  },
  goBackText: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: 400,
    color: '#005146',
  },
  footerButtons: {
    marginBottom: 50,
  },
});
