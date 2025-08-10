import { useFonts } from 'expo-font';
import { Link, Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '../store';

SplashScreen.setOptions({ fade: true });
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Inter_18pt-ExtraLight': require('../assets/fonts/Inter/static/Inter_18pt-ExtraLight.ttf'),
    'Inter_24pt-ExtraLight': require('../assets/fonts/Inter/static/Inter_24pt-ExtraLight.ttf'),
    'Inter_28pt-ExtraLight': require('../assets/fonts/Inter/static/Inter_28pt-ExtraLight.ttf'),
    'Inter_28pt-BlackItalic': require('../assets/fonts/Inter/static/Inter_28pt-BlackItalic.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  if (Platform.OS === 'web') {
    // Use a basic custom layout on web.
    return (
      <div style={{ flex: 1 }}>
        <header>
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
        </header>
        <Slot />
      </div>
    )
  }

  // todo: support 'macos', later 'windows'

  return ( // ios, android
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Dashboard',
              title: 'Dashboard'
            }}
          />
          <Drawer.Screen
            name="voice-note-capture/index"
            options={{
              drawerLabel: 'Capture',
              title: 'Capture'
            }}
          />
          <Drawer.Screen
            name="editor/index"
            options={{
              drawerLabel: 'Smart Editor',
              title: 'Editor'
            }}
          />
          <Drawer.Screen
            name="saved-notes/index"
            options={{
              drawerLabel: 'My Notes',
              title: 'My Notes'
            }}
          />
          <Drawer.Screen
            name="messenger/index"
            options={{
              drawerLabel: 'Messenger',
              title: 'Messenger'
            }}
          />
          <Drawer.Screen
            name="insights-center/index"
            options={{
              drawerLabel: 'Insights Center',
              title: 'Insights Center'
            }}
          />
          <Drawer.Screen
            name="tools/index"
            options={{
              drawerLabel: 'Tools',
              title: 'Tools'
            }}
          />
          <Drawer.Screen
            name="settings/index"
            options={{
              drawerLabel: 'Settings',
              title: 'Settings'
            }}
          />
          <Drawer.Screen
            name="user/help"
            options={{
              drawerLabel: 'Support',
              title: 'Support'
            }}
          />
          <Drawer.Screen
            name="user/logout"
            options={{
              drawerLabel: 'Log Out',
              title: 'Log Out'
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </Provider>
  );
}
