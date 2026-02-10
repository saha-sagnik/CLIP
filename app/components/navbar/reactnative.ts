// React Native Navbar Component - TypeScript
export const reactNativeNavbarCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface NavbarProps {
  text: string;
}

const Navbar: React.FC<NavbarProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Navbar;`;

// React Native Navbar Component - JavaScript
export const reactNativeNavbarCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Navbar = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default Navbar;`;

export const reactNativeNavbarProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
