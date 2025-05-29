import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import { GoogleTag } from '../components/GoogleTag.web';
import { CustomHeader } from '../components/CustomHeader';
import { Footer } from '../components/Footer';

export default function RootLayout() {
  return (
    <View style={styles.container}>
      <GoogleTag />
      <Stack
        screenOptions={{
          headerShown: true,
          header: () => <CustomHeader logoStyle={{ opacity: 1 }} />
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="about-us" />
        <Stack.Screen name="admissions" />
        <Stack.Screen name="academics" />
        <Stack.Screen name="student-life" />
        <Stack.Screen name="parents" />
        <Stack.Screen name="news" />
        <Stack.Screen name="inquire" />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100vh',
  }
});