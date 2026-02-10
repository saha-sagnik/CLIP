// React Native ScrambleText Component - TypeScript
export const reactNativeScrambleTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ScrambleTextProps {
  text: string;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrambleText;`;

// React Native ScrambleText Component - JavaScript
export const reactNativeScrambleTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScrambleText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrambleText;`;

export const reactNativeScrambleTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
