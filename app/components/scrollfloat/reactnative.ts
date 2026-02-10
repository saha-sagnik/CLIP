// React Native ScrollFloat Component - TypeScript
export const reactNativeScrollFloatCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ScrollFloatProps {
  text: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollFloat;`;

// React Native ScrollFloat Component - JavaScript
export const reactNativeScrollFloatCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScrollFloat = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollFloat;`;

export const reactNativeScrollFloatProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
