import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Pressable, Text, Image, Platform, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, withSpring, withTiming, interpolate, Easing } from 'react-native-reanimated';

export function CustomHeader({ logoStyle }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isMobile = width < 768;

  const menuAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(isMenuOpen ? 0 : 300, {
          damping: 20,
          stiffness: 90,
          mass: 1,
        }) },
      ],
      opacity: withTiming(isMenuOpen ? 1 : 0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
    };
  });

  const burgerLine1Style = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: withSpring(`${interpolate(isMenuOpen ? 1 : 0, [0, 1], [0, 45])}deg`, {
        damping: 15,
        stiffness: 120,
      }) },
      { translateY: withSpring(interpolate(isMenuOpen ? 1 : 0, [0, 1], [0, 8]), {
        damping: 15,
        stiffness: 120,
      }) }
    ],
  }));

  const burgerLine2Style = useAnimatedStyle(() => ({
    opacity: withTiming(isMenuOpen ? 0 : 1, {
      duration: 200,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    }),
    transform: [
      { scaleX: withSpring(isMenuOpen ? 0 : 1, {
        damping: 15,
        stiffness: 120,
      }) }
    ],
  }));

  const burgerLine3Style = useAnimatedStyle(() => ({
    transform: [
      { rotateZ: withSpring(`${interpolate(isMenuOpen ? 1 : 0, [0, 1], [0, -45])}deg`, {
        damping: 15,
        stiffness: 120,
      }) },
      { translateY: withSpring(interpolate(isMenuOpen ? 1 : 0, [0, 1], [0, -8]), {
        damping: 15,
        stiffness: 120,
      }) }
    ],
  }));

  const NavLinks = useCallback(() => (
    <>
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
    </>
  ), []);

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <Animated.View style={[styles.logoContainer, logoStyle]}>
        <Image
          source={require('../assets/quba-logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animated.View>

      {isMobile ? (
        <>
          <Pressable style={styles.burgerMenu} onPress={() => setIsMenuOpen(!isMenuOpen)}>
            <Animated.View style={[styles.burgerLine, burgerLine1Style]} />
            <Animated.View style={[styles.burgerLine, burgerLine2Style]} />
            <Animated.View style={[styles.burgerLine, burgerLine3Style]} />
          </Pressable>
          
          <Animated.View style={[styles.mobileMenu, menuAnimation]}>
            <NavLinks />
          </Animated.View>
        </>
      ) : (
        <View style={styles.navContainer}>
          <NavLinks />
        </View>
      )}
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
    marginRight: 'auto',
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
  burgerMenu: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 0,
  },
  burgerLine: {
    width: 30,
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  mobileMenu: {
    position: 'absolute',
    top: 80,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
    borderRadius: 8,
    width: 250,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
      },
    }),
  },
});