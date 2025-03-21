import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AboutUs() {
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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>About Us</Text>
        
        <View style={styles.contentCard}>
          <Text style={styles.description}>
            Quba Islamic School is a private Islamic school that focuses on fulfilling the academic and character development needs of Muslim students in the San Gabriel Valley (Covinas, Walnut, Diamond Bar) and surrounding communities.
          </Text>
        </View>

        <View style={styles.missionCard}>
          <Text style={styles.sectionTitle}>Our Vision</Text>
          <Text style={styles.description}>
            The purpose of Quba Islamic School is to nourish the new generation of students – our future leaders – to enable them to become critical thinkers, lifelong learners, and believers in positive action; so that they can become the moral compass in their own communities as well as global domains.
          </Text>

          <Text style={styles.sectionTitle}>Mission Statement</Text>
          <Text style={styles.description}>
            We deliver on our vision through the following goals and guidelines:
          </Text>

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

        <View style={styles.performanceCard}>
          <Text style={styles.sectionTitle}>OUR STUDENTS OUTPERFORM</Text>
          <Text style={styles.description}>
            Quba Islamic School students exceed national standards in many subject areas consistently throughout our grade levels.
          </Text>
          <Text style={styles.description}>
            Here are examples of how our students compare to other same grade level students nationwide based upon the Iowa 2019 national testing:
          </Text>

          <View style={styles.performanceTable}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableCell, styles.headerCell, styles.gradeCell]}>Grade</Text>
              <Text style={[styles.tableCell, styles.headerCell, styles.subjectCell]}>Subjects</Text>
              <Text style={[styles.tableCell, styles.headerCell, styles.scoreCell]}>Grade Equivalents</Text>
            </View>

            {[
              { grade: '3', subjects: ['Language', 'Maths'], scores: ['5', '5'] },
              { grade: '5', subjects: ['Language', 'Maths'], scores: ['8', '8.1'] },
              { grade: '6', subjects: ['Language', 'Maths'], scores: ['9', '8.2'] },
              { grade: '7', subjects: ['Language', 'Maths'], scores: ['10.9', '9.2'] },
              { grade: '8', subjects: ['Language', 'Maths'], scores: ['11', '10.6'] },
            ].map((row, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, styles.gradeCell]}>Grade {row.grade}</Text>
                <View style={[styles.tableCell, styles.subjectCell]}>
                  {row.subjects.map((subject, i) => (
                    <Text key={i} style={styles.subjectText}>{subject}</Text>
                  ))}
                </View>
                <View style={[styles.tableCell, styles.scoreCell]}>
                  {row.scores.map((score, i) => (
                    <Text key={i} style={styles.scoreText}>{score}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>

          <Text style={styles.footnote}>Based on Standardized Testing Scores.</Text>
        </View>

        {/* After mission card and before contact card */}
        <View >
          <Text style={styles.sectionTitle}>Tuition</Text>
          <Text >Announcing Quba Islamic School's Excellence</Text>

          <View style={styles.highlightBox}>
            <Text style={styles.highlightText}>• Quba School's administration has over 15 years of experience under New Dimensions School.</Text>
            <Text style={styles.highlightText}>• Our students on average are 2 grades above other local public and private schools.</Text>
          </View>

          <Text style={styles.promotionTitle}>Special Promotion</Text>
          <Text style={styles.promotionText}>
            We want you to experience the magic and try our school next year with a special promotion.
          </Text>
          <Text style={styles.disclaimer}>
            Limited spots are made available for this offer. Subject to close early based on demand. So act now!
          </Text>

          <Text style={styles.noteText}>
            Haven't seen the Majestic Islamic Center of San Gabriel Valley (ICSGV) Quba School campus? Call to book a tour of our campus.
          </Text>

          <View style={styles.feeSection}>
            <Text style={styles.feeTitle}>K-10 GRADE</Text>
            <Text style={styles.feeNote}>*Must pay a non-refundable registration fee to lock in your spot</Text>
            
            <View style={styles.feeTable}>
              <View style={styles.feeRow}>
                <Text style={styles.feeName}>Registration Fee</Text>
                <Text style={styles.feeAmount}>$100.00</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeName}>Book Fee</Text>
                <Text style={styles.feeAmount}>$450.00</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeName}>Supply & Events Fee</Text>
                <Text style={styles.feeAmount}>$350.00</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeName}>Annual Testing Fee</Text>
                <Text style={styles.feeAmount}>$100.00</Text>
              </View>
              <View style={styles.feeRow}>
                <Text style={styles.feeName}>Graduation Fee (KG, Grade 6, & Grade 8)</Text>
                <Text style={styles.feeAmount}>$50.00</Text>
              </View>
              <View style={[styles.feeRow, styles.monthlyFee]}>
                <Text style={styles.feeName}>Monthly Tuition</Text>
                <Text style={styles.feeAmount}>$600.00</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('address')}>
            <Ionicons name="location" size={24} color="#E31B23" />
            <Text style={styles.contactText}>1127 Otterbein Ave, Rowland Heights, CA 91748</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('phone')}>
            <Ionicons name="call" size={24} color="#E31B23" />
            <Text style={styles.contactText}>(909) 620-5297</Text>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <Ionicons name="print" size={24} color="#E31B23" />
            <Text style={styles.contactText}>Fax: (909) 766-8362</Text>
          </View>
          <TouchableOpacity style={styles.contactItem} onPress={() => handlePress('email')}>
            <Ionicons name="mail" size={24} color="#E31B23" />
            <Text style={styles.contactText}>info@qubais.org</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  contentCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#E31B23',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    textAlign: 'justify',
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 15,
  },
  missionCard: {
    // Add to existing styles
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginVertical: 15,
      borderLeftWidth: 4,
      borderLeftColor: '#4CAF50',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    performanceCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginVertical: 15,
        borderLeftWidth: 4,
        borderLeftColor: '#4CAF50',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      },
      performanceTable: {
        marginVertical: 20,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#eee',
      },
      tableHeader: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
      },
      tableRow: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
      },
      tableCell: {
        padding: 12,
      },
      headerCell: {
        fontWeight: '600',
        color: '#333',
      },
      gradeCell: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#eee',
      },
      subjectCell: {
        flex: 1.5,
        borderRightWidth: 1,
        borderRightColor: '#eee',
      },
      scoreCell: {
        flex: 1.5,
      },
      subjectText: {
        fontSize: 14,
        color: '#444',
        marginVertical: 2,
      },
      scoreText: {
        fontSize: 14,
        color: '#444',
        marginVertical: 2,
      },
      footnote: {
        fontSize: 14,
        color: '#666',
        fontStyle: 'italic',
        marginTop: 10,
        textAlign: 'center',
      },
    highlightBox: {
      backgroundColor: '#f8f8f8',
      padding: 15,
      borderRadius: 8,
      marginVertical: 10,
    },
    highlightText: {
      fontSize: 16,
      color: '#444',
      marginBottom: 8,
    },
    promotionTitle: {
      fontSize: 20,
      fontWeight: '600',
      color: '#E31B23',
      marginTop: 20,
      marginBottom: 10,
    },
    promotionText: {
      fontSize: 16,
      color: '#444',
      fontStyle: 'italic',
    },
    disclaimer: {
      fontSize: 14,
      color: '#666',
      marginTop: 10,
      fontStyle: 'italic',
    },
    noteText: {
      fontSize: 16,
      color: '#444',
      marginVertical: 15,
    },
    feeSection: {
      marginTop: 20,
    },
    feeTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
      marginBottom: 5,
    },
    feeNote: {
      fontSize: 14,
      color: '#666',
      fontStyle: 'italic',
      marginBottom: 15,
    },
    feeTable: {
      backgroundColor: '#f8f8f8',
      borderRadius: 8,
      overflow: 'hidden',
    },
    feeRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    monthlyFee: {
      backgroundColor: '#FFD70020',
    },
    feeName: {
      fontSize: 15,
      color: '#444',
      flex: 2,
    },
    feeAmount: {
      fontSize: 15,
      fontWeight: '600',
      color: '#333',
      flex: 1,
      textAlign: 'right',
    
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  missionItem: {
    marginVertical: 10,
    paddingLeft: 15,
    borderLeftWidth: 2,
    borderLeftColor: '#E8E8E8',
  },
  missionItemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 5,
  },
  missionItemText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});