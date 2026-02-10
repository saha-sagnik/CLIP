// React Native Pagination Component - TypeScript
export const reactNativePaginationCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface PaginationProps {
  text: string;
}

const Pagination: React.FC<PaginationProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Pagination;`;

// React Native Pagination Component - JavaScript
export const reactNativePaginationCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Pagination = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Pagination;`;

export const reactNativePaginationProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
