// React Native DecryptedText Component - TypeScript
export const reactNativeDecryptedTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface DecryptedTextProps {
  text: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default DecryptedText;`;

// React Native DecryptedText Component - JavaScript
export const reactNativeDecryptedTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DecryptedText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default DecryptedText;`;

export const reactNativeDecryptedTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
