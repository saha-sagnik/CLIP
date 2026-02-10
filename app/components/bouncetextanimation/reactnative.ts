// React Native BounceTextAnimation Component - TypeScript
export const reactNativeBounceTextAnimationCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BounceTextAnimationProps {
  text: string;
}

const BounceTextAnimation: React.FC<BounceTextAnimationProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default BounceTextAnimation;`;

// React Native BounceTextAnimation Component - JavaScript
export const reactNativeBounceTextAnimationCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BounceTextAnimation = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default BounceTextAnimation;`;

export const reactNativeBounceTextAnimationProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
