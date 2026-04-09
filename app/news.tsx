import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
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

export default function News() {
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
              <Text style={styles.sectionTitle}>School Calendar</Text>
              <View style={styles.calendarContainer}>
                <Image
                  source={require("../assets/images/2026-2027-QIS-Calendar.png")}
                  style={styles.calendarImage}
                  resizeMode="contain"
                />
                <TouchableOpacity
                  style={styles.downloadButton}
                  onPress={() =>
                    Linking.openURL("/assets/2026-2027-QIS-Calendar.pdf")
                  }
                >
                  <Text style={styles.downloadButtonText}>
                    Download Calendar PDF
                  </Text>
                </TouchableOpacity>
              </View>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <GlassCard>
              <Text style={styles.sectionTitle}>Announcements</Text>
              
              <ScrollReveal delay={350}>
                <Text style={styles.announcementTitle}>
                  🌟 Quba Islamic School Shines at the LA County Science Fair 2026! 🌟
                </Text>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <Text style={styles.description}>
                  We are incredibly proud of our students for their outstanding achievements and representation at this year's LA County Science Fair! 👏🔬
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={450}>
                <Text style={styles.awardCategory}>🏅 Special Award</Text>
                <Text style={styles.awardText}>
                  Rafia Ahmed (10th grade) – PECG Senior Honorable Mention Medal
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <Text style={styles.awardCategory}>🏅 Honorable Mention</Text>
                <Text style={styles.awardText}>
                  Sarah Hamid (7th grade) – Cognitive Science
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={550}>
                <Text style={styles.awardCategory}>👏 Recognition Awards</Text>
                <Text style={styles.categoryLabel}>
                  Behavioral & Social Sciences
                </Text>
                <Text style={styles.studentList}>
                  • Baierna Zulpihaer (7th grade){"\n"}
                  • Yanar Akoshali (10th grade){"\n"}
                  • Rory Zamril (10th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <Text style={styles.categoryLabel}>
                  Biochemistry & Molecular Biology
                </Text>
                <Text style={styles.studentList}>
                  • Menaal Obaid (8th grade){"\n"}
                  • Kenzy Morsy (9th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={650}>
                <Text style={styles.categoryLabel}>
                  Chemistry (General)
                </Text>
                <Text style={styles.studentList}>
                  • Roqaia Eldokony (8th grade){"\n"}
                  • Aliza Zafar (10th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={700}>
                <Text style={styles.categoryLabel}>
                  Chemistry (Applied)
                </Text>
                <Text style={styles.studentList}>
                  • Fatima Ahmed (8th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={750}>
                <Text style={styles.categoryLabel}>
                  Engineering: Civil & Environmental
                </Text>
                <Text style={styles.studentList}>
                  • Abdullah Zafar (8th grade){"\n"}
                  • Omar Peerzay (6th grade){"\n"}
                  • Rashidi Zamril (6th grade){"\n"}
                  • Rafia Ahmed (10th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <Text style={styles.categoryLabel}>
                  Engineering: Electronics & Robotics
                </Text>
                <Text style={styles.studentList}>
                  • Joud Al Tawam (10th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={850}>
                <Text style={styles.categoryLabel}>
                  Microbiology
                </Text>
                <Text style={styles.studentList}>
                  • Haneefa AW Rahmani (8th grade){"\n"}
                  • Chadly Ayachi (7th grade){"\n"}
                  • Erum Hashim (9th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={900}>
                <Text style={styles.categoryLabel}>
                  Product Science
                </Text>
                <Text style={styles.studentList}>
                  • Malik Sabha (6th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={950}>
                <Text style={styles.categoryLabel}>
                  Materials Science
                </Text>
                <Text style={styles.studentList}>
                  • Lana Almassri (6th grade){"\n"}
                  • Maryam Rahmani (6th grade)
                </Text>
              </ScrollReveal>

              <ScrollReveal delay={1000}>
                <Text style={styles.closingMessage}>
                  🎉 We are so proud of each and every student for their hard work, dedication, and passion for learning. You have represented QIS with excellence! May Allah (SWT) continue to bless your knowledge and grant you success in this life and the next. 🌙✨
                </Text>
              </ScrollReveal>
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
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c365d",
    marginTop: 70,
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#2c365d",
    marginBottom: 70,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  calendarContainer: {
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  calendarImage: {
    width: "100%",
    height: 400,
  },
  downloadButton: {
    backgroundColor: "#2c365d",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  downloadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  hashtags: {
    fontSize: 12,
    color: "#666",
    marginTop: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  closingMessage: {
    fontSize: 15,
    lineHeight: 24,
    color: "#2c365d",
    marginVertical: 20,
    fontStyle: "italic",
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    fontWeight: "bold",
    textAlign: "center",
  },
  announcementTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2c365d",
    marginVertical: 15,
    textAlign: "center",
    marginHorizontal: "auto",
  },
  awardCategory: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a5f2c",
    marginTop: 15,
    marginBottom: 8,
  },
  awardText: {
    fontSize: 15,
    color: "#2c365d",
    marginBottom: 12,
    paddingLeft: 10,
    lineHeight: 22,
  },
  categoryLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000000ff",
    marginTop: 12,
    marginBottom: 6,
  },
  studentList: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2c365d",
    marginBottom: 15,
    paddingLeft: 20,
    lineHeight: 22,
  },
});
