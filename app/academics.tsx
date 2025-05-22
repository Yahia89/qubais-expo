import { Text, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity } from 'react-native';
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

export default function Academics() {
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
              <Text style={styles.sectionTitle}>Elementary School (K–5)</Text>
              <Text style={styles.description}>
                Content for Elementary School will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Middle School (6–8)</Text>
              <Text style={styles.description}>
                Content for Middle School will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <Text style={styles.sectionTitle}>High School (9–12)</Text>
              <Text style={styles.description}>
                Content for High School will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Curriculum Overview</Text>
              <Text style={styles.description}>
                Content for Curriculum Overview will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Graduation Requirements</Text>
              <Text style={styles.description}>
                Content for Graduation Requirements will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Technology Integration</Text>
              <Text style={styles.description}>
                Content for Technology Integration will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Assessment & Testing</Text>
              <Text style={styles.description}>
                Content for Assessment & Testing will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Academic Calendar 2025-2026</Text>
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
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: '120%',
  },
  backgroundImageContent: {
    flex: 1,
    opacity: 0.65,
  },
  scrollView: {
    flex: 1,
    marginTop: 40,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  calendarContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  calendarGrid: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
  },
  calendarLegend: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 15,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 14,
    color: '#fff',
  },
  monthsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: 20,
  },
  semesterSection: {
    flex: 1,
    minWidth: 300,
    maxWidth: 600,
  },
  monthCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  dayHeader: {
    width: 30,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dayCell: {
    width: '14.28%',
    height: 30,
    textAlign: 'center',
    color: '#fff',
    padding: 5,
  },
  noSchoolDay: {
    backgroundColor: '#ff9800',
    borderRadius: 4,
  },
  firstLastDay: {
    backgroundColor: '#ffeb3b',
    borderRadius: 4,
  },
  importantDay: {
    backgroundColor: '#4caf50',
    borderRadius: 4,
  },
  profDevDay: {
    backgroundColor: '#2196f3',
    borderRadius: 4,
  },
  eventsList: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  eventItem: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  calendarImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.4, // Adjust this based on your image's aspect ratio
    marginBottom: 20,
  },
  downloadButton: {
    backgroundColor: '#2c365d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});