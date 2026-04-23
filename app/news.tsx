import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Modal,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { ScrollReveal } from "../components/ScrollReveal";
import { GlassCard } from "../components/GlassCard";
import { Footer } from "../components/Footer";

export default function News() {
  const scrollY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageMap: Record<string, any> = {
    "chadly.jpg": require("../assets/images/chadly.jpg"),
    "reptiles_header.jpg": require("../assets/images/reptiles_header.jpg"),
    "students_touching_largeLizard.jpg": require("../assets/images/students_touching_largeLizard.jpg"),
    "reptile_onShoulder.jpg": require("../assets/images/reptile_onShoulder.jpg"),
    "banana_snake.jpg": require("../assets/images/banana_snake.jpg"),
  };

  // Debug: Log when modal opens
  useEffect(() => {
    if (selectedImage) {
      console.log("Selected image:", selectedImage);
      console.log("Image in map:", !!imageMap[selectedImage]);
      console.log("Image data:", imageMap[selectedImage]);
    }
  }, [selectedImage]);

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

  const responsiveBlogTitleSize = () => {
    if (width >= 1024) {
      return { fontSize: 32 };
    } else if (width >= 768) {
      return { fontSize: 26 };
    } else {
      return { fontSize: 22 };
    }
  };

  const responsiveHeroImageHeight = () => {
    if (width >= 1024) {
      return 500;
    } else if (width >= 768) {
      return 400;
    } else {
      return 300;
    }
  };

  const responsiveContentWidth = () => {
    if (width >= 1024) {
      return { width: "80%" };
    } else if (width >= 768) {
      return { width: "100%" };
    } else {
      return { width: "100%" };
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
      <Modal visible={!!selectedImage} transparent={true} animationType="fade">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setSelectedImage(null)}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={(e) => e.stopPropagation()}
          >
            {selectedImage && imageMap[selectedImage] ? (
              <Image
                source={imageMap[selectedImage]}
                style={styles.fullscreenImage}
                resizeMode="contain"
                onError={() =>
                  console.log("Image failed to load:", selectedImage)
                }
              />
            ) : (
              <View style={styles.modalContent}>
                <Text style={styles.errorText}>
                  {selectedImage
                    ? `Image not found: ${selectedImage}`
                    : "No image selected"}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        <Animated.View
          style={[
            styles.content,
            responsivePaddingStyle(),
            responsiveContentWidth(),
            contentStyle,
          ]}
        >
          <ScrollReveal delay={300}>
            <View>
              <View>
                <GlassCard>
                  <ScrollReveal delay={200}>
                    <View
                      style={[
                        styles.heroImageContainer,
                        { height: responsiveHeroImageHeight() },
                      ]}
                    >
                      <Image
                        source={require("../assets/images/chadly.jpg")}
                        style={[
                          styles.heroImage,
                          { width: width >= 768 ? "50%" : "100%" },
                        ]}
                        resizeMode="cover"
                      />

                      <View
                        style={[
                          styles.heroImageContainer,
                          { height: responsiveHeroImageHeight() },
                        ]}
                      ></View>
                    </View>
                  </ScrollReveal>
                  <ScrollReveal delay={350}>
                    <View style={styles.blogHeader}>
                      <Text
                        style={[styles.blogTitle, responsiveBlogTitleSize()]}
                      >
                        Quba Islamic School Shines at the LA County Science Fair
                        2026!
                      </Text>
                      <Text style={styles.blogDate}>Date: April 2026</Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={400}>
                    <Text style={styles.blogIntro}>
                      Quba Islamic School proudly celebrates the outstanding
                      achievements of our students in the fields of science,
                      research, and innovation. Through dedication, curiosity,
                      and hard work, our students have demonstrated excellence
                      across a wide range of disciplines, representing our
                      school with distinction.
                    </Text>
                  </ScrollReveal>

                  <ScrollReveal delay={450}>
                    <View style={styles.recognitionSection}>
                      <Text style={styles.sectionHeading}>
                        Special Recognition
                      </Text>
                      <Text style={styles.recognitionText}>
                        We extend our heartfelt congratulations to{" "}
                        <Text style={styles.highlight}>
                          Rafia Ahmed (10th grade)
                        </Text>{" "}
                        for earning the PECG Senior Honorable Mention Medal.
                        This prestigious recognition highlights her exceptional
                        effort and commitment to academic excellence.
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={500}>
                    <View style={styles.recognitionSection}>
                      <Text style={styles.sectionHeading}>
                        Honorable Mention
                      </Text>
                      <Text style={styles.recognitionText}>
                        <Text style={styles.highlight}>
                          Sarah Hamid (7th grade)
                        </Text>{" "}
                        was awarded Honorable Mention in Cognitive Science,
                        showcasing her strong analytical thinking and passion
                        for understanding human behavior and cognition.
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={550}>
                    <View style={styles.categorySection}>
                      <Text style={styles.sectionHeading}>
                        Recognition Awards
                      </Text>
                      <Text style={styles.categorySubheading}>
                        Our students were also recognized across multiple
                        scientific categories:
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={600}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Behavioral & Social Sciences
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Baierna Zulpihaer (7th grade){"\n"}• Yanar Akoshali
                        (10th grade){"\n"}• Rory Zamril (10th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={650}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Biochemistry & Molecular Biology
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Menaal Obaid (8th grade){"\n"}• Kenzy Morsy (9th
                        grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={700}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Chemistry (General)
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Roqaia Eldokony (8th grade){"\n"}• Aliza Zafar (10th
                        grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={750}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Chemistry (Applied)
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Fatima Ahmed (8th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={800}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Engineering: Civil & Environmental
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Abdullah Zafar (8th grade){"\n"}• Omar Peerzay (6th
                        grade)
                        {"\n"}• Rashidi Zamril (6th grade){"\n"}• Rafia Ahmed
                        (10th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={850}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Engineering: Electronics & Robotics
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Joud Al Tawam (10th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={900}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>Microbiology</Text>
                      <Text style={styles.categoryStudents}>
                        • Haneefa AW Rahmani (8th grade){"\n"}• Chadly Ayachi
                        (7th grade){"\n"}• Erum Hashim (9th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={950}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>Product Science</Text>
                      <Text style={styles.categoryStudents}>
                        • Malik Sabha (6th grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={1000}>
                    <View style={styles.categoryBox}>
                      <Text style={styles.categoryTitle}>
                        Materials Science
                      </Text>
                      <Text style={styles.categoryStudents}>
                        • Lana Almassri (6th grade){"\n"}• Maryam Rahmani (6th
                        grade)
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={1050}>
                    <View style={styles.celebrationSection}>
                      <Text style={styles.celebrationTitle}>
                        A Celebration of Excellence
                      </Text>
                      <Text style={styles.celebrationText}>
                        These accomplishments reflect not only academic
                        strength, but also creativity, perseverance, and a
                        genuine passion for learning. Our students continue to
                        embody the values of curiosity, discipline, and
                        excellence that define Quba Islamic School.
                      </Text>
                      <Text style={styles.celebrationText}>
                        We are incredibly proud of each and every student for
                        their dedication and achievements. Their success is a
                        testament to their hard work, the support of their
                        families, and the commitment of our educators.
                      </Text>
                      <Text style={styles.celebrationText}>
                        May Allah (SWT) continue to bless their knowledge and
                        grant them success in this life and the next.
                      </Text>
                    </View>
                  </ScrollReveal>

                  <ScrollReveal delay={1100}>
                    <View style={styles.outlookSection}>
                      <Text style={styles.outlookTitle}>Looking Ahead</Text>
                      <Text style={styles.outlookText}>
                        At Quba Islamic School, we remain committed to nurturing
                        future scientists, leaders, and innovators through a
                        strong academic foundation and meaningful opportunities
                        for exploration and growth.
                      </Text>
                    </View>
                  </ScrollReveal>

                  {/* New Earth Day Celebration section */}
                  <ScrollReveal delay={1150}>
                    <View style={styles.reptileSection}>
                      <Text style={styles.reptileTitle}>
                        Earth Day Celebration at Quba Islamic School
                      </Text>
                      <Text style={styles.reptileSubtitle}>
                        Students Enjoy a Live Reptile Show on Campus
                      </Text>
                      <Text style={styles.blogDate}>Date: April 22, 2026</Text>
                      <View
                        style={[
                          styles.heroImageContainer,
                          { height: responsiveHeroImageHeight() },
                        ]}
                      >
                        <Image
                          source={require("../assets/images/reptiles_header.jpg")}
                          style={[
                            styles.heroImage,
                            { width: width >= 768 ? "50%" : "100%" },
                          ]}
                          resizeMode="cover"
                        />
                      </View>

                      <Text style={styles.reptileText}>
                        Quba Islamic School celebrated Earth Day on April 22
                        with a fun and educational live reptile show on campus.
                      </Text>

                      <View style={styles.reptileGallery}>
                        <Image
                          source={require("../assets/images/students_touching_largeLizard.jpg")}
                          style={styles.reptileThumb}
                          resizeMode="cover"
                        />

                        <Text style={styles.reptileText}>
                          Students had the opportunity to observe and interact
                          with a variety of fascinating reptiles. The
                          presentation gave students a closer look at these
                          amazing animals while teaching them about their
                          habitats, behaviors, and importance in the natural
                          world.
                        </Text>

                        <Image
                          source={require("../assets/images/reptile_onShoulder.jpg")}
                          style={styles.reptileThumb}
                          resizeMode="cover"
                        />

                        <Text style={styles.reptileText}>
                          The event was filled with excitement, curiosity, and
                          hands-on learning. Students eagerly participated,
                          asked thoughtful questions, and showed great
                          enthusiasm as they explored the beauty and diversity
                          of Allah’s creation.
                        </Text>

                        <Image
                          source={require("../assets/images/banana_snake.jpg")}
                          style={styles.reptileThumb}
                          resizeMode="cover"
                        />
                        <Text style={styles.reptileText}>
                          At Quba Islamic School, we value opportunities that
                          make learning meaningful and memorable. Our Earth Day
                          celebration was a wonderful way to encourage
                          appreciation for wildlife, nature, and our shared
                          responsibility to care for the environment.
                        </Text>
                      </View>
                    </View>
                  </ScrollReveal>
                </GlassCard>
              </View>
            </View>
          </ScrollReveal>
        </Animated.View>
        <Footer />
      </Animated.ScrollView>
    </View>
  );
}

const styles: any = StyleSheet.create({
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
  },
  scrollViewContent: {
    flexGrow: 1,
    minHeight: "100%",
  },
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
  // Blog styles
  blogHeader: {
    marginBottom: 30,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#e0e0e0",
  },
  blogTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 10,
    lineHeight: 36,
  },
  blogDate: {
    fontSize: 14,
    color: "#888",
    fontWeight: "600",
    fontStyle: "italic",
  },
  blogIntro: {
    fontSize: 16,
    lineHeight: 26,
    color: "#2c365d",
    marginBottom: 30,
    fontWeight: "500",
  },
  recognitionSection: {
    // backgroundColor: "#f9fafb",
    padding: 16,
    marginVertical: 20,
    borderRadius: 8,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 12,
  },
  recognitionText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#2c365d",
    fontWeight: "500",
  },
  highlight: {
    fontWeight: "700",
    color: "#1a5f2c",
    // backgroundColor: "#e8f5e9",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categorySection: {
    marginVertical: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  categorySubheading: {
    fontSize: 15,
    color: "#666",
    marginTop: 10,
    fontWeight: "500",
    fontStyle: "italic",
  },
  categoryBox: {
    // backgroundColor: "#fafbfc",
    // borderWidth: 1,
    // borderColor: "#e8e8e8",
    borderRadius: 10,
    padding: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 12,
    paddingBottom: 10,
    borderBottomWidth: 2,
    // borderBottomColor: "#e0e0e0",
  },
  categoryStudents: {
    fontSize: 14,
    lineHeight: 22,
    color: "#2c365d",
    fontWeight: "500",
  },
  celebrationSection: {
    // backgroundColor: "#fef7e8",
    borderRadius: 10,
    padding: 20,
    marginVertical: 30,
  },
  celebrationTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 16,
  },
  celebrationText: {
    fontSize: 15,
    lineHeight: 26,
    color: "#2c365d",
    marginBottom: 12,
    fontWeight: "500",
  },

  outlookSection: {
    // backgroundColor: "#e3f2fd",
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
  },
  outlookTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 12,
  },
  outlookText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#2c365d",
    fontWeight: "500",
  },

  // New styles for Earth Day / reptile section
  reptileSection: {
    borderRadius: 10,
    padding: 20,
    marginVertical: 30,
    backgroundColor: "transparent",
  },
  reptileTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 8,
  },
  reptileSubtitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a5f2c",
    marginBottom: 12,
  },
  reptileHeaderImageContainer: {
    width: "100%",
    height: 220,
    marginBottom: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  reptileHeaderImage: {
    width: "100%",
    height: "100%",
  },
  reptileGallery: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // gap is not supported consistently; use padding/margins and wrapping
    marginVertical: 12,
    flexWrap: "wrap",
  },
  reptileThumb: {
    width: 340,
    height: 420,
    borderRadius: 8,
    marginVertical: 6,
  },
  reptileMain: {
    flex: 1,
    minWidth: 160,
    height: 140,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  reptileText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#2c365d",
    marginBottom: 12,
  },
  // content wrapper to center and limit width on large screens
  content: {
    maxWidth: "100%",
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 20,
  },
  accreditationRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 12,
    padding: 20,
    marginTop: 20,
    flexWrap: "wrap",
  },
  logoContainer: {
    backgroundColor: "transparent",
    padding: 8,
  },
  accreditationLogo: {
    width: 450,
    height: 250,
  },
  Mascot_2: {
    width: 320,
    height: 160,
    marginBottom: 12,
    borderRadius: 20,
    overflow: "hidden",
  },
  schoolLogo: {
    width: 450,
    height: 250,
    marginLeft: 12,
    backgroundColor: "#fff",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenImage: {
    width: "90%",
    height: "70%",
    maxWidth: 900,
    maxHeight: 900,
  },
  modalContent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  errorText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  heroImageContainer: {
    width: "100%",
    marginBottom: 30,
    marginTop: 60,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  heroImage: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});
