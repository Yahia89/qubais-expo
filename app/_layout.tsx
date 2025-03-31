import { Stack } from 'expo-router';
import { GoogleTag } from '../components/GoogleTag.web';

export default function RootLayout() {
  return (
    <>
      <GoogleTag />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </>
  );
}
