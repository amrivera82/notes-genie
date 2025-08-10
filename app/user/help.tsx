import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/styles';

export default function () {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>Help</Text>
    </View>
  );
};