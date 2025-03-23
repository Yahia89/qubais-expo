import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

export default function TabLayout() {
  const [loaded] = useFonts({
    Ionicons: require('../../assets/fonts/Ionicons.ttf'),
  });

  useEffect(() => {
    if (!loaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#25292e',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShadowVisible: false,
        headerTintColor: '#25292e',
        tabBarStyle: {
          // backgroundColor: '#F1EDE9',
          borderTopWidth: 1,
          borderTopColor: '#94ACD4',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="programs"
        options={{
          title: 'Programs',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'list-sharp' : 'list-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about-us"
        options={{
          title: 'Information',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="inquire"
        options={{
          title: 'Talk to us',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'mail-sharp' : 'mail-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="jupiter"
        options={{
          title: 'Jupiter',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'planet-sharp' : 'planet-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
