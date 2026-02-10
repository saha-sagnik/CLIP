// React Native BlinkingTextEffect Component - TypeScript
export const reactNativeBlinkingTextEffectCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BlinkingTextEffectProps {
  text: string;
}

const BlinkingTextEffect: React.FC<BlinkingTextEffectProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default BlinkingTextEffect;`;

// React Native BlinkingTextEffect Component - JavaScript
export const reactNativeBlinkingTextEffectCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BlinkingTextEffect = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default BlinkingTextEffect;`;

export const reactNativeBlinkingTextEffectProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
