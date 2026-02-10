// React Native IconButton Component - TypeScript
export const reactNativeIconButtonCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface IconButtonProps {
  text: string;
}

const IconButton: React.FC<IconButtonProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default IconButton;`;

// React Native IconButton Component - JavaScript
export const reactNativeIconButtonCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const IconButton = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default IconButton;`;

export const reactNativeIconButtonProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
