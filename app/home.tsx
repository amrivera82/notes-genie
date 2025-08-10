import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../assets/styles/styles';
import { selectCount } from '../components/xSlice';

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