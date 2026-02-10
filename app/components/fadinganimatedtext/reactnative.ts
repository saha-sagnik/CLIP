// React Native FadingAnimatedText Component - TypeScript
export const reactNativeFadingAnimatedTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface FadingAnimatedTextProps {
  text: string;
}

const FadingAnimatedText: React.FC<FadingAnimatedTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default FadingAnimatedText;`;

// React Native FadingAnimatedText Component - JavaScript
export const reactNativeFadingAnimatedTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const FadingAnimatedText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default FadingAnimatedText;`;

export const reactNativeFadingAnimatedTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
