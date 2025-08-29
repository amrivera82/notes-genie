import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../assets/styles/global-styles.js';
import { selectCount } from './editor/EditorSlice';

// drawer on left for primary navigation
// 3 (?) button-based quick-navigation to 1. Voice Note Capture, 2. OCR Capture, 3. Message Center
export default function Dashboard () {
  const count = useSelector(selectCount);

  return (
    <View style={styles.dashboard}>
      <Text style={styles.splashTitle}>NoteGenie</Text>
      <Text style={styles.splashSubtitle}>Document & Capture | Communicate & Organize</Text>
    </View>
  );
};