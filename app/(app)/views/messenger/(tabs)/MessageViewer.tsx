// tab navigation for sent, received.import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../../assets/styles/global-styles';


export default function MessageViewer () {
  return (
    <View
      style={{
        flex: 1, justifyContent: "center", alignItems: "center", top: -20
      }}>
      <Text style={styles.splashTitle}>Message Dashboard</Text>
    </View>
  );
};