// React Native GhostButton Component - TypeScript
export const reactNativeGhostButtonCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface GhostButtonProps {
  text: string;
}

const GhostButton: React.FC<GhostButtonProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default GhostButton;`;

// React Native GhostButton Component - JavaScript
export const reactNativeGhostButtonCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GhostButton = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default GhostButton;`;

export const reactNativeGhostButtonProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
