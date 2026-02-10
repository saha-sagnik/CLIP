// React Native MarqueTextEffect Component - TypeScript
export const reactNativeMarqueTextEffectCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface MarqueTextEffectProps {
  text: string;
}

const MarqueTextEffect: React.FC<MarqueTextEffectProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default MarqueTextEffect;`;

// React Native MarqueTextEffect Component - JavaScript
export const reactNativeMarqueTextEffectCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const MarqueTextEffect = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default MarqueTextEffect;`;

export const reactNativeMarqueTextEffectProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
