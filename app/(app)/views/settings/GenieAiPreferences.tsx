import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';

// stack navigation to user-settings, general-app-settings, ai-preferences (=> instructions)
export const GenieAiPreferences = () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>Settings</Text>
    </View>
  );
};