import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ContentTypes {
  text: string;
  title: string;
}

const Content = ({ title, text }: ContentTypes) => {
  return (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>{title}</Text>
      <Text style={styles.contentText}>{text}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
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
