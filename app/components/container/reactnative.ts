// React Native Container Component - TypeScript
export const reactNativeContainerCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ContainerProps {
  text: string;
}

const Container: React.FC<ContainerProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Container;`;

// React Native Container Component - JavaScript
export const reactNativeContainerCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Container = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Container;`;

export const reactNativeContainerProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
