import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';

export default () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>Log Out</Text>
    </View>
  );
};