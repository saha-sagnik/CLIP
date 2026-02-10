// React Native TypewritterEffect Component - TypeScript
export const reactNativeTypewritterEffectCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TypewritterEffectProps {
  text: string;
}

const TypewritterEffect: React.FC<TypewritterEffectProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TypewritterEffect;`;

// React Native TypewritterEffect Component - JavaScript
export const reactNativeTypewritterEffectCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TypewritterEffect = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TypewritterEffect;`;

export const reactNativeTypewritterEffectProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
