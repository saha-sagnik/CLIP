// React Native JellyText Component - TypeScript
export const reactNativeJellyTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface JellyTextProps {
  text: string;
}

const JellyText: React.FC<JellyTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default JellyText;`;

// React Native JellyText Component - JavaScript
export const reactNativeJellyTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const JellyText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default JellyText;`;

export const reactNativeJellyTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
