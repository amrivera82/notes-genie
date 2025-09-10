import { Stack } from 'expo-router';
import { SplashScreenController } from '../splash';
import { SessionProvider, useSession } from './ctx';

export default function Root() {
    // Set up the auth context and render our layout inside of it.
    return (
        <SessionProvider>
            <SplashScreenController />
            <RootNavigator />
        </SessionProvider>
    );
}

// Separate this into a new component so it can access the SessionProvider context later
function RootNavigator() {
    const { session } = useSession();
    return (
        <Stack>
            <Stack.Protected guard={!session}>
                <Stack.Screen name="index"
                    options={{
                        headerShown: false,
                        presentation: 'modal'
                    }}
                />
            </Stack.Protected>
            <Stack.Protected guard={!!session}>
                <Stack.Screen name="(app)"
                    options={{ headerShown: false }} />
            </Stack.Protected>
        </Stack>
    );
}
