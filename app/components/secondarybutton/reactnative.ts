// React Native SecondaryButton Component - TypeScript
export const reactNativeSecondaryButtonCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SecondaryButtonProps {
  text: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default SecondaryButton;`;

// React Native SecondaryButton Component - JavaScript
export const reactNativeSecondaryButtonCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SecondaryButton = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default SecondaryButton;`;

export const reactNativeSecondaryButtonProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
