// React Native Grid Component - TypeScript
export const reactNativeGridCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface GridProps {
  text: string;
}

const Grid: React.FC<GridProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Grid;`;

// React Native Grid Component - JavaScript
export const reactNativeGridCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Grid = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Grid;`;

export const reactNativeGridProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
