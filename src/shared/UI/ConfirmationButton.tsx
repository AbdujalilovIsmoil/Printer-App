import { Pressable, StyleSheet, Text, View } from 'react-native';

const ConfirmationButton = () => {
  return (
    <View style={styles.confirmationButtonContainer}>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? [styles.confirmationButton, styles.confirmationButtonPressed]
            : styles.confirmationButton;
        }}
      >
        <Text style={styles.confirmationButtonText}>Tasdiqlash</Text>
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
