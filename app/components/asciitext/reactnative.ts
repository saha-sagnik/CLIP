// React Native ASCIIText Component - TypeScript
export const reactNativeASCIITextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ASCIITextProps {
  text: string;
}

const ASCIIText: React.FC<ASCIITextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ASCIIText;`;

// React Native ASCIIText Component - JavaScript
export const reactNativeASCIITextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ASCIIText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ASCIIText;`;

export const reactNativeASCIITextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
