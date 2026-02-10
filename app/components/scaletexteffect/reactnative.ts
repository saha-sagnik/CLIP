// React Native ScaleTextEffect Component - TypeScript
export const reactNativeScaleTextEffectCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface ScaleTextEffectProps {
  text: string;
}

const ScaleTextEffect: React.FC<ScaleTextEffectProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScaleTextEffect;`;

// React Native ScaleTextEffect Component - JavaScript
export const reactNativeScaleTextEffectCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ScaleTextEffect = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default ScaleTextEffect;`;

export const reactNativeScaleTextEffectProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
