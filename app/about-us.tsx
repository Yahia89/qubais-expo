import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity, ImageBackground, useWindowDimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { PrincipalsMessage } from '../components/PrincipalsMessage';
import { GlassCard } from '../components/GlassCard';
import { Footer } from '../components/Footer';

export default function AboutUs() {
  const { height } = useWindowDimensions();
  const scrollY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  // Inside your component:
const scale = useSharedValue(1);

useEffect(() => {
  scale.value = withRepeat(
    withSequence(
      withTiming(1.1, { duration: 1000 }),
      withTiming(1, { duration: 1000 })
    ),
    -1,
    true
  );
}, []);

const blobStyle = useAnimatedStyle(() => ({
  transform: [{ scale: scale.value }],
}));

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

  const handlePress = (type: string) => {
    switch (type) {
      case 'phone1':
        Linking.openURL('tel:9096205297');
        break;
      case 'phone2':
        Linking.openURL('tel:9097668362');
        break;
      case 'email':
        Linking.openURL('mailto:info@qubais.org');
        break;
      case 'address':
        Linking.openURL('https://maps.google.com/?q=1127 Otterbein Ave, Rowland Heights, CA 91748');
        break;
      case 'phone':
        Linking.openURL('tel:9096205297');
        break;
      case 'fax':
        // Fax numbers typically don't need to be clickable
        break;
    }
  };

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
        <GlassCard>
          <ScrollReveal delay={200}>
                <Text style={{textAlign:"center", color:"#333", fontSize:"24px"}}>Our Vision</Text>
                <Text style={{textAlign:"center", color:"#000", marginTop:70, marginBottom:20}}>
                  The purpose of Quba Islamic School is to nourish the new generation of students – our future leaders – to enable them to become critical thinkers, lifelong learners, and believers in positive action; so that they can become the moral compass in their own communities as well as global domains.
                </Text>                
                <Text style={{textAlign:"center", color:"#333", fontSize:"24px"}}>Mission Statement</Text>
                <Text style={{textAlign:"center", color:"#000", marginTop:20, marginBottom:20}}>
                  We deliver on our vision through the following goals and guidelines:
                </Text>                
                <View style={styles.missionItems}>
                  <View style={styles.missionItem}>
                    <Text style={styles.missionItemTitle}>Students</Text>
                    <Text style={styles.missionItemText}>
                      Our children are the amanah (trust) of Allah (swt) and it is ultimately their benefit that steers our decision-making process.
                    </Text>
                  </View>                  
                  <View style={styles.missionItem}>
                    <Text style={styles.missionItemTitle}>Teachers</Text>
                    <Text style={styles.missionItemText}>
                      The single most important factor in the success of students is the teachers. We seek out and partner with the best teachers and provide them with resources and training opportunities to excel in their mission.
                    </Text>
                  </View>                  
                  <View style={styles.missionItem}>
                    <Text style={styles.missionItemTitle}>Parents</Text>
                    <Text style={styles.missionItemText}>
                      No one has more influence on children than their parents. We team up with parents and ensure that our children have overall positive learning environments both at school and at home.
                    </Text>
                  </View>                  
                  <View style={styles.missionItem}>
                    <Text style={styles.missionItemTitle}>Environment</Text>
                    <Text style={styles.missionItemText}>
                      Rooted in Islamic manners and etiquette, our environment is safe, friendly, creative, and respectful for our learners.
                    </Text>
                  </View>
                  <View style={styles.missionItem}>
                    <Text style={styles.missionItemTitle}>Administration</Text>
                    <Text style={styles.missionItemText}>
                      With the intention of pleasing Allah (swt) we remain committed to seeking out the best for our students, parents, teachers, admin team members, and volunteers.
                    </Text>
                  </View>
                </View>
          </ScrollReveal>
          </GlassCard>
          <ScrollReveal delay={300}>
                <GlassCard>
                  <View style={styles.wascContainer}>
                    <View style={styles.wascLogoContainer}>
                      <Image
                        source={require('../assets/images/Accredited-logo.png')}
                        style={styles.wascLogo}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={styles.wascTextContainer}>
                      <Text style={[styles.wascText, styles.missionItemText]}>
                        A WASC accredited K-12, we are a private Islamic school that focuses on fulfilling the academic and character development needs of Muslim students. Our school provides small class sizes with low student-teacher ratios in a safe, secure and nurturing campus community. We take pride in instilling lasting Islamic values while maintaining highly qualified teachers and a robust academic program.
                      </Text>
                    </View>
                  </View>
                </GlassCard>
          </ScrollReveal>
          <ScrollReveal  delay={350}>
            <PrincipalsMessage />
          </ScrollReveal>
          <ScrollReveal delay={375}>
            <GlassCard>
              <View style={{  paddingHorizontal: 25 }}>
                <Text style={{textAlign:"center", color:"#333", fontSize:"24px", marginBottom: 30}}>Faculty & Staff Directory</Text>
                
                <View style={styles.staffMember}>
                  <Text style={styles.staffName}>Ms. Nadia Kashuka</Text>
                  <Text style={styles.staffTitle}>Principal</Text>
                </View>
                
                <View style={styles.staffMember}>
                  <Text style={styles.staffName}>Hala Elattar</Text>
                  <Text style={styles.staffTitle}>Admission Coordinator / Office Manager</Text>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>
          <ScrollReveal delay={400}>
                <GlassCard>
                  <View style={{ paddingVertical: 45, paddingHorizontal: 25 }}>
                    <Text style={{textAlign:"center", color:"#333", fontSize:"24px"}}>Contact Us</Text>
                    <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('address')}>
                      <Ionicons name="location-outline" size={24} color="#333" />
                      <Text style={styles.contactText}>1127 Otterbein Ave, Rowland Heights, CA 91748</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('phone')}>
                      <Ionicons name="call-outline" size={24} color="#333" />
                      <Text style={styles.contactText}>(909) 620-5297</Text>
                    </TouchableOpacity>
                    <View style={styles.contactItem}>
                      <Ionicons name="print-outline" size={24} color="#333" />
                      <Text style={styles.contactText}>Fax: (909) 766-8362</Text>
                    </View>
                    <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('email')}>
                      <Ionicons name="mail-outline" size={24} color="#333" />
                      <Text style={styles.contactText}>info@qubais.org</Text>
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
    opacity: 0.65,
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
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  wascContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
    padding: 10,
  },
  wascLogoContainer: {
    flex: 1,
    minWidth: 250,
    maxWidth: 400,
    aspectRatio: 2.5,
    borderRadius: 10,
  },
  wascLogo: {
    width: '100%',
    height: '100%',
  },
  wascTextContainer: {
    flex: 2,
    minWidth: 300,
  },
  wascText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    textAlign: 'left',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  missionItemTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
  },
  missionItemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    marginBottom: 70,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  staffMember: {
    marginBottom: 25,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(51, 51, 51, 0.1)',
  },
  staffName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    // marginBottom: 5,
  },
  staffTitle: {
    fontSize: 16,
    color: '#2c365d',
    fontStyle: 'italic',
  },
});