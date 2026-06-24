import { WaterTypes } from '../../../shared/types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = (props: WaterTypes) => {
  const Icon = props.icon;

  const isPressed = props.id === props.isPressed;

  return (
    <TouchableOpacity
      onPress={() => props.setIsPressed?.(props.id)}
      style={[styles.card, isPressed && styles.cardPressed]}
    >
      <View style={styles.iconContainer}>
        <Icon height={36} width={36} style={styles.cardIcon} />
      </View>
      <Text style={styles.bottleText}>
        {props.bottleNumber} {props.bottleText}
      </Text>
      <Text style={styles.priceText}>
        {props.priceNumber.toFixed(3)} {props.priceText}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 32,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 24,
    borderColor: '#BEC9C5',
    backgroundColor: '#FFFFFF',
  },
  cardPressed: { borderColor: '#005146', borderWidth: 2 },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 12,
    marginBottom: 24,
    alignItems: 'center',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 81, 70, 0.1)',
  },
  cardIcon: {
    width: 36,
    height: 36,
  },
  bottleText: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 8,
    fontWeight: 800,
    color: '#191C1E',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 900,
    color: '#005146',
    textAlign: 'center',
  },
});
