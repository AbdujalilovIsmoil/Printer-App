import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';

interface ModalProps {
  isLogout: boolean;
  children?: React.ReactNode;
}

const ModalComponent = ({ children, isLogout }: ModalProps) => {
  return (
    <Modal animationType="fade" visible={isLogout} transparent={true}>
      <View style={styles.container}>
        <View style={styles.lightContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  lightContainer: {
    padding: 32,
    width: '100%',
    borderRadius: 24,
    backgroundColor: 'rgb(255, 255, 255)',
  },
});
