// React Native Breadcrumb Component - TypeScript
export const reactNativeBreadcrumbCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BreadcrumbProps {
  text: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Breadcrumb;`;

// React Native Breadcrumb Component - JavaScript
export const reactNativeBreadcrumbCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Breadcrumb = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Breadcrumb;`;

export const reactNativeBreadcrumbProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
