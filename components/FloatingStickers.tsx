import React, { useMemo, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 768;

const STICKERS = [
  { source: require('../assets/images/Subject-2.png'), size: isSmallScreen ? 40 : 50, delay: 0 },
  { source: require('../assets/images/Subject-2.png'), size: isSmallScreen ? 48 : 60, delay: 1000 },
  { source: require('../assets/images/Subject-2.png'), size: isSmallScreen ? 56 : 70, delay: 2000 },
];

export const FloatingStickers: React.FC = () => {
  // Create shared values outside of useMemo
  const positions = STICKERS.map(() => ({
    translateX: useSharedValue(Math.random() * (isSmallScreen ? width * 0.8 : width)),
    translateY: useSharedValue(height + Math.random() * 100),
    offsetX: useSharedValue(0),
  }));

  // Create animated styles for each sticker
  const styles = STICKERS.map((_, index) => 
    useAnimatedStyle(() => ({
      transform: [
        { translateX: positions[index].translateX.value + positions[index].offsetX.value },
        { translateY: positions[index].translateY.value },
      ],
      opacity: interpolate(
        positions[index].translateY.value,
        [height, height * 0.5, -100],
        [0, 0.8, 0],
        Extrapolation.CLAMP
      ),
    }))
  );

  useEffect(() => {
    positions.forEach((position, index) => {
      position.offsetX.value = withRepeat(
        withTiming(isSmallScreen ? 32 : 40, {
          duration: 3000,
          easing: Easing.sin,
        }),
        -1,
        true
      );

      position.translateY.value = withRepeat(
        withTiming(-100, {
          duration: 8000,
          easing: Easing.linear,
          delay: STICKERS[index].delay,
        }),
        -1,
        false
      );
    });
  }, []);

  return (
    <>
      {STICKERS.map((sticker, index) => (
        <Animated.Image
          key={`sticker-${index}`}
          source={sticker.source}
          style={[
            StyleSheet.create({ sticker: { position: 'absolute', zIndex: 5 } }).sticker,
            { width: sticker.size, height: sticker.size },
            styles[index],
          ]}
          resizeMode="contain"
          pointerEvents="none"
        />
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  sticker: {
    position: 'absolute',
    zIndex: 5,
  },
});