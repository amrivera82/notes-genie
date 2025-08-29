import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';

// tab navigation by note type, ? navigation note categorization by year/month/...
// additional keyword search field in view toolbar for bypassing tree-like-navigation
export const VoiceNotes = () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>My Notes</Text>
    </View>
  );
};