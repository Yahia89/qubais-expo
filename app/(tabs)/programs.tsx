import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function Programs() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>Our Programs</Text>
        
        <View style={[styles.programSection, styles.highlightSection]}>
          <Text style={styles.programTitle}>HIGH SCHOOL PROGRAM</Text>
          <Text style={styles.programText}>
            We are excited to announce the expansion of our high school program to include 10th grade for the upcoming academic year 2022-2023.
          </Text>
          <Text style={styles.programText}>
            We offer a friendly and welcoming environment committed to high standards of achievement.
          </Text>
          
          <Text style={styles.subheading}>Our Goals:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Develop the depth of Islamic character by nurturing students in Islamic values, principles, methods, attitudes, and attributes</Text>
            <Text style={styles.bulletPoint}>• Develop a passion for research, discovery, and generation of new knowledge</Text>
            <Text style={styles.bulletPoint}>• Develop a growth oriented and life-long learning mindset</Text>
            <Text style={styles.bulletPoint}>• Develop a global citizen perspective</Text>
            <Text style={styles.bulletPoint}>• Develop student's faculties to be successful in top tier universities</Text>
            <Text style={styles.bulletPoint}>• Develop 21st Century Skill-set for the information age</Text>
          </View>

          <Text style={styles.subheading}>Program Features:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Rigorous Academic Program</Text>
            <Text style={styles.bulletPoint}>• Courses in Alignment with the University of California A-G Requirement</Text>
            <Text style={styles.bulletPoint}>• Daily Quran and Islamic Studies</Text>
            <Text style={styles.bulletPoint}>• Low students to teacher ratio</Text>
            <Text style={styles.bulletPoint}>• Co-curricular and extracurricular activities building leadership and 21st century critical thinking skills</Text>
            <Text style={styles.bulletPoint}>• Option: AP Capstone Diploma (10th-12th grade)</Text>
            <Text style={styles.bulletPoint}>• Focused college guidance and preparation</Text>
            <Text style={styles.bulletPoint}>• Gain free college credits during high school</Text>
            <Text style={styles.bulletPoint}>• Earn up to 2 years of transferable, general education, college credit while enrolled at Quba Islamic High School</Text>
          </View>
        </View>

        <View style={[styles.programSection]}>
      <Text style={styles.programTitle}>KG – 12th</Text>
      
      <Text style={styles.subheading}>Our Core Values: R²ISE-ing to be a Muslim</Text>
      <View >
        <Text >Respect</Text>
        <Text >Responsibility</Text>
        <Text >Integrity</Text>
        <Text >Safety</Text>
        <Text >Excellence</Text>
      </View>

      <Text style={styles.programText}>
        Our English Language, Arts and Mathematics curriculum is based on clear educational objectives as envisioned by Common Core State Standards whereas our science curriculum and instruction are based on the Next Generation Science Standards (NGSS). Both of these two standards are based on thought leadership and provide clear expectations for students, teachers, and parent for making every student successful.
      </Text>

      <Text style={styles.programText}>
        We are among the first schools to standardize the Islamic curriculum based on grade level. To this end, we have subscribed to the curriculum and content developed by the International Curricula Organization. The curriculum is geared towards cultivating an Islamic identity based on the proper understanding of Islamic fiqh and principles of forgiveness, etiquettes of disagreement, spirituality, morality, and value system.
      </Text>

      <Text style={styles.programText}>
        The primary goal at Quba Islamic School is to create a 21st century Islamic learning environment that engages students, fosters achievements, and cultivates the skills needed to collaborate, connect, and lead in a global society.
      </Text>

      <Text style={styles.programText}>
        The school is built upon a foundation of identified national best practices which are designed to improve student growth and close achievement gaps.
      </Text>

      <Text style={styles.subheading}>Subjects taught in the school include:</Text>
      <View >
        <Text >English and Arabic Languages</Text>
        <Text >Quran</Text>
        <Text >Islamic Studies</Text>
        <Text >Literacy and Language Arts</Text>
        <Text >Science</Text>
        <Text >Social Studies</Text>
        <Text >Mathematics</Text>
        <Text >Coding</Text>
        <Text >Physical Education</Text>
        <Text >Life Skills</Text>
        <Text >Leadership Skills</Text>
      </View>
    </View>

        <View style={[styles.programSection, styles.curriculumSection]}>
          <Text style={styles.programTitle}>ISLAMIC CURRICULUM</Text>
          <Text style={styles.programText}>
            Quba Islamic School utilizes ICO's Islamic curriculum which seeks to ground the next generation of Muslims to Sunni Islamic beliefs, values, and norms – with an emphasis on boosting the level of communication between adults and young people. Muslims worldwide share a common set of values based upon the Qur'an and Sunnah of Prophet Muhammad(saw). The material of our adopted curriculum aims to help students develop spiritually and morally, take pride in being Muslims, and achieve balanced personalities that reflect the moderation of Islam. Finally, the content of this series is presented in a spiral approach, whereby students revisit each area of study and examine it in greater depth each year. Age-appropriate illustrations and pictures throughout the series help solidify important concepts.
          </Text>
        
          <Text style={styles.subheading}>Key Features include:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Integrated review units</Text>
            <Text style={styles.bulletPoint}>• Additional practice materials</Text>
            <Text style={styles.bulletPoint}>• A framework for instruction in Islamic studies</Text>
            <Text style={styles.bulletPoint}>• Assistance in learning the correct practice of Islam</Text>
            <Text style={styles.bulletPoint}>• Islamic teachings impart key beliefs, norms and values</Text>
            <Text style={styles.bulletPoint}>• Moral guidance for students living in the West</Text>
          </View>
        
          <Text style={styles.subheading}>ICO curriculum is distinguished because:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• This curriculum meets the needs of the target group for integrated, coherent, and appropriate curricula.</Text>
            <Text style={styles.bulletPoint}>• They were prepared according to scientific bases, assimilating the most recent educational and psychological theories.</Text>
            <Text style={styles.bulletPoint}>• They were prepared by special educationists who are experienced in designing curricula and who are familiar with the needs of the target group.</Text>
            <Text style={styles.bulletPoint}>• They employed the most recent techniques and educational aids.</Text>
            <Text style={styles.bulletPoint}>• They went through many quality control processes, which were carried out by specialized committees, and they were enhanced by teachers who evaluated the curricula before releasing them.</Text>
          </View>
        
          <Text style={styles.subheading}>The Instructional and Linguistic Features:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Reinforce the proper linguistic basis of the non-Arabic speaking students.</Text>
            <Text style={styles.bulletPoint}>• They build the students' linguistic dictionary according to their environmental needs.</Text>
            <Text style={styles.bulletPoint}>• Provide non-Arabic speaking students with a good deal of Islamic vocabulary.</Text>
            <Text style={styles.bulletPoint}>• Identify the correct articulations of the different sounds, through the study of the Glorious Qur'an.</Text>
            <Text style={styles.bulletPoint}>• Enable the students to evade making mistakes when reciting the Glorious Qur'an through employing the rules of the Arabic language.</Text>
            <Text style={styles.bulletPoint}>• Provide an integrated curriculum with well-prepared scientific content and vocabulary.</Text>
            <Text style={styles.bulletPoint}>• Take into consideration the students' individual mental differences and their diverse linguistic skills.</Text>
            <Text style={styles.bulletPoint}>• Consider the students' different cultures.</Text>
            <Text style={styles.bulletPoint}>• Develop the students' creativity and mental faculties.</Text>
          </View>
        
          <Text style={styles.subheading}>The Educational Content Features:</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bulletPoint}>• Reinforce the principle of forgiveness and the etiquettes of disagreement with others.</Text>
            <Text style={styles.bulletPoint}>• Develop the spirituality, morality, and values of the students.</Text>
            <Text style={styles.bulletPoint}>• Help students have good and balanced personalities.</Text>
            <Text style={styles.bulletPoint}>• Develop the students' pride in their Muslim identity.</Text>
            <Text style={styles.bulletPoint}>• Help the Caller to Islam to develop a balanced personality that reflects the moderation of Islam.</Text>
          </View>
        </View>

        <View style={styles.programSection}>
          <Text style={styles.programTitle}>AFTER-SCHOOL HOMEWORK CLUB</Text>
          <Text style={styles.programText}>
            For those parents who need to pick up their children later or who would just like help with their children's homework, an extra session is offered from 3:15 PM -5:30 PM. This allows students to finish their homework and focus on subjects in which they may require extra help.
          </Text>
        </View>

        <View style={styles.programSection}>
          <Text style={styles.programTitle}>WINTER AND SUMMER CAMPS</Text>
          <Text style={styles.programText}>
            Retreats are scheduled to bring families together for fun and quality time. Some retreats provide the setting for educational workshops while others are offered to just give a break from the hectic schedule of daily life. The camps are held in the local mountains. The camps have been for several years now and children as well as their parents enjoy attending.
          </Text>
        </View>

        <View style={styles.programSection}>
          <Text style={styles.programTitle}>INFORMATIVE LECTURES</Text>
          <Text style={styles.programText}>
            Lectures are conducted for the community on topics such as parenting, dealing with cultural conflicts, Islamic History, Muslim contributors in Science and Technology, pursuit of Islamic education, etc. These mini lectures give a chance for Muslims to have ongoing education and practical advice on various topics.
          </Text>
        </View>

        <View style={styles.programSection}>
          <Text style={styles.programTitle}>SPORTS</Text>
          <Text style={styles.programText}>
            These activities allow Muslim boys and girls to develop athletic skills and learn the essentials of good teamwork. They also learn how to compete in a healthy fashion while remaining focused on teamwork, respect and the art of winning with humility and losing with grace.
          </Text>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  programSection: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#E31B23',
  },
  programTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  programText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  highlightSection: {
    backgroundColor: '#f0f7ff',
    borderLeftColor: '#2196F3',
  },
  subheading: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginTop: 15,
    marginBottom: 10,
  },
  bulletList: {
    paddingLeft: 10,
    marginBottom: 15,
  },
  bulletPoint: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444',
    marginBottom: 8,
  },
  
  curriculumSection: {
    backgroundColor: '#f5f5dc',
    borderLeftColor: '#8B4513',
  },
});