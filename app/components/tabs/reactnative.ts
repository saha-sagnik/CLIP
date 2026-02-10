// React Native Tabs Component - TypeScript
export const reactNativeTabsCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TabsProps {
  text: string;
}

const Tabs: React.FC<TabsProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Tabs;`;

// React Native Tabs Component - JavaScript
export const reactNativeTabsCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Tabs = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Tabs;`;

export const reactNativeTabsProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
