import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../assets/styles/global-styles';

// add recipients, configure contact parameters; create recipient groups.
export default function RecipientSetup () {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>Recipient Setup</Text>
    </View>
  );
};