import { useState } from 'react';
import { Card } from './components';
import { waters } from '../../shared/constants';
import { WaterTypes } from '../../shared/types';
import { FlatList, StyleSheet, View } from 'react-native';
import { ConfirmationButton, Content } from '../../shared/UI';

const WaterScreen = () => {
  const [isPressed, setIsPressed] = useState<number>(0);
  const [hieghtChange, setHeightChange] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={waters}
          keyExtractor={el => String(el.id)}
          ListHeaderComponent={() => (
            <Content
              title="Suvni tanlang"
              text="Suvni hohlagan turini tanlang"
            />
          )}
          renderItem={({ item }: { item: WaterTypes }) => (
            <Card {...item} isPressed={isPressed} setIsPressed={setIsPressed} />
          )}
          contentContainerStyle={{
            paddingBottom: hieghtChange + 24,
          }}
        />
      </View>
      <ConfirmationButton onHeightChange={setHeightChange}>
        Tasdiqlash
      </ConfirmationButton>
    </View>
  );
};

export default WaterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
});
