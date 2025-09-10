import React from 'react';
import { View } from 'react-native';
import { RecorderPanel } from '../../components/RecorderPanel';

export default () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", top: -20 }}>
      <RecorderPanel children={{ filename: 'my-new-note.mp4' }} />
    </View>
  );
};

