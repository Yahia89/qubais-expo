import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { GlassCard } from "../components/GlassCard";
import { Footer } from "../components/Footer";
import { Linking } from "react-native";

export default function Academics() {
  const scrollY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const { width } = useWindowDimensions();

  const responsivePaddingStyle = () => {
    if (width >= 1024) {
      return { paddingHorizontal: 60, marginHorizontal: 40 };
    } else if (width >= 768) {
      return { paddingHorizontal: 40, marginHorizontal: 20 };
    } else {
      return { paddingHorizontal: 0, marginHorizontal: 0 };
    }
  };

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
          source={require("../assets/images/school-bg.png")}
          style={styles.backgroundImageContent}
          resizeMode="cover"
        />
      </View>
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Animated.View
          style={[styles.content, responsivePaddingStyle(), contentStyle]}
        >
          <ScrollReveal delay={200}>
            <GlassCard>
              <Text style={styles.sectionTitle}>K-12 Academic Program</Text>

              <Text style={styles.description}>
                Quba Islamic School offers a comprehensive K-12 educational
                program that combines academic excellence with Islamic values,
                preparing students for success in higher education and beyond.
              </Text>

              <Text style={styles.subSectionTitle}>
                Elementary School (K–4)
              </Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Foundation in core academic subjects
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Introduction to Islamic Studies and Quran
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Hands-on learning and creative exploration
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Small class sizes for personalized attention
                  </Text>
                </View>
              </View>

              <Text style={styles.subSectionTitle}>Middle School (5–8)</Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Advanced academic curriculum preparation
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Character development and leadership skills
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Enhanced Islamic Studies and Arabic language
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Introduction to critical thinking and research skills
                  </Text>
                </View>
              </View>

              <Text style={styles.subSectionTitle}>High School (9–12)</Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>Rigorous Academic Program</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Courses in Alignment with the University of California A-G
                    Requirement
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Daily Quran and Islamic Studies
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Low students to teacher ratio
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Co-curricular and extracurricular activities building
                    leadership and 21st century critical thinking skills
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Option: AP Capstone Diploma (10th-12th grade)
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Focused college guidance and preparation
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Gain free college credits during high school
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Earn up to 2 years of transferable, general education,
                    college credit while enrolled at Quba Islamic High School
                  </Text>
                </View>
                     <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.listText}>
                     Please see our High School Planning Documents:
                    </Text>
                    <View style={{ marginLeft: 15, marginTop: 8 }}>
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/High-School-4-Year-Graduation-Roadmap.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • High School 4-Year Graduation Roadmap
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/Graduation-Requirements.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • Graduation Requirements
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/High-School-Course-Graduation-Requirements.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • High School Course Graduation Requirements
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/Suggested-4-Year-Academic-Plan.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • Suggested 4-Year Academic Plan
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/9th-Grade-Course-Selection-Form.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • 9th Grade Course Selection Form
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/10th-Grade-Course-Selection-Form.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • 10th Grade Course Selection Form
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/11th-Grade-Course-Selection-Form.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • 11th Grade Course Selection Form
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/Academic-Counseling-Questionnaire.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • Academic Counseling Questionnaire
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/Transfer-Credit-Worksheet.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • Transfer Credit Worksheet
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/Community-Service-Form.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • Community Service Form
                        </Text>
                      </TouchableOpacity>
                      
                      <TouchableOpacity onPress={() => Linking.openURL('/assets/HiSET-Pathway-10th-Grade-Option.pdf')} style={{ marginBottom: 6 }}>
                        <Text style={[styles.listText, { color: "blue", textDecorationLine: "underline", fontSize: 14 }]}>
                          • HiSET Pathway 10th Grade Option
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}></ScrollReveal>

          <ScrollReveal delay={400}></ScrollReveal>

          <ScrollReveal delay={500}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Curriculum Overview</Text>
              <Text style={styles.subSectionTitle}>Travel Policy</Text>
              <Text style={styles.description}>
                Quba Islamic School urges parents to make sure their children
                attend school regularly and to schedule all travel during school
                holidays. Independent Studies do not excuse the student's
                absence from school.
              </Text>

              <Text style={styles.subSubTitle}>
                Travel Approval Requirements:
              </Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>1.</Text>
                  <Text style={styles.listText}>
                    Parents must request and obtain approval prior to the trip.
                    Travel contracts must be turned in to the office no later
                    than 14 school days prior to the trip.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>2.</Text>
                  <Text style={styles.listText}>
                    Terms and conditions will be placed by the teacher(s)
                    regarding assignments. Late or missing work acceptance is at
                    the teacher's discretion.
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>3.</Text>
                  <Text style={styles.listText}>
                    Parents will be called in for a meeting with the school
                    principal to sign the agreement.
                  </Text>
                </View>
              </View>

              <Text style={styles.subSectionTitle}>
                Curriculum & Instruction
              </Text>
              <Text style={styles.description}>
                Quba Islamic School follows a comprehensive curriculum designed
                to promote academic excellence and student achievement.
              </Text>

              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    <Text style={styles.boldText}>Core Subjects:</Text> English
                    Language Arts, Mathematics, Science, and Social Studies
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    <Text style={styles.boldText}>Enrichment Subjects:</Text>{" "}
                    Arabic, Islamic Studies, Quran, Art, and Physical Education
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Teachers use diverse instructional methods to meet student
                    needs and promote active learning
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Parents are encouraged to be actively involved and
                    communicate regularly with teachers
                  </Text>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            {/* <GlassCard>
              <Text style={styles.sectionTitle}>Graduation Requirements</Text>
              <Text style={styles.description}>
                Content for Graduation Requirements will go here...
              </Text>
            </GlassCard> */}
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Technology Integration</Text>

              <Text style={styles.subSectionTitle}>
                School-Provided Technology
              </Text>
              <Text style={styles.description}>
                To ensure consistency and security, students are not permitted
                to bring personal laptops. The school provides laptops equipped
                with necessary software and security features.
              </Text>

              <Text style={styles.subSubTitle}>Student Responsibilities:</Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Proper care and use of school-issued laptops
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Immediate reporting of any damage or loss to administration
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Students and families may be held responsible for repair or
                    replacement costs due to negligence
                  </Text>
                </View>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Assessment & Testing</Text>
              <Text style={styles.subSectionTitle}>Assessment Methods</Text>
              <Text style={styles.description}>
                Quba Islamic School uses a variety of assessment methods to
                measure student learning. All assessments are designed to be
                fair, valid, and aligned with curriculum standards.
              </Text>

              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>Tests and Quizzes</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>Projects and Assignments</Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>Class Participation</Text>
                </View>
              </View>

              <Text style={styles.subSectionTitle}>Grading Scale</Text>
              <View style={styles.gradingContainer}>
                <View style={styles.gradeRow}>
                  <Text style={styles.gradeLetter}>A</Text>
                  <Text style={styles.gradeRange}>90-100%</Text>
                </View>
                <View style={styles.gradeRow}>
                  <Text style={styles.gradeLetter}>B</Text>
                  <Text style={styles.gradeRange}>80-89%</Text>
                </View>
                <View style={styles.gradeRow}>
                  <Text style={styles.gradeLetter}>C</Text>
                  <Text style={styles.gradeRange}>70-79%</Text>
                </View>
                <View style={styles.gradeRow}>
                  <Text style={styles.gradeLetter}>D</Text>
                  <Text style={styles.gradeRange}>60-69%</Text>
                </View>
                <View style={styles.gradeRow}>
                  <Text style={styles.gradeLetter}>F</Text>
                  <Text style={styles.gradeRange}>Below 60%</Text>
                </View>
              </View>

              <Text style={styles.subSectionTitle}>Grade Reporting</Text>
              <Text style={styles.description}>
                Grades are reported regularly through report cards, progress
                reports, and JupiterEd. Parents are encouraged to review grades
                and communicate with teachers regarding any concerns.
              </Text>

              <Text style={styles.subSectionTitle}>
                Homework & Academic Support
              </Text>
              <View style={styles.listContainer}>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Homework assignments reinforce classroom learning and are
                    important for assessment
                  </Text>
                </View>
                <View style={styles.listItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.listText}>
                    Parents should support timely completion and submission of
                    assignments
                  </Text>
                </View>
              </View>

              <View style={styles.homeworkClubBox}>
                <Text style={styles.homeworkClubTitle}>📚 Homework Club</Text>
                <Text style={styles.homeworkClubText}>
                  Available Monday through Thursday for a monthly fee. Provides
                  structured environment and additional academic support to help
                  students excel.
                </Text>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={900}>
            <GlassCard>
              <Text style={styles.sectionTitle}>
                Academic Calendar 2025-2026
              </Text>
              <View style={styles.calendarContainer}>
                <Image
                  source={require("../assets/images/QIS-Calendar2025-2026.png")}
                  style={styles.calendarImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={() =>
                    Linking.openURL("/assets/QIS-Calendar2025-2026.pdf")
                  }
                >
                  <Text style={styles.downloadButtonText}>
                    Download Calendar PDF
                  </Text>
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
    backgroundColor: "#fff",
    minHeight: "100vh",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    width: "100%",
    height: "100%",
  },
  backgroundImageContent: {
    flex: 1,
    opacity: 0.65,
    width: "100%",
    height: "100%",
  },
  scrollView: {
    flex: 1,
    marginTop: 40,
    flexGrow: 1,
    minHeight: "100%",
  },
  content: {},
  sectionTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2c365d",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2c365d",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  calendarContainer: {
    alignItems: "center",
    width: "100%",
    // marginVertical: 20,
  },
  calendarGrid: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 15,
  },
  calendarLegend: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 14,
    color: "#fff",
  },
  monthsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 20,
  },
  semesterSection: {
    flex: 1,
    minWidth: 300,
    maxWidth: 600,
  },
  monthCard: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 15,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  monthHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dayHeader: {
    width: 30,
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  dayCell: {
    width: "14.28%",
    height: 30,
    textAlign: "center",
    color: "#fff",
    padding: 5,
  },
  noSchoolDay: {
    backgroundColor: "#ff9800",
    borderRadius: 4,
  },
  firstLastDay: {
    backgroundColor: "#ffeb3b",
    borderRadius: 4,
  },
  importantDay: {
    backgroundColor: "#4caf50",
    borderRadius: 4,
  },
  profDevDay: {
    backgroundColor: "#2196f3",
    borderRadius: 4,
  },
  eventsList: {
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.2)",
  },
  eventItem: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 5,
  },
  calendarImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1.4, // Adjust this based on your image's aspect ratio
    marginTop: 20,
  },
  downloadButton: {
    backgroundColor: "#2c365d",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  listContainer: {
    marginVertical: 10,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    paddingHorizontal: 10,
  },
  bullet: {
    fontSize: 16,
    color: "#2c365d",
    marginRight: 10,
    marginTop: 2,
    fontWeight: "bold",
  },
  listText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2c365d",
    flex: 1,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subSectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2c365d",
    marginTop: 20,
    marginBottom: 12,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  subSubTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2c365d",
    marginTop: 15,
    marginBottom: 8,
    fontStyle: "italic",
  },
  policyContainer: {
    backgroundColor: "rgba(44, 54, 93, 0.05)",
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#fcb040",
  },
  boldText: {
    fontWeight: "700",
    color: "#2c365d",
  },
  warningBox: {
    backgroundColor: "rgba(255, 152, 0, 0.1)",
    borderRadius: 8,
    padding: 12,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: "#ff9800",
  },
  warningText: {
    fontSize: 15,
    color: "#e65100",
    fontWeight: "600",
    textAlign: "center",
  },
  gradingContainer: {
    backgroundColor: "rgba(44, 54, 93, 0.08)",
    borderRadius: 12,
    padding: 20,
    marginVertical: 15,
  },
  gradeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginVertical: 2,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 8,
  },
  gradeLetter: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c365d",
    width: 30,
  },
  gradeRange: {
    fontSize: 16,
    color: "#2c365d",
    fontWeight: "500",
  },
  homeworkClubBox: {
    backgroundColor: "rgba(252, 176, 64, 0.1)",
    borderRadius: 12,
    padding: 18,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "rgba(252, 176, 64, 0.3)",
  },
  homeworkClubTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2c365d",
    marginBottom: 8,
    textAlign: "center",
  },
  homeworkClubText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#2c365d",
    textAlign: "center",
  },
});
