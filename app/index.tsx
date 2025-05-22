import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native';
import { useNavigation } from 'expo-router';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { CustomHeader } from '../components/CustomHeader';
import { HeroCard } from '../components/HeroCard';
import { NavigationGrid } from '@/components/NavigationGrid';
import { ParallaxBackground } from '@/components/ParallaxBackground';
import { FloatingStickers } from '@/components/FloatingStickers';
import { Footer } from '../components/Footer';

const isSmallScreen = (width: number) => width < 768;

const ParallaxComponent = () => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();
  const scrollY = useSharedValue(0);
  const [heroCardHeight, setHeroCardHeight] = useState(0);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const [navigationGridHeight, setNavigationGridHeight] = useState(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const indexLogoStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(scrollY.value, [0, 150], [100, 0], Extrapolation.CLAMP),
      },
    ],
    opacity: interpolate(scrollY.value, [0, 150], [1, 0], Extrapolation.CLAMP),
  }));

  const headerLogoStyle = useAnimatedStyle(() => ({
    opacity: interpolate(scrollY.value, [100, 200], [0, 1], Extrapolation.CLAMP),
  }));

  useEffect(() => {
    navigation.setOptions({
      header: () => <CustomHeader logoStyle={headerLogoStyle} />,
    });
  }, [navigation, headerLogoStyle]);

  return (
    <View style={styles.container}>
      <ParallaxBackground scrollY={scrollY} />
      <FloatingStickers />

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.contentContainer,
          {
            paddingBottom: isSmallScreen(width) ? 200 : 300,
            minHeight: heroCardHeight + descriptionHeight + navigationGridHeight + (isSmallScreen(width) ? 500 : 600),
          },
        ]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <Animated.View style={[styles.indexLogoContainer, indexLogoStyle]}>
            <Image
              source={require('../assets/quba-logo.png')}
              style={styles.logo}
              resizeMode="contain"
            />
          </Animated.View>

          <View
            onLayout={(event) => setHeroCardHeight(event.nativeEvent.layout.height)}
          >
          <View
            style={[
              styles.descriptionContainer,
              { marginTop: 80 }, // Fixed margin instead of dynamic
            ]}
            onLayout={(event) => setDescriptionHeight(event.nativeEvent.layout.height)}
          >
            <View style={styles.descriptionContent}>
              <Text style={styles.descriptionTitle}>Welcome to Our School</Text>
              <Text style={styles.descriptionText}>
                A WASC accredited K-12, we are a private Islamic school that focuses on fulfilling the academic and character development needs of Muslim students. Our school provides small class sizes with low student-teacher ratios in a safe, secure and nurturing campus community.
              </Text>
              <Text style={styles.descriptionText}>
                We take pride in instilling lasting Islamic values while maintaining highly qualified teachers and a robust academic program.
              </Text>
            </View>
          </View>
          <Text style={styles.swipeText}>(Swipe Me)</Text>
          <HeroCard
            scrollY={scrollY}
            source={[
              require('../assets/images/DSC06614-768x432.jpg'),
              require('../assets/images/DSC06696-768x446.png'),
            ]}
            onPress={() => {}}
          />
          </View>


          <View
            onLayout={(event) => setNavigationGridHeight(event.nativeEvent.layout.height)}
          >
            <NavigationGrid />
          </View>
        <Text>Test</Text>
        </View>
        <Footer /> {/* Add Footer here so it appears at the bottom */}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
    width: '100%',
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  content: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
  },
  indexLogoContainer: {
    position: 'absolute',
    top: -70,
    width: 100,
    height: 45,
    alignSelf: 'center',
    zIndex: 100,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  descriptionContainer: {
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: 10,
    // backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  descriptionContent: {
    maxWidth: 600,
    marginHorizontal: 'auto',
    alignItems: 'center',
  },
  descriptionTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    maxWidth: 500,
  },
  swipeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
    opacity: 0.8
  },
});

export default ParallaxComponent;