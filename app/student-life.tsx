import { Text, View, StyleSheet, ImageBackground, useWindowDimensions, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
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

export default function StudentLife() {
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
              <Text style={styles.sectionTitle}>Clubs & Activities</Text>
              <Text style={styles.description}>
              Retreats are scheduled to bring families together for fun and quality time. Some retreats provide the setting for educational workshops while others are offered to just give a break from the hectic schedule of daily life. The camps are held in the local mountains. The camps have been for several years now and children as well as their parents enjoy attending.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Athletics</Text>
              <Text style={styles.description}>
                Content for Athletics will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Spiritual Life / Character Education</Text>
              <Text style={styles.description}>
                Content and pictures of students praying and Iftar Nights will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Field Trips & Events</Text>
              <Text style={styles.description}>
                Content and pictures of field trips and events will go here...
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Student Leadership</Text>
              <Text style={styles.description}>
                Our Student Council is a vibrant and essential part of student life. It provides students with a platform to develop leadership skills, build confidence, and take an active role in shaping our school community. Through organizing events, fundraising efforts, and service projects, student council members learn the value of teamwork, responsibility, and civic engagement—all within an Islamic framework. Elected representatives serve as the voice of their peers, promoting school spirit and fostering a sense of unity and collaboration across all grade levels. Our goal is to empower students to become thoughtful, ethical leaders both inside and outside the classroom.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <GlassCard>
              <Text style={styles.sectionTitle}>After-School Programs</Text>
              <Text style={styles.subTitle}>Homework Club</Text>
              <Text style={styles.description}>
              For those parents who need to pick up their children later or who would just like help with their children's homework, an extra session is offered from 3:15 PM -5:30 PM. This allows students to finish their homework and focus on subjects in which they may require extra help.
              </Text>
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
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 80,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }
});