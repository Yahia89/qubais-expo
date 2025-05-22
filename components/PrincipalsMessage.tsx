import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export const PrincipalsMessage = () => {
  const handleRegistration = () => {
    Linking.openURL('https://login.jupitered.com/register/?interest=QIS&school=54577&k=81bb3b85');
  };

  return (
    <View style={styles.glassCard}>
      <View style={[styles.blob, styles.blob1]} />
      <View style={[styles.blob, styles.blob2]} />
      <View style={[styles.blob, styles.blob3]} />
      <View style={[styles.blob, styles.blob4]} />
      <View style={styles.glassContent}>
        <Text style={styles.sectionTitle}>Principal's Welcome Message</Text>
        <Text style={styles.welcomeText}>
          Assalamu Alaikum Wa Rahmatullahi Wa Barakatuh,
        </Text>
        <Text style={styles.messageText}>
          We welcome your interest in Quba Islamic School. We look forward to spending time with you and your family as you make the decision whether Quba Islamic School will be your school of choice.
        </Text>
        <Text style={styles.messageText}>
          Applying to an independent school can sometimes seem time consuming and very involved. At Quba Islamic School, the admissions process is designed to get to know each family and applicant well, so that we can understand the social and educational goals and needs of each student. We want to ensure that you are familiar with the school program and value Quba Islamic School places on parent involvement with their child's school experience.
        </Text>
        <Text style={styles.messageText}>
          We seek students and families who support Quba Islamic School's values, which are rooted in Islamic beliefs and practices. Our values emphasize that our students are the amanah of Allah (swt) and it is ultimately their benefit that steers our decisions. Our values create an environment that helps us to nourish the new generation of students to enable them to become critical thinkers, lifelong learners and believers in positive action.
        </Text>
        <Text style={styles.messageText}>
          Our school's admission decisions are based on our time spent with you on the school tour and during the meeting with the Principal, teacher recommendations, past academic performance, standardized test results and other relevant assessments. We seek to enroll students with the academic readiness and willingness to stretch themselves to achieve to the best of their ability.
        </Text>
        <Text style={styles.messageText}>
          The main question our admissions process asks is: Will Quba Islamic School be a place where your child will develop a particular set of skills and talents and contribute to the vitality of the school community?
        </Text>
        <Text style={styles.messageText}>
          The application process is a journey that clarifies the educational and life goals you have for your child and the way Quba Islamic School can help you achieve them.
        </Text>
        <TouchableOpacity onPress={handleRegistration} style={styles.registrationButton}>
          <Text style={styles.buttonText}>Begin Your Journey - Registration Form</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glassCard: {
    position: 'relative',
    width: '100%',
    minHeight: 150,
    marginVertical: 15,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  glassContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 20,
    width: '100%',
    height: '100%',
    borderRadius: 21,
    zIndex: 1,
  },
  blob: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: -1,
  },
  blob1: {
    left: -50,
    top: -90,
    backgroundColor: '#E31B23',
    opacity: 0.7,
  },
  blob2: {
    right: -40,
    top: -20,
    backgroundColor: '#1729CE',
    opacity: 0.6,
  },
  blob3: {
    left: -40,
    bottom: -60,
    backgroundColor: '#FF8C11',
    opacity: 0.5,
  },
  blob4: {
    right: -30,
    bottom: -40,
    backgroundColor: '#E31B23',
    opacity: 0.4,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 15,
    textAlign: 'justify',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  registrationButton: {
    backgroundColor: '#E31B23',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});