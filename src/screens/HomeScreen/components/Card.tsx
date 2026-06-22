import { Link } from '@react-navigation/native';
import { Category } from '../../../shared/types';
import { StyleSheet, Text, View } from 'react-native';

const Card = (props: Omit<Category, 'id'>) => {
  const { categoryName, categoryIcon, categoryText } = props;

  const Icon = categoryIcon;

  return (
    <Link screen="login" params={{}} style={styles.link}>
      <View style={styles.cardContainer}>
        <View style={styles.categoryIconContainer}>
          <Icon height={30} width={30} style={styles.categoryIcon} />
        </View>
        <Text style={styles.categoryName}>{categoryName}</Text>
        <Text style={styles.categoryText}>{categoryText}</Text>
      </View>
    </Link>
  );
};

export default Card;

const styles = StyleSheet.create({
  link: {
    marginBottom: 25,
  },
  cardContainer: {
    padding: 32,
    width: '100%',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#BEC9C5',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  categoryIconContainer: {
    padding: 24,
    elevation: 6,
    marginBottom: 24,
    borderRadius: 16,
    shadowColor: '#0F766E',
    backgroundColor: '#FFFFFF',
  },
  categoryIcon: {
    width: 30,
    height: 30,
  },
  categoryName: {
    fontSize: 24,
    fontWeight: 600,
    marginBottom: 8,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 400,
    color: '#64748B',
  },
});
