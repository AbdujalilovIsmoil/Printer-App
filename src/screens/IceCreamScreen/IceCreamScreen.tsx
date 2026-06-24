import { useState } from 'react';
import { Card } from './components';
import { iceCreams } from '../../shared/constants';
import { FlatList, StyleSheet, View } from 'react-native';
import { ConfirmationButton, Content } from '../../shared/UI';

const IceCreamScreen = () => {
  const [isPressed, setIsPressed] = useState<number>(0);
  const [hieghtChange, setHeightChange] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={2}
          data={iceCreams}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Card {...item} isPressed={isPressed} setIsPressed={setIsPressed} />
          )}
          ListHeaderComponent={() => (
            <Content
              title="Hajmni tanlang"
              text="Buyurtma uchun kerakli muzqaymoq miqdorini tanlang"
            />
          )}
          contentContainerStyle={{
            paddingBottom: hieghtChange + 24,
          }}
          columnWrapperStyle={{
            marginBottom: 10,
            justifyContent: 'space-between',
          }}
        />
      </View>

      <ConfirmationButton onHeightChange={setHeightChange}>
        Tasdiqlash
      </ConfirmationButton>
    </View>
  );
};

export default IceCreamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 24,
  },
});
