import React, { useMemo } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate, Extrapolation } from 'react-native-reanimated';
import { ShootingStars } from './ShootingStars';

interface Props {
  scrollY: Animated.SharedValue<number>;
  contentHeight: number;
}

export const ParallaxBackground: React.FC<Props> = ({ scrollY, contentHeight }) => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const isVerySmallScreen = width < 400;

  const containerStyle = useMemo(() => {
    const baseHeight = height * (isVerySmallScreen ? 0.3 : isSmallScreen ? 0.4 : 0.6);
    return {
      height: baseHeight,
      bottom: 0,
    };
  }, [height, isSmallScreen, isVerySmallScreen]);

  const buildingStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollY.value,
      [-100, 0, contentHeight * 0.5, contentHeight],
      isVerySmallScreen
        ? [0.6, 0.6, 0.3, 0.3]
        : isSmallScreen
        ? [0.7, 0.7, 0.4, 0.4]
        : [1, 1, 0.7, 0.7],
      Extrapolation.CLAMP
    );
    const translateY = interpolate(
      scrollY.value,
      [-100, 0, contentHeight * 0.5, contentHeight],
      isVerySmallScreen
        ? [0, 0, -height * 0.2, -height * 0.2]
        : isSmallScreen
        ? [0, 0, -height * 0.25, -height * 0.25]
        : [0, 0, -height * 0.3, -height * 0.3],
      Extrapolation.CLAMP
    );
    const opacity = interpolate(
      scrollY.value,
      [0, contentHeight * 0.5, contentHeight],
      [1, 0.8, 0.8],
      Extrapolation.CLAMP
    );
    return {
      transform: [
        { scale },
        { translateY: translateY + (1 - scale) * containerStyle.height * 0.5 },
      ],
      transformOrigin: 'bottom center',
      opacity,
    };
  });

  return (
    <>
      <Image
        source={require('../assets/images/sky.png')}
        style={styles.skyBackground}
        resizeMode="cover"
      />
      {/* <ShootingStars /> */}
      <Animated.View style={[styles.buildingContainer, containerStyle, buildingStyle]}>
        <Image
          source={require('../assets/images/Subject 3(1).png')}
          style={[styles.layerImage, { alignSelf: 'flex-end' }]}
          resizeMode="contain"
        />
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  skyBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  buildingContainer: {
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 0,
    overflow: 'hidden',
  },
  layerImage: {
    width: '100%',
    height: '100%',
  },
});