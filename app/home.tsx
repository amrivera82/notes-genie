import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './assets/styles/global-styles';
import { selectCount } from './views/editor/editorSlice';

// drawer on left for primary navigation
// 3 (?) button-based quick-navigation to 1. Voice Note Capture, 2. OCR Capture, 3. Message Center
export const Dashboard = () => {
  const count = useSelector(selectCount);

  return (
      <View
        style={{
          flex: 1, justifyContent: "center", alignItems: "center", top: -20
        }}>
        <Text style={styles.splashTitle}>NoteGenie</Text>
        <Text style={styles.splashSubtitle}>Document & Capture | Communicate & Organize</Text>
      </View>
  );
};