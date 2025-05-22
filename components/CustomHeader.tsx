import React from 'react';
import { View, StyleSheet, Pressable, Text, Image } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';

export function CustomHeader({ logoStyle }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[
      styles.header,
      { paddingTop: insets.top }
    ]}>
      <View style={styles.navContainer}>
        <Link href="/" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Home</Text>
          </Pressable>
        </Link>
        <Link href="/about-us" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>About Us</Text>
          </Pressable>
        </Link>
        <Link href="/admissions" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Admissions</Text>
          </Pressable>
        </Link>
        <Link href="/academics" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Academics</Text>
          </Pressable>
        </Link>
      </View>

      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <Image
          source={require('../assets/quba-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      <View style={styles.navContainer}>
        <Link href="/student-life" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Student Life</Text>
          </Pressable>
        </Link>
        <Link href="/parents" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Parents</Text>
          </Pressable>
        </Link>
        <Link href="/news" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>News & Events</Text>
          </Pressable>
        </Link>
        <Link href="/inquire" asChild>
          <Pressable style={styles.navItem}>
            <Text style={styles.navText}>Contact</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 80,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
  },
  navContainer: {
    flexDirection: 'row',
    gap: 15,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'relative',
    width: 120,
    height: 40,
    marginHorizontal: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  navItem: {
    padding: 10,
  },
  navText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
});