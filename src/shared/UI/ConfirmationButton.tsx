import React from 'react';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ConfirmationButtonProps {
  children: React.ReactNode;
  onHeightChange: (height: number) => void;
}

const ConfirmationButton = ({
  children,
  onHeightChange,
}: ConfirmationButtonProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View
      style={styles.confirmationButtonContainer}
      onLayout={e => onHeightChange(e.nativeEvent.layout.height)}
    >
      <Pressable
        onPress={() => navigation.navigate('check')}
        style={({ pressed }) => {
          return pressed
            ? [styles.confirmationButton, styles.confirmationButtonPressed]
            : styles.confirmationButton;
        }}
      >
        <Text style={styles.confirmationButtonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default ConfirmationButton;

const styles = StyleSheet.create({
  confirmationButtonContainer: {
    left: 0,
    bottom: 0,
    padding: 24,
    width: '100%',
    borderTopWidth: 1,
    position: 'absolute',
    borderTopColor: '#E0E3E5',
    backgroundColor: '#FFFFFF',
  },
  confirmationButton: {
    padding: 18,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#005146',
  },
  confirmationButtonPressed: {
    backgroundColor: '#022722',
  },
  confirmationButtonText: {
    fontSize: 18,
    lineHeight: 28,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
