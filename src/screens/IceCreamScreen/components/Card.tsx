import { IceCreamTypes } from '../../../shared/types';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

const Card = (props: IceCreamTypes) => {
  const Icon = props.icon;
  const { width } = useWindowDimensions();

  const gap = 10;
  const column = 2;

  const cardWidth = (width - gap - 48) / column;

  const isPressed = props.isPressed === props.id;

  return (
    <TouchableOpacity
      onPress={() => props.setIsPressed?.(props.id)}
      style={[
        styles.card,
        { width: cardWidth },
        isPressed && styles.cardPressed,
      ]}
    >
      <Icon width={36} height={44} style={styles.cardIcon} />
      <Text style={styles.cardGrammText}>
        {props.grammNumber} {props.grammText}
      </Text>
      <Text style={styles.cardPriceText}>
        {props.priceNumber.toFixed(3)} {props.priceText}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 24,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#BEC9C5',
    backgroundColor: '#FFFFFF',
  },
  cardPressed: {
    borderWidth: 2,
    borderColor: '#005146',
  },
  cardIcon: {
    width: 36,
    height: 44,
    marginBlock: 16,
    marginHorizontal: 'auto',
  },
  cardGrammText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 800,
    color: '#191C1E',
    textAlign: 'center',
  },
  cardPriceText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 900,
    color: '#005146',
    textAlign: 'center',
  },
});
