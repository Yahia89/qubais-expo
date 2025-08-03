import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import { GlassCard } from './GlassCard';

export const PrincipalsMessage = () => {
  const handleRegistration = () => {
    Linking.openURL('https://login.jupitered.com/register/?interest=QIS&school=54577&k=81bb3b85');
  };

  return (
    <GlassCard>
      <View style={styles.content}>
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
        <Text style={styles.messageText}>
          Ms. Nadia Kashuka
Principal
        </Text>
        <TouchableOpacity onPress={handleRegistration} style={styles.registrationButton}>
          <Text style={styles.buttonText}>Begin registration</Text>
        </TouchableOpacity>
      </View>
    </GlassCard>
  );
};

const styles = StyleSheet.create({
  content: {
    width: '100%',
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
  welcomeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c365d',
    marginBottom: 15,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#2c365d',
    marginBottom: 10,
    textAlign: 'justify',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  registrationButton: {
    backgroundColor: '#2c365d',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    minWidth: '50%',
    maxWidth: '50%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});