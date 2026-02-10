// React Native GlitchText Component - TypeScript
export const reactNativeGlitchTextCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface GlitchTextProps {
  text: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default GlitchText;`;

// React Native GlitchText Component - JavaScript
export const reactNativeGlitchTextCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const GlitchText = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default GlitchText;`;

export const reactNativeGlitchTextProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
