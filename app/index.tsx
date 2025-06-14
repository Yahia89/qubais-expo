import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { HeroCard } from '../components/HeroCard';
import { NavigationGrid } from '@/components/NavigationGrid';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import { Footer } from '../components/Footer';

export default function Index() {
  const scrollY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  useEffect(() => {
    contentOpacity.value = withTiming(1, { duration: 1000 });
  }, []);

  const contentStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImage}>
        <ImageBackground
          source={require('../assets/images/school-bg.png')}
          style={styles.backgroundImageContent}
          resizeMode="cover"
        />
      </View>
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Animated.View style={[styles.content, contentStyle]}>
          <ScrollReveal delay={200}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Welcome to Our School</Text>
              <View style={styles.welcomeContainer}>
                <View style={styles.logoContainer}>
                  <Image
                    source={require('../assets/images/wasc-logo-Photoroom.png')}
                    style={styles.wascLogo}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.description}>
                    A WASC accredited K-12, we are a private Islamic school that focuses on fulfilling the academic and character development needs of Muslim students. Our school provides small class sizes with low student-teacher ratios in a safe, secure and nurturing campus community. We take pride in instilling lasting Islamic values while maintaining highly qualified teachers and a robust academic program. 
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
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <NavigationGrid />
            </GlassCard>
          </ScrollReveal>
        </Animated.View>
        <Footer />
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
  },
  backgroundImageContent: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    marginTop: 40,
  },
  scrollViewContent: {
    flexGrow: 1,
    minHeight: '100%',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    marginBottom: 15,
    textAlign: 'justify',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  swipeText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 8,
    fontStyle: 'italic',
    opacity: 0.8
  },
  welcomeContainer: {
    gap: 24,
    alignItems: 'center',
    marginBottom: 16,
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  },
  textContainer: {
    flex: 1,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
  },
  logoContainer: {
    width: '100%',
    maxWidth: 250, // Increased from 200
    alignSelf: 'center',
    '@media (min-width: 768px)': {
      width: 250, // Increased from 200
      order: 2,
    },
  },
  wascLogo: {
    width: '100%',
    height: 150, // Increased from 120
  },
});