// React Native ScrollVelocity Component - TypeScript
export const reactNativeScrollVelocityCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ScrollVelocityProps {
  text: string;
}

const ScrollVelocity: React.FC<ScrollVelocityProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollVelocity;`;

// React Native ScrollVelocity Component - JavaScript
export const reactNativeScrollVelocityCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScrollVelocity = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScrollVelocity;`;

export const reactNativeScrollVelocityProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
