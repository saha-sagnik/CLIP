// React Native Flex Component - TypeScript
export const reactNativeFlexCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface FlexProps {
  text: string;
}

const Flex: React.FC<FlexProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Flex;`;

// React Native Flex Component - JavaScript
export const reactNativeFlexCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Flex = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Flex;`;

export const reactNativeFlexProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
