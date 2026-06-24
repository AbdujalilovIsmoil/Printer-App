import { useNavigation } from '@react-navigation/native';
import { Category, RootStackParamList } from '../../../shared/types';
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Card = (props: Omit<Category, 'id'>) => {
  const Icon = props.categoryIcon;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate(props.categoryLink)}
    >
      <View style={styles.cardContainer}>
        <View style={styles.categoryIconContainer}>
          <Icon height={30} width={30} style={styles.categoryIcon} />
        </View>
        <Text style={styles.categoryName}>{props.categoryName}</Text>
        <Text style={styles.categoryText}>{props.categoryText}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
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
