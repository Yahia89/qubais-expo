import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, Linking } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import { Footer } from '../components/Footer';

export default function News() {
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
      >
        <Animated.View style={[styles.content, contentStyle]}>
          <ScrollReveal delay={200}>
            <GlassCard>
              <Text style={styles.sectionTitle}>School Calendar</Text>
              <View style={styles.calendarContainer}>
                <Image
                  source={require('../assets/images/QIS-Calendar2025-2026.png')}
                  style={styles.calendarImage}
                  resizeMode="contain"
                />
                <TouchableOpacity 
                  style={styles.downloadButton}
                  onPress={() => Linking.openURL('/assets/QIS-Calendar2025-2026.pdf')}
                >
                  <Text style={styles.downloadButtonText}>Download Calendar PDF</Text>
                </TouchableOpacity>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Announcements</Text>
              <Text style={styles.description}>
                Announcement coming soon...
              </Text>
              {/* Placeholder for future announcements */}
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            {/* <GlassCard>
              <Text style={styles.sectionTitle}>Photo & Video Gallery</Text>
              <Text style={styles.description}>
      
              </Text>
            </GlassCard> */}
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
    paddingHorizontal: 16, // Add horizontal padding
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
    opacity: 0.65,
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    marginTop: 40,
    flexGrow: 1,
    minHeight: '100%',
  },
  content: {
           padding: 20,
    paddingHorizontal: 40, // More horizontal padding
    marginHorizontal: 8, // Additional margin from edges
    '@media (min-width: 768px)': {
      paddingHorizontal: 40, // More padding on larger screens
      marginHorizontal: 20,
    },
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c365d',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 70,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  calendarContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  calendarImage: {
    width: '100%',
    height: 400,
  },
  downloadButton: {
    backgroundColor: '#E31B23',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});