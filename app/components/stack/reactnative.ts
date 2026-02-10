// React Native Stack Component - TypeScript
export const reactNativeStackCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface StackProps {
  text: string;
}

const Stack: React.FC<StackProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Stack;`;

// React Native Stack Component - JavaScript
export const reactNativeStackCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Stack = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Stack;`;

export const reactNativeStackProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
