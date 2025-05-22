import React from 'react';
import { View, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
} from 'react-native-reanimated';

const STAR_COUNT = 20;

export const ShootingStars: React.FC = () => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const isVerySmallScreen = width < 400;

  const stars = Array.from({ length: STAR_COUNT }, (_, index) => {
    const delay = Math.random() * 6000; // Increased delay between stars
    const topPosition = Math.random() * (height * 0.8);
    const leftPosition = -50;
    const translateXDistance = isSmallScreen ? width * 0.8 : width + 100;

    const starStyle = useAnimatedStyle(() => ({
      opacity: withRepeat(
        withDelay(
          delay,
          withTiming(1, {
            duration: 5000, // Increased duration for slower movement
            easing: Easing.linear,
          })
        ),
        -1,
        true
      ),
      transform: [
        { translateX: withRepeat(
          withDelay(
            delay,
            withTiming(translateXDistance, {
              duration: 5000, // Matching duration
              easing: Easing.linear,
            })
          ),
          -1,
          true
        )},
      ],
    }));

    return { style: starStyle, top: topPosition, left: leftPosition };
  });

  return (
    <View style={[styles.night, { width: width * 2, height: height * 2 }]}>
      {stars.map((star, index) => (
        <Animated.View
          key={`star-${index}`}
          style={[
            styles.shootingStar,
            isVerySmallScreen ? styles.shootingStarVerySmall : 
            isSmallScreen ? styles.shootingStarSmall : styles.shootingStar,
            { top: star.top, left: star.left },
            star.style,
          ]}
        >
          <View style={[
            styles.starTail,
            isVerySmallScreen ? styles.starTailVerySmall :
            isSmallScreen ? styles.starTailSmall : styles.starTail,
          ]} />
          <View style={[
            styles.starHead,
            isVerySmallScreen ? styles.starHeadVerySmall :
            isSmallScreen ? styles.starHeadSmall : styles.starHead,
          ]} />
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  night: {
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    transform: [{ rotate: '45deg' }],
    zIndex: 0,
    pointerEvents: 'none',
    overflow: 'hidden',
  },
  shootingStar: {
    position: 'absolute',
    height: 2,
    width: 100,
    backgroundColor: 'rgba(95, 145, 255, 1)',
    borderRadius: 999,
    shadowColor: 'rgba(105, 155, 255, 1)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
    ...(Platform.OS === 'web' && {
      filter: 'drop-shadow(0 0 6px rgba(105, 155, 255, 1))',
    }),
  },
  shootingStarSmall: {
    width: 40,
    height: 1.5,
  },
  shootingStarVerySmall: {
    width: 30,
    height: 1,
  },
  starTail: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 15,
    height: 2,
    backgroundColor: 'rgba(95, 145, 255, 0.8)', // Fallback for mobile
    borderRadius: 100,
    ...(Platform.OS === 'web' && {
      background:
        'linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
    }),
  },
  starTailSmall: {
    width: 12,
    height: 1.5,
  },
  starTailVerySmall: {
    width: 10,
    height: 1,
  },
  starHead: {
    position: 'absolute',
    top: -1,
    right: 0,
    width: 4,
    height: 4,
    backgroundColor: 'rgba(95, 145, 255, 1)', // Fallback for mobile
    borderRadius: 100,
    transform: [{ rotate: '-45deg' }],
    ...(Platform.OS === 'web' && {
      background:
        'linear-gradient(-45deg, rgba(0, 0, 255, 0), rgba(95, 145, 255, 1), rgba(0, 0, 255, 0))',
    }),
  },
  starHeadSmall: {
    width: 3,
    height: 3,
    top: -0.75,
  },
  starHeadVerySmall: {
    width: 2,
    height: 2,
    top: -0.5,
  },
});