import { useFonts } from 'expo-font';
import { Link, Slot } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import store from '../../store';

SplashScreen.setOptions({ fade: true });
SplashScreen.preventAutoHideAsync();

export default function NavDrawer() {
  const [loaded, error] = useFonts({
    'Inter_18pt-ExtraLight': require('./assets/fonts/Inter/static/Inter_18pt-ExtraLight.ttf'),
    'Inter_24pt-ExtraLight': require('./assets/fonts/Inter/static/Inter_24pt-ExtraLight.ttf'),
    'Inter_28pt-ExtraLight': require('./assets/fonts/Inter/static/Inter_28pt-ExtraLight.ttf'),
    'Inter_28pt-BlackItalic': require('./assets/fonts/Inter/static/Inter_28pt-BlackItalic.ttf')
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
        </header>
        <Slot />
      </div>
    )
  }
  
  // todo: support 'macos', later 'windows'
  return ( // ios, android
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ drawerActiveTintColor: '#00C8B3' }}>
          <Drawer.Screen
            name="views/index"
            options={{
              drawerLabel: 'Dashboard',
              title: 'Dashboard',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'home' : 'home-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/voice-note-capture/index"
            options={{
              drawerLabel: 'Note Capture',
              title: 'Note Capture',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'mic' : 'mic-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/editor/index"
            options={{
              drawerLabel: 'Genie Editor',
              title: 'Genie Editor',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'create' : 'create-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/genie-notes/index"
            options={{
              drawerLabel: 'My Notes',
              title: 'My Notes',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'copy' : 'copy-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/messenger/(tabs)"
            options={{
              drawerLabel: 'Messenger',
              title: 'Messenger',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'send' : 'send-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/insights-center/index"
            options={{
              drawerLabel: 'Genie Insights',
              title: 'Genie Insights', // or "Genie Digest"?,
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'bulb' : 'bulb-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/tools/(tabs)"
            options={{
              drawerLabel: 'Tools',
              title: 'Tools',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'hammer' : 'hammer-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/files/index"
            options={{
              drawerLabel: 'Documents',
              title: 'Documents',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'document' : 'document-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/user/index"
            options={{
              drawerLabel: 'Account',
              title: 'Account',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'person' : 'person-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/settings/index"
            options={{
              drawerLabel: 'Settings',
              title: 'Settings',
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'settings' : 'settings-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
          <Drawer.Screen
            name="views/active-session/index"      
            options={{
              drawerLabel: 'Log Out',
              title: 'Log Out',          
              drawerIcon: ({ focused, size, color }) => (
                <Ionicons
                  name={focused ? 'exit' : 'exit-outline'} // Example: different icon for focused state
                  size={size}
                  color={color}
                />
              )
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </Provider>
  );
}
