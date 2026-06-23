import { useState } from 'react';
import { Card } from './components';
import { batutTimes } from '../../shared/constants';
import { ConfirmationButton } from '../../shared/UI';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const BatutScreen = () => {
  const [hieghtChange, setHeightChange] = useState<number>(0);
  const [isPressed, setIsPressed] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={batutTimes}
          keyExtractor={el => String(el.id)}
          renderItem={({ item }) => (
            <Card {...item} isPressed={isPressed} setIsPressed={setIsPressed} />
          )}
          contentContainerStyle={{
            paddingBottom: hieghtChange + 24,
          }}
          ListHeaderComponent={() => {
            return (
              <View style={styles.content}>
                <Text style={styles.contentTitle}>Vaqtni tanlang</Text>
                <Text style={styles.contentText}>
                  Seans davomiyligini tanlang
                </Text>
              </View>
            );
          }}
        />
      </View>
      <ConfirmationButton onHeightChange={height => setHeightChange(height)}>
        Tasdiqlash
      </ConfirmationButton>
    </View>
  );
};

export default BatutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F7F9FB' },
  contentContainer: {
    paddingHorizontal: 24,
  },
  content: {
    paddingVertical: 48,
  },
  contentTitle: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 600,
    marginBottom: 8,
    color: '#191C1E',
    textAlign: 'center',
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 400,
    color: '#5D5E61',
    textAlign: 'center',
  },
});
