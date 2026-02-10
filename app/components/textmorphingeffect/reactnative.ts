// React Native TextMorphingEffect Component - TypeScript
export const reactNativeTextMorphingEffectCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextMorphingEffectProps {
  text: string;
}

const TextMorphingEffect: React.FC<TextMorphingEffectProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextMorphingEffect;`;

// React Native TextMorphingEffect Component - JavaScript
export const reactNativeTextMorphingEffectCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextMorphingEffect = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default TextMorphingEffect;`;

export const reactNativeTextMorphingEffectProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
