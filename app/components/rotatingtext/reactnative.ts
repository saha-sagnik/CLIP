// React Native RotatingText Component - TypeScript
export const reactNativeRotatingTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface RotatingTextProps {
  text: string;
}

const RotatingText: React.FC<RotatingTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default RotatingText;`;

// React Native RotatingText Component - JavaScript
export const reactNativeRotatingTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const RotatingText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default RotatingText;`;

export const reactNativeRotatingTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
