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
                These activities allow Muslim boys and girls to develop athletic skills and learn the essentials of good teamwork. They also learn how to compete in a healthy fashion while remaining focused on teamwork, respect and the art of winning with humility and losing with grace.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Spiritual Life / Character Education</Text>
              <View>
                <Text style={styles.description}>
                  Quba Islamic School utilizes ICO's Islamic curriculum which seeks to ground the next generation of Muslims to authentic Islamic beliefs, values and norms – with an emphasis on boosting the level of communication between adults and young people. Muslims worldwide share a common set of values based upon the Qur'an and Sunnah of Prophet Muhammad(saw). The material of our adopted curriculum aims to help students develop spiritually and morally, take pride in being Muslims, and achieve balanced personalities that reflect the moderation of Islam. Finally, the content of this series is presented in a spiral approach, whereby students revisit each area of study and examine it in greater depth each year. Age-appropriate illustrations and pictures throughout the series help solidify important concept.
                </Text>

                <Text style={styles.subSectionTitle}>Key Features include:</Text>
                <View style={styles.listContainer}>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Integrated review units</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Additional practice materials</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>A framework for instruction in Islamic studies</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Assistance in learning the correct practice of Islam</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Islamic teachings impart key beliefs, norms and values</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Moral guidance for students living in the West</Text>
                  </View>
                </View>

                <Text style={styles.subSectionTitle}>ICO curriculum is a distinguished one because:</Text>
                <View style={styles.listContainer}>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>This curriculum meets the needs of the target group for integrated, coherent, and appropriate curricula.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>They were prepared according to scient
ific bases, assimilating the most recent educational and psychological theories.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>They were prepared by special educationists who are experienced in designing curricula and who are familiar with the needs of the target group.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>They employed the most recent techniques and educational aids.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>They went through many quality control processes, which were carried out by specialized committees, and they were enhanced by teachers who evaluated the curricula before releasing them.</Text>
                  </View>
                </View>

                <Text style={styles.subSectionTitle}>The Instructional and Linguistic Features:</Text>
                <View style={styles.listContainer}>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Reinforce the proper linguistic basis of the non-Arabic speaking students.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>They build the students' linguistic dictionary according to their environmental needs.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Provide non-Arabic speaking students with a good deal of Islamic vocabulary.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Identify the correct articulations of the different sounds, through the study of the Glorious Qur'an.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Enable the students to evade making mistakes when reciting the Glorious Qur'an through employing the rules of the Arabic language.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Provide an integrated curriculum with well-prepared scientific content and vocabulary.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Take into consideration the students' individual mental differences and their diverse linguistic skills.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Consider the students' different cultures.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Develop the students' creativity and mental faculties.</Text>
                  </View>
                </View>

                <Text style={styles.subSectionTitle}>The Educational Content Features:</Text>
                <View style={styles.listContainer}>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Reinforce the principle of forgiveness and the etiquettes of disagreement with others.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Develop the spirituality, morality, and values of the students.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Help students have good and balanced personalities.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Develop the students' pride in their Muslim identity.</Text>
                  </View>
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>Help the Caller to Islam to develop a balanced personality that reflects the moderation of Islam.</Text>
                  </View>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            {/* <GlassCard>
              <Text style={styles.sectionTitle}>Field Trips & Events</Text>
              <Text style={styles.description}>
                Content and pictures of field trips and events will go here...
              </Text>
            </GlassCard> */}
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
              For those parents who need to pick up their children later or who would just like help with their children's homework, an extra session is offered from 3:25 PM -5:30 PM. This allows students to finish their homework and focus on subjects in which they may require extra help.
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
  },
  subSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  listContainer: {
    marginVertical: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  bullet: {
    fontSize: 16,
    color: '#2c365d',
    marginRight: 10,
    marginTop: 2,
    fontWeight: 'bold',
  },
  listText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});