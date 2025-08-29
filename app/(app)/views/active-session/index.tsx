import { useSession } from '@/ctx';
import { router } from 'expo-router';
import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../session/styles.js';

export default function () {
  const { signOut } = useSession();

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={styles.buttonLabel}>Are you sure?</Text>
        <Button title='Sign out'
          color='#0000bcff'
          onPress={() => {
            signOut();
          }}
        />
        <Button title='Cancel'
          color='#0000bcff'
          onPress={() => {
            router.replace("/(app)/views");
          }}
        />    
      </SafeAreaView>
    </SafeAreaProvider>
  );
};