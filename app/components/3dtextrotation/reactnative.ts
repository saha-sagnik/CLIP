// React Native 3DTextRotation Component - TypeScript
export const reactNative3DTextRotationCodeTS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface 3DTextRotationProps {
  text: string;
}

const 3DTextRotation: React.FC<3DTextRotationProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default 3DTextRotation;`;

// React Native 3DTextRotation Component - JavaScript
export const reactNative3DTextRotationCodeJS = `import React from 'react';
import { Text, StyleSheet } from 'react-native';

const 3DTextRotation = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});

export default 3DTextRotation;`;

export const reactNative3DTextRotationProps = [
  { prop: 'text', type: 'string', default: '-', desc: 'The text to display' },
  // Add more props as needed
];
