import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Pressable, Text, Image, Platform, useWindowDimensions, Linking } from 'react-native';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { useAnimatedStyle, withSpring, withTiming, interpolate, Easing } from 'react-native-reanimated';

export function CustomHeader({ logoStyle }: { logoStyle?: any }) {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = width < 768;
  const isMediumScreen = width >= 768 && width < 1024;
  const isLargeScreen = width >= 1024;

  const menuAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(isMenuOpen ? 0 : 300, {
            damping: 20,
            stiffness: 90,
            mass: 1,
          }),
        },
      ],
      opacity: withTiming(isMenuOpen ? 1 : 0, {
        duration: 300,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }),
    };
  });

  const progress = isMenuOpen ? 1 : 0;

  const burgerLine1Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: withSpring(`${interpolate(progress, [0, 1], [0, 45])}deg`, {
            damping: 18,
            stiffness: 160,
          }),
        },
        {
          translateY: withSpring(interpolate(progress, [0, 1], [0, 10]), {
            damping: 18,
            stiffness: 160,
          }),
        },
      ],
    };
  });

  const burgerLine2Style = useAnimatedStyle(() => {
    return {
      opacity: withTiming(interpolate(progress, [0, 1], [1, 0]), {
        duration: 200,
        easing: Easing.out(Easing.ease),
      }),
      transform: [
        {
          scaleX: withTiming(interpolate(progress, [0, 1], [1, 0]), {
            duration: 200,
            easing: Easing.out(Easing.ease),
          }),
        },
      ],
    };
  });

  const burgerLine3Style = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: withSpring(`${interpolate(progress, [0, 1], [0, -45])}deg`, {
            damping: 18,
            stiffness: 160,
          }),
        },
        {
          translateY: withSpring(interpolate(progress, [0, 1], [0, -10]), {
            damping: 18,
            stiffness: 160,
          }),
        },
      ],
    };
  });

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
      <View style={styles.separator} />
      <Pressable 
        style={[styles.navItem, styles.jupiterNavItem]}
        onPress={() => Linking.openURL('https://login.jupitered.com/login/')}
      >
        <Text style={[styles.navText, styles.jupiterNavText]}>JupiterED</Text>
      </Pressable>
    </>
  ), []);

  return (
    <View style={[
      styles.header, 
      { paddingTop: insets.top },
      isMediumScreen && { paddingHorizontal: 32 },
      isLargeScreen && { paddingHorizontal: 40 }
    ]}>
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
        <View style={[
          styles.navContainer,
          isMediumScreen && { gap: 16, marginLeft: 24 },
          isLargeScreen && { gap: 24, marginLeft: 32 }
        ]}>
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
    paddingHorizontal: 24,
    height: 100,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    minWidth: 0,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
      },
    }),
  },
  navContainer: {
    flexDirection: 'row',
    gap: 20,
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    minWidth: 0,
    flexWrap: 'wrap',
  },
  logoContainer: {
    position: 'relative',
    width: 120,
    height: 80,
    flexShrink: 0,
    marginRight: 0,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  navItem: {
    padding: 12,
    minWidth: 60,
  },
  navText: {
    fontSize: 16,
    color: '#2c365d',
    fontWeight: '500',
    textAlign: 'center',
  },
  burgerMenu: {
    width: 30,
    height: 24,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 0,
    marginLeft: 20,
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
    backgroundColor: 'rgba(255, 255, 255, 0.74)',
    padding: 20,
    borderRadius: 8,
    width: 250,
    ...Platform.select({
      web: {
        backdropFilter: 'blur(10px)',
      },
    }),
  },
  separator: {
    width: 1,
    height: 20,
    backgroundColor: '#ccc',
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  jupiterNavItem: {
    backgroundColor: 'rgb(45, 75, 113)',
    borderRadius: 6,
    borderBottomWidth: 2,
    borderBottomColor: '#fcb040',
  },
  jupiterNavText: {
    color: '#fcb040',
    fontWeight: '600',
  },
});
