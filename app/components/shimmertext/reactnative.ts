// React Native ShimmerText Component - TypeScript
export const reactNativeShimmerTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ShimmerTextProps {
  text: string;
}

const ShimmerText: React.FC<ShimmerTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ShimmerText;`;

// React Native ShimmerText Component - JavaScript
export const reactNativeShimmerTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ShimmerText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ShimmerText;`;

export const reactNativeShimmerTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
