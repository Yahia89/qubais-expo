import { Text, View, StyleSheet, ImageBackground, useWindowDimensions, TouchableOpacity, Image } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { GlassCard } from '../components/GlassCard';
import Inquire from './inquire';
import { Footer } from '../components/Footer';
import { Linking } from 'react-native';



export default function Admissions() {
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

  const handleContact = (type: 'phone' | 'email') => {
    if (type === 'phone') {
      Linking.openURL('tel:9096205297');
    } else {
      Linking.openURL('mailto:info@qubais.org');
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
      >
        <Animated.View style={[styles.content, contentStyle]}>
          <ScrollReveal delay={200}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Why Choose Us?</Text>
              <Text style={styles.description}>
              WASC Accredited School, 100%
              Accepted to High School of Choice, 
              20 years Administrator experience running private schools, 15 Maximum Class Size, 
              Choosing our school means entrusting your child’s education to a vibrant, 
              faith-centered community that combines affordability with excellence. 
              Nestled within the heart of a beautifully designed, active mosque in California, 
              our spacious, 
              light-filled classrooms provide the perfect setting for focused learning and personal growth. 
              With tuition thoughtfully structured to be accessible to every family, 
              we never compromise on quality—our dedicated, 
              highly qualified teachers foster both academic achievement and strong Islamic values. 
              Beyond the classroom, 
              students thrive through daily prayer, 
              hands-on community service, 
              and a rich array of extracurricular programs, 
              all supported by the mosque’s dynamic atmosphere. 
              Join us, and give your child the gift of an education where scholarship, 
              spirituality, and community come together seamlessly.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Enrollment Process</Text>
              <Text style={styles.subTitle}>Admissions Information Checklist</Text>
              <Text style={styles.description}>
                The following items must be completed prior to the family meeting with the Principal. No
                decision will be made before all required materials are received and any necessary assessments
                have been completed. After careful review of all applicants, admission is granted to the
                students that are deemed best qualified to benefit from the school's program.
              </Text>

              <Text style={styles.subTitle}>All applicants</Text>
              <View style={styles.checklistContainer}>
                <Text style={styles.checklistItem}>• School tour completed</Text>
                <Text style={styles.checklistItem}>• Admission Application Form completed by parent or guardian attached</Text>
                <Text style={styles.checklistItem}>• A copy of the birth certificate, immunization records, most recent report card</Text>
                <Text style={styles.checklistItem}>• Application Fee attached</Text>
                <Text style={styles.checklistItem}>• Tuition schedule reviewed</Text>
                <Text style={styles.checklistItem}>• Assessment completed</Text>
                <Text style={styles.checklistItem}>• Kindergartners require a report of health exam from a primary care physician</Text>
              </View>

              <Text style={styles.subTitle}>Grades 6-10 Applicants</Text>
              <View style={styles.checklistContainer}>
                <Text style={styles.checklistItem}>• 7th Graders must meet Immunization requirements</Text>
                <Text style={styles.checklistItem}>• Copy of current and previous year's grade/teacher reports received</Text>
                <Text style={styles.checklistItem}>
                  • Copy of Cumulative Folder received (should include transcripts, standardized test scores if available, special education/services if applicable, student discipline and
                  attendance records)
                </Text>
              </View>

              <Text style={styles.note}>
                If no standardized tests are available, the Principal will meet with you and your child to discuss
                the appropriate grade level
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Tuition & Payment Schedule</Text>
              <Text style={styles.subTitle}>Payment Schedule 2025 - 2026</Text>
              
              <View style={styles.feeContainer}>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Supply & Material Fee</Text>
                  <Text style={styles.feeAmount}>$200.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Books & Technology Fee</Text>
                  <Text style={styles.feeAmount}>$200.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Testing Fee</Text>
                  <Text style={styles.feeAmount}>$100.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Graduation Fee (K, G6, G8)</Text>
                  <Text style={styles.feeAmount}>$50.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>New Enrollment Fee</Text>
                  <Text style={styles.feeAmount}>$100.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Monthly Tuition</Text>
                  <Text style={styles.feeAmount}>$625.00</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>Monthly Security Fee</Text>
                  <Text style={styles.feeAmount}>$25.00/Family</Text>
                </View>
                <View style={styles.feeRow}>
                  <Text style={styles.feeName}>School Activities/Events</Text>
                  <Text style={styles.feeAmount}>$125/Family</Text>
                </View>
              </View>

              <Text style={styles.subTitle}>Payment Due Dates</Text>
              <View style={styles.dueDatesContainer}>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>August</Text>
                  <Text style={styles.dueDate}>By 08/05/2025</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>September</Text>
                  <Text style={styles.dueDate}>By 09/05/2025</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>October</Text>
                  <Text style={styles.dueDate}>By 10/05/2025</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>November</Text>
                  <Text style={styles.dueDate}>By 11/05/2025</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>December</Text>
                  <Text style={styles.dueDate}>By 12/05/2025</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>January</Text>
                  <Text style={styles.dueDate}>By 01/05/2026</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>February</Text>
                  <Text style={styles.dueDate}>By 02/05/2026</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>March</Text>
                  <Text style={styles.dueDate}>By 03/05/2026</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>April</Text>
                  <Text style={styles.dueDate}>By 04/05/2026</Text>
                </View>
                <View style={styles.dueRow}>
                  <Text style={styles.dueMonth}>May</Text>
                  <Text style={styles.dueDate}>By 05/05/2026</Text>
                </View>
              </View>

              <Text style={styles.note}>
                Monthly Tuition is due by the 5th of each month.
              </Text>
              <Text style={styles.warning}>
                Late Payment Fee: A late payment fee of $25.00 will automatically be charged for ANY late payments made after the 5th of each month.
              </Text>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={500}>
              <Text style={styles.sectionTitle}>Request Info / Schedule a Tour</Text>
              <Inquire />
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Forms & Documents</Text>
              <View style={styles.documentContainer}>
                <Image 
                  source={require('../assets/quba-logo.png')}
                  style={styles.documentLogo}
                  resizeMode="contain"
                />
                <Text style={styles.documentTitle}>Admission Packet 2025-2026</Text>
                <Text style={styles.documentSubtitle}>Private KG-12th Grade</Text>
                <TouchableOpacity 
                  style={styles.downloadButton}
                  onPress={() => Linking.openURL('/assets/QIS-Admission-Packet-2025-2026-K-12.pdf')}
                >
                  <Text style={styles.downloadButtonText}>Download Admission Packet</Text>
                </TouchableOpacity>
                <View style={styles.contactInfo}>
                  <Text style={styles.contactText}>1127 Otterbein Ave</Text>
                  <Text style={styles.contactText}>Rowland Heights, CA 91748</Text>
                  <Text style={styles.contactText}>909.620.5297</Text>
                  <Text style={styles.contactText}>info@qubais.org</Text>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>
        </Animated.View>
        <Footer />
      </Animated.ScrollView>
    </View>
  );
}

// Add these styles to the StyleSheet
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
    fontSize: 32,
    fontWeight: '700',
    color: '#2c365d',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2c365d',
    marginTop: 20,
    marginBottom: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 75,
    textAlign: 'justify',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  checklistContainer: {
    marginLeft: 10,
    marginBottom: 20,
  },
  checklistItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  note: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#2c365d',
    marginTop: 20,
    marginBottom:80,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  contactContainer: {
    marginTop: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    gap: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  feeContainer: {
    marginVertical: 20,
    gap: 10,
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  feeName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  feeAmount: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dueDatesContainer: {
    marginVertical: 20,
    gap: 8,
  },
  dueRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
  },
  dueMonth: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  dueDate: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  warning: {
    fontSize: 16,
    color: '#ff6b6b',
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 80,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  documentContainer: {
    alignItems: 'center',
    padding: 20,
  },
  documentLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  documentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1729CE',
    marginBottom: 10,
    textAlign: 'center',
  },
  documentSubtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  downloadButton: {
    backgroundColor: '#2c365d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 30,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    alignItems: 'center',
  },
});