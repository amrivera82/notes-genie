import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../assets/styles/global-styles';

// Drawer-based saved note access, left of composition/editing panel
export default () => {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>My Documents</Text>
    </View>
  );
};