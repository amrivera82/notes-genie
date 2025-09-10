import { useSession } from '@/ctx';
import React from 'react';
import { Button, Text, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import SessionInfo from './SessionInfo';
import { styles } from './styles.js';

export default function () {
  const [username, onUsernameChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');
  const { signIn } = useSession();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ margin: 'auto', width: '75%' }}>
        <Text style={styles.buttonLabel}>Username</Text>
        <TextInput
          style={styles.input}
          onChangeText={onUsernameChange}
          placeholder='username'
          value={username}
        />
        <Text style={styles.buttonLabel}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onPasswordChange}
          value={password}
          placeholder='****'
          secureTextEntry={true}
          id='password'
        />
        <Button title='Sign In'
          color='#0000bcff'
          onPress={() => {
            signIn(new SessionInfo(username, password, ''));
          }}
        />
        <Button title='Forgot Username'></Button>
        <Button title='Forgot Password'></Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};