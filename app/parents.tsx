import { Text, View, StyleSheet, ImageBackground, Linking, TouchableOpacity } from 'react-native';
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

export default function Parents() {
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
              <Text style={styles.sectionTitle}>Parent Resources and School policies</Text>
              <Text style={styles.description}>
                Access comprehensive information for parents including school policies, procedures, and guidelines through our Parent Handbook. This document contains everything you need to know about our school community, academic expectations, and important policies.
              </Text>
              <TouchableOpacity 
                style={styles.downloadButton}
                onPress={() => Linking.openURL('/assets/QIS-Parent-Handbook.pdf')}
              >
                <Text style={styles.downloadButtonText}>Download Parent Handbook PDF</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.jupiterButton}
                onPress={() => Linking.openURL('https://login.jupitered.com/login/')}
              >
                <Text style={styles.jupiterButtonText}>Access Jupiter Portal</Text>
              </TouchableOpacity>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Uniform Guidelines</Text>
              <Text style={styles.description}>
                See attached Student Handbooks for Elementary, Middle and High School
              </Text>
              <TouchableOpacity 
                style={styles.downloadButton}
                onPress={() => Linking.openURL('/assets/QIS-Dress-Code-Policy.pdf')}
              >
                <Text style={styles.downloadButtonText}>Download Dress Code Policy PDF</Text>
              </TouchableOpacity>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <GlassCard>
              <Text style={styles.sectionTitle}>PTA</Text>
              <Text style={styles.description}>
                Our Parent-Teacher Association (PTA) is the heart of our school community. It brings together parents, teachers, and staff in a collaborative partnership to support student success and enrich the school experience for every child.
              </Text>
              <Text style={styles.description}>
                The PTA plays a vital role in organizing school events, coordinating volunteer opportunities, and building a strong sense of unity and purpose among families and faculty. From teacher appreciation activities to student celebrations, the PTA helps make our school a vibrant and welcoming place.
              </Text>
              <Text style={styles.description}>
                We invite all parents to get involved — whether through attending meetings, volunteering your time, or simply sharing your ideas. Your voice and participation make a difference.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Volunteering Opportunities</Text>
              <Text style={styles.description}>
                We believe that a strong school community is built through the active involvement of our families. At our school, we welcome and encourage parents to take part in the many volunteering opportunities available throughout the year.
              </Text>
              <Text style={styles.description}>
                Whether it's assisting with classroom activities, supervising field trips, helping during school events, supporting the PTA, or sharing your professional skills — your time and dedication make a meaningful impact on our students' education and well-being.
              </Text>
              <Text style={styles.description}>
                Volunteering is a wonderful way to stay connected with your child's school experience, build relationships with teachers and other parents, and contribute to the nurturing, faith-centered environment we all value.
              </Text>
              <Text style={styles.description}>
                There's a place for everyone to contribute — no matter how much time you have to give. Together, we can make a difference.
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 75,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  downloadButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  jupiterButton: {
    backgroundColor: '#333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
  jupiterButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});