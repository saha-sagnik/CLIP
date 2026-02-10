// React Native SlidingTypeText Component - TypeScript
export const reactNativeSlidingTypeTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SlidingTypeTextProps {
  text: string;
}

const SlidingTypeText: React.FC<SlidingTypeTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default SlidingTypeText;`;

// React Native SlidingTypeText Component - JavaScript
export const reactNativeSlidingTypeTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SlidingTypeText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default SlidingTypeText;`;

export const reactNativeSlidingTypeTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
