import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';

// Sign-up flow starts here, sort of...
// stack navigation with support, account-management; logout transitions to login
export const UserSetup = () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>User Setup</Text>
    </View>
  );
};