// React Native ScrollReveal Component - TypeScript
export const reactNativeScrollRevealCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ScrollRevealProps {
  text: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollReveal;`;

// React Native ScrollReveal Component - JavaScript
export const reactNativeScrollRevealCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScrollReveal = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollReveal;`;

export const reactNativeScrollRevealProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
