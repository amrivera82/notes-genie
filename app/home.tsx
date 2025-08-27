import React, { LinearGradient } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './assets/styles/global-styles.js';
import { selectCount } from './views/editor/EditorSlice';

// drawer on left for primary navigation
// 3 (?) button-based quick-navigation to 1. Voice Note Capture, 2. OCR Capture, 3. Message Center
export const Dashboard = () => {
  const count = useSelector(selectCount);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} start={{x: 0, y: 0}} end={{x: 1, y: 1}}>
      <View
        style={styles.dashboard}>
        <Text style={styles.splashTitle}>NoteGenie</Text>
        <Text style={styles.splashSubtitle}>Document & Capture | Communicate & Organize</Text>
      </View>
      </LinearGradient>
  );
};