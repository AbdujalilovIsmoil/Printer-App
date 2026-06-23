import { BatutTimesTypes } from '../../../shared/types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = (props: BatutTimesTypes) => {
  const Icon = props.icon;

  const isPressed = props.isPressed === props.id;

  return (
    <TouchableOpacity
      onPress={() => props.setIsPressed(props.id)}
      style={[styles.card, isPressed && styles.cardPressed]}
    >
      {isPressed && (
        <View style={styles.priceCategoryContainer}>
          <Text style={styles.priceCategory}>{props.priceCategory}</Text>
        </View>
      )}
      <View style={styles.hourContainer}>
        <Icon width={24} height={28} style={styles.hourIcon} />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeNumber}>{props.timeText}</Text>
        <Text style={styles.timeText}>{props.minuteText}</Text>
      </View>
      <View style={styles.horizontalRule} />

      <View>
        <Text style={styles.soumNumber}>{props.soumNumber.toFixed(3)}</Text>
        <Text style={styles.soumText}>{props.soumText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 32,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    position: 'relative',
    borderColor: '#E0E3E5',
    backgroundColor: '#FFFFFF',
  },
  cardPressed: {
    borderWidth: 2,
    borderColor: '#005146',
  },
  hourContainer: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'rgb(0, 81, 70, 0.1)',
  },
  hourIcon: {
    width: 24,
    height: 28,
  },
  timeContainer: {
    marginBottom: 24,
  },
  timeNumber: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: 900,
    color: '#005146',
    textAlign: 'center',
    letterSpacing: -0.96,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 900,
    color: '#5D5E61',
    letterSpacing: 1.4,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  horizontalRule: {
    height: 1,
    width: '100%',
    marginBottom: 24,
    backgroundColor: '#E0E3E5',
  },
  soumNumber: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700,
    marginBottom: 4,
    color: '#191C1E',
    textAlign: 'center',
  },
  soumText: {
    lineHeight: 20,
    fontWeight: 500,
    color: '#5D5E61',
    textAlign: 'center',
  },
  priceCategoryContainer: {
    top: 0,
    right: 0,
    paddingVertical: 4,
    position: 'absolute',
    paddingHorizontal: 16,
    borderTopRightRadius: 5,
    alignSelf: 'flex-start',
    backgroundColor: '#005146',
  },
  priceCategory: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: 400,
    color: '#FFFFFF',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
