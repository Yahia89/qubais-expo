import { Text, View, StyleSheet, ScrollView, useWindowDimensions } from 'react-native';

export default function Programs() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;

  return (
    <ScrollView style={[styles.scrollView, { backgroundColor: '#fff' }]}>
      <View style={styles.headerSection}>
        <Text style={styles.mainTitle}>QUBA ISLAMIC SCHOOL</Text>
        <View style={styles.divider}>
          <View style={styles.magazineHeader}>
            <Text style={styles.volumeNumber}>VOL NO. 325</Text>
            <View style={styles.centerHeader}>
              <Text style={styles.subTitle}>ACADEMIC PROGRAMS & CURRICULUM - {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</Text>
              <Text style={styles.dateText}></Text>
            </View>
            <Text style={styles.pageNumber}>PAGE NO. 2</Text>
          </View>
        </View>
      </View>

      <View style={[styles.columnsContainer, { flexDirection: isSmallScreen ? 'column' : 'row' }]}>
        {/* Column 1 */}
        <View style={[styles.column, !isSmallScreen && styles.columnBorder]}>
          <Text style={styles.headlineHL1}>HIGH SCHOOL PROGRAM</Text>
          <Text style={styles.citation}>
            "Developing tomorrow's leaders through academic excellence and Islamic values"
          </Text>
          
          <View style={styles.twoColumnLayout}>
            {/* Left Column - High School */}
            <View style={[styles.columnHalf, styles.columnDivider]}>
              <Text style={styles.bodyText}>
                We are excited to announce the expansion of our high school program to include 10th grade for the upcoming academic year 2025-2026.
              </Text>
              <Text style={styles.programText}>
                We offer a friendly and welcoming environment committed to high standards of achievement.
              </Text>
              
              <Text style={styles.subheading}>Our Goals:</Text>
              <View style={styles.enhancedBulletList}>
                {[
                  'Develop the depth of Islamic character by nurturing students in Islamic values, principles, methods, attitudes, and attributes',
                  'Develop a passion for research, discovery, and generation of new knowledge',
                  'Develop a growth oriented and life-long learning mindset',
                  'Develop a global citizen perspective',
                  `Develop student's faculties to be successful in top tier universities`,
                  'Develop 21st Century Skill-set for the information age'
                ].map((goal, index) => (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.enhancedBulletText}>{goal}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.subheading}>Program Features:</Text>
              <View style={styles.enhancedBulletList}>
                {[
                  'Rigorous Academic Program',
                  'Courses in Alignment with the University of California A-G Requirement',
                  'Daily Quran and Islamic Studies',
                  'Low students to teacher ratio',
                  'Co-curricular and extracurricular activities building leadership and 21st century critical thinking skills',
                  'Option: AP Capstone Diploma (10th-12th grade)',
                  'Focused college guidance and preparation',
                  'Gain free college credits during high school',
                  'Earn up to 2 years of transferable, general education, college credit while enrolled at Quba Islamic High School'
                ].map((feature, index) => (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.enhancedBulletText}>{feature}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Right Column - KG-12 */}
            <View style={styles.columnHalf}>
              <Text style={styles.sectionTitle}>KG – 12th</Text>
              
              <Text style={styles.bodyText}>
                Our English Language, Arts and Mathematics curriculum is based on clear educational objectives as envisioned by Common Core State Standards whereas our science curriculum and instruction are based on the Next Generation Science Standards (NGSS). Both of these two standards are based on thought leadership and provide clear expectations for students, teachers, and parent for making every student successful.
              </Text>

              <Text style={styles.bodyText}>
                We are among the first schools to standardize the Islamic curriculum based on grade level. To this end, we have subscribed to the curriculum and content developed by the International Curricula Organization. The curriculum is geared towards cultivating an Islamic identity based on the proper understanding of Islamic fiqh and principles of forgiveness, etiquettes of disagreement, spirituality, morality, and value system.
              </Text>

              <Text style={styles.fancyCitation}>
                "Creating a 21st century Islamic learning environment"
              </Text>

              <Text style={styles.bodyText}>
                The primary goal at Quba Islamic School is to create a 21st century Islamic learning environment that engages students, fosters achievements, and cultivates the skills needed to collaborate, connect, and lead in a global society.
              </Text>

              <Text style={styles.bodyText}>
                The school is built upon a foundation of identified national best practices which are designed to improve student growth and close achievement gaps.
              </Text>

              <Text style={styles.valueTitle}>Our Core Values: R²ISE-ing to be a Muslim</Text>
              <View style={styles.enhancedBulletList}>
                {['Respect', 'Responsibility', 'Integrity', 'Safety', 'Excellence'].map((value, index) => (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.enhancedBulletText}>{value}</Text>
                  </View>
                ))}
              </View>

              <Text style={styles.subheading}>Subjects Offered:</Text>
              <View style={styles.enhancedBulletList}>
                {[
                  'English and Arabic Languages',
                  'Quran',
                  'Islamic Studies',
                  'Literacy and Language Arts',
                  'Science',
                  'Social Studies',
                  'Mathematics',
                  'Coding',
                  'Physical Education',
                  'Life Skills',
                  'Leadership Skills'
                ].map((subject, index) => (
                  <View key={index} style={styles.bulletItem}>
                    <Text style={styles.bulletDot}>•</Text>
                    <Text style={styles.enhancedBulletText}>{subject}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* Column 2 */}
        <View style={[styles.column, !isSmallScreen && styles.columnBorder]}>
          <Text style={styles.headlineHL2}>ISLAMIC CURRICULUM</Text>
          <Text style={styles.bodyText}>
            Quba Islamic School utilizes ICO's Islamic curriculum which seeks to ground the next generation of Muslims to Sunni Islamic beliefs, values, and norms.
          </Text>

          <Text style={styles.fancyCitation}>
            "Muslims worldwide share a common set of values based upon the Qur'an and Sunnah of Prophet Muhammad(saw)"
          </Text>

          <Text style={styles.programText}>
            Quba Islamic School utilizes ICO's Islamic curriculum which seeks to ground the next generation of Muslims to Sunni Islamic beliefs, values, and norms – with an emphasis on boosting the level of communication between adults and young people. Muslims worldwide share a common set of values based upon the Qur'an and Sunnah of Prophet Muhammad(saw). The material of our adopted curriculum aims to help students develop spiritually and morally, take pride in being Muslims, and achieve balanced personalities that reflect the moderation of Islam. Finally, the content of this series is presented in a spiral approach, whereby students revisit each area of study and examine it in greater depth each year. Age-appropriate illustrations and pictures throughout the series help solidify important concepts.
          </Text>
        
          <Text style={styles.subheading}>Key Features include:</Text>
          <View style={styles.enhancedBulletList}>
            {[
              'Integrated review units',
              'Additional practice materials',
              'A framework for instruction in Islamic studies',
              'Assistance in learning the correct practice of Islam',
              'Islamic teachings impart key beliefs, norms and values',
              'Moral guidance for students living in the West'
            ].map((feature, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.enhancedBulletText}>{feature}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.subheading}>ICO curriculum is distinguished because:</Text>
          <View style={styles.enhancedBulletList}>
            {[
              'This curriculum meets the needs of the target group for integrated, coherent, and appropriate curricula.',
              'They were prepared according to scientific bases, assimilating the most recent educational and psychological theories.',
              'They were prepared by special educationists who are experienced in designing curricula and who are familiar with the needs of the target group.',
              'They employed the most recent techniques and educational aids.',
              'They went through many quality control processes, which were carried out by specialized committees, and they were enhanced by teachers who evaluated the curricula before releasing them.'
            ].map((point, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.enhancedBulletText}>{point}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.subheading}>The Instructional and Linguistic Features:</Text>
          <View style={styles.enhancedBulletList}>
            {[
              'Reinforce the proper linguistic basis of the non-Arabic speaking students.',
              `They build the students' linguistic dictionary according to their environmental needs.`,
              'Provide non-Arabic speaking students with a good deal of Islamic vocabulary.',
              `Identify the correct articulations of the different sounds, through the study of the Glorious Qur'an.`,
              `Enable the students to evade making mistakes when reciting the Glorious Qur'an through employing the rules of the Arabic language.`,
              'Provide an integrated curriculum with well-prepared scientific content and vocabulary.',
              `Take into consideration the students' individual mental differences and their diverse linguistic skills.`,
              `Consider the students' different cultures.'`,
              `Develop the students' creativity and mental faculties.`
            ].map((feature, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.enhancedBulletText}>{feature}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.subheading}>The Educational Content Features:</Text>
          <View style={styles.enhancedBulletList}>
            {[
              'Reinforce the principle of forgiveness and the etiquettes of disagreement with others.',
              'Develop the spirituality, morality, and values of the students.',
              'Help students have good and balanced personalities.',
              `Develop the students' pride in their Muslim identity.`,
              'Help the Caller to Islam to develop a balanced personality that reflects the moderation of Islam.'
            ].map((feature, index) => (
              <View key={index} style={styles.bulletItem}>
                <Text style={styles.bulletDot}>•</Text>
                <Text style={styles.enhancedBulletText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Column 3 */}
        <View style={[styles.column, !isSmallScreen && styles.columnBorder]}>
          <Text style={styles.headlineHL3}>EXTRACURRICULAR ACTIVITIES</Text>
          <Text style={styles.citation}>
            "Nurturing minds beyond the classroom"
          </Text>
          <Text style={styles.subHeadline}>After-School Homework Club</Text>
          <Text style={styles.bodyText}>
            For those parents who need to pick up their children later or who would just like help with their children's homework, an extra session is offered from 3:15 PM -5:30 PM. This allows students to finish their homework and focus on subjects in which they may require extra help.
          </Text>


          <Text style={styles.subHeadline}>Winter and Summer Camps</Text>
          <Text style={styles.bodyText}>
            Retreats are scheduled to bring families together for fun and quality time. Some retreats provide the setting for educational workshops while others are offered to just give a break from the hectic schedule of daily life. The camps are held in the local mountains. The camps have been for several years now and children as well as their parents enjoy attending.
          </Text>

          <Text style={styles.subHeadline}>Informative Lectures</Text>
          <Text style={styles.bodyText}>
            Lectures are conducted for the community on topics such as parenting, dealing with cultural conflicts, Islamic History, Muslim contributors in Science and Technology, pursuit of Islamic education, etc. These mini lectures give a chance for Muslims to have ongoing education and practical advice on various topics.
          </Text>

          <Text style={styles.subHeadline}>Sports</Text>
          <Text style={styles.bodyText}>
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
  },
  headerSection: {
    padding: 10,
    alignItems: 'center',
    // marginBottom: 20,
  },
  mainTitle: {
    fontSize: 42,
    fontWeight: '900',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#2f2f2f',
    marginBottom: 10,
  },
  divider: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#2f2f2f',
    paddingVertical: 12,
    width: '100%',
  },
  magazineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  volumeNumber: {
    fontSize: 14,
    color: '#2f2f2f',
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
  },
  centerHeader: {
    flex: 3,
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#2f2f2f',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 12,
    color: '#2f2f2f',
    fontStyle: 'italic',
  },
  pageNumber: {
    fontSize: 14,
    color: '#2f2f2f',
    fontWeight: '500',
    flex: 1,
    textAlign: 'right',
  },
  columnsContainer: {
    // padding: 20,
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    padding: 15,
    minWidth: 300,
  },
  columnBorder: {
    borderLeftWidth: 1,
    borderColor: '#2f2f2f',
  },
  headlineHL1: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2f2f2f',
    textTransform: 'uppercase',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  headlineHL2: {
    fontSize: 24,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#2f2f2f',
    marginVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  headlineHL3: {
    fontSize: 36,
    fontWeight: '400',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#2f2f2f',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
  },
  citation: {
    fontSize: 24,
    textAlign: 'center',
    color: '#2f2f2f',
    marginVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#2f2f2f',
    paddingVertical: 15,
  },
  subHeadline: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2f2f2f',
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#2f2f2f',
    marginBottom: 15,
  },
  fancyCitation: {
    fontSize: 36,
    lineHeight: 44,
    textAlign: 'center',
    fontWeight: '400',
    color: '#2f2f2f',
    marginVertical: 40,
    paddingHorizontal: 20,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#2f2f2f',
    paddingVertical: 16,
    fontStyle: 'italic',
    fontFamily: 'Almarai',
    },
  columnDivider: {
    // borderRightWidth: 1,
    borderColor: '#2f2f2f',
    paddingRight: 20,
    borderBottomWidth: 2,
    
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2f2f2f',
    marginBottom: 10,
    // paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#2f2f2f',
    backgroundColor: '#f5f5f5',
  },
  enhancedBulletList: {
      marginBottom: 20,
      paddingLeft: 10,
    },
    bulletItem: {
      flexDirection: 'row',
      marginBottom: 12,
      alignItems: 'flex-start',
    },
    bulletDot: {
      fontSize: 16,
      color: '#2f2f2f',
      marginRight: 8,
      marginTop: -2,
    },
    enhancedBulletText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 20,
      color: '#2f2f2f',
    },
});