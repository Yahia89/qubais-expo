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
import Animated,
{
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { GlassCard } from "../components/GlassCard";
import { Footer } from "../components/Footer";

export default function News() {
  const router = useRouter();
  const scrollY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageMap: Record<string, any> = {
    "chadly.jpg": require("../assets/images/chadly.jpg"),
    "reptiles_header.jpg": require("../assets/images/reptiles_header.jpg"),
    "students_touching_largeLizard.jpg": require("../assets/images/students_touching_largeLizard.jpg"),
    "reptile_onShoulder.jpg": require("../assets/images/reptile_onShoulder.jpg"),
    "banana_snake.jpg": require("../assets/images/banana_snake.jpg"),
    "Hands-On-Learning-thumbnail.jpg": require("../assets/images/Hands-On-Learning-thumbnail.jpg"),
    "icna-header.jpg": require("../assets/images/icna-header.jpg"),
  };

  const articles = [
    {
      id: "community-service",
      title: "High School Students Give Back Through Community Service with ICNA Relief",
      date: "April 28, 2026",
      thumbnail: "icna-header.jpg",
      excerpt:
        "Our high school students volunteered with ICNA Relief, assisting with food organization and distribution efforts to support families facing food insecurity.",
      body: `High School Students Give Back Through Community Service with ICNA Relief

At Quba Islamic School, community service is more than a graduation requirement—it is a reflection of our values and commitment to developing compassionate, responsible leaders. Today, our high school students took that commitment beyond the classroom by volunteering with ICNA Relief, an organization dedicated to serving communities in need.

Students were engaged in hands-on service, assisting with food organization and distribution efforts. From sorting fresh produce and packaged goods to preparing bags for families, every task contributed to a larger mission: supporting individuals and families facing food insecurity.

This experience provided students with a meaningful opportunity to witness the direct impact of their efforts. It also reinforced important life skills such as teamwork, responsibility, and empathy. Working side by side, our students demonstrated initiative and a strong sense of purpose, embodying the spirit of service that we strive to instill in all our learners.

Volunteering with ICNA Relief allowed students to connect their faith and values with real-world action. Acts of service like these not only strengthen our community but also help shape students into individuals who are mindful of others and committed to making a positive difference.

We are proud of our students for dedicating their time and energy to such an important cause. Their efforts today are a reminder that even small acts of kindness can have a lasting impact.`,
    },
    {
      id: "papermaking",
      title: "Hands-On Learning: Students Make Their Own Paper",
      date: "April 23, 2026",
      thumbnail: "Hands-On-Learning-thumbnail.jpg",
      excerpt:
        "A Creative Earth-Friendly Classroom Activity — Kindergarten students learn the process of transforming pulp into paper.",
      body: `Hands-On Learning: Students Make Their Own Paper

A Creative Earth-Friendly Classroom Activity

Our students in Kindergarten recently took part in a fun and meaningful hands-on activity—making their own paper from scratch!

Using simple materials and guided instruction, students learned the process of transforming pulp into paper. From dipping frames into the mixture to pressing and drying their sheets, each step gave students a deeper appreciation for how everyday materials can be reused and repurposed.

This activity was not only creative and engaging, but also reinforced important lessons about sustainability and environmental responsibility. Students explored how recycling works in a practical way, connecting their learning to real-world applications.

Throughout the process, students demonstrated patience, teamwork, and excitement as they watched their handmade paper come to life. The pride on their faces reflected the joy of learning through experience.

At Quba Islamic School, we are committed to providing interactive learning opportunities that inspire creativity while nurturing awareness of our responsibility to care for the environment.`,
    },
    {
      id: "earth-day",
      title: "Earth Day Celebration at Quba Islamic School",
      date: "April 22, 2026",
      thumbnail: "reptiles_header.jpg",
      excerpt:
        "Students Enjoy a Live Reptile Show on Campus — hands-on learning and appreciation for wildlife.",
      body: `Quba Islamic School celebrated Earth Day on April 22 with a fun and educational live reptile show on campus. Students had the opportunity to observe and interact with a variety of fascinating reptiles. The presentation gave students a closer look at these amazing animals while teaching them about their habitats, behaviors, and importance in the natural world.`,
    },
    {
      id: "science-fair",
      title: "Quba Islamic School Shines at the LA County Science Fair 2026!",
      date: "April 2026",
      thumbnail: "chadly.jpg",
      excerpt:
        "Quba Islamic School proudly celebrates the outstanding achievements of our students in the fields of science, research, and innovation.",
      body: `Quba Islamic School proudly celebrates the outstanding achievements of our students in the fields of science, research, and innovation. Through dedication, curiosity, and hard work, our students have demonstrated excellence across a wide range of disciplines, representing our school with distinction.

Special Recognition: Rafia Ahmed (10th grade) earned the PECG Senior Honorable Mention Medal.

(Full list of awards and student achievements available in the original article.)`,
    },
  ];

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
          <ScrollReveal delay={200}>
            <View>
              <Text style={styles.sectionTitle}>News & Blogs</Text>

              <View
                style={[
                  styles.articleList,
                  width >= 768 ? styles.articleGrid : {},
                ]}
              >
                {articles.map((article) => (
                  <TouchableOpacity
                    key={article.id}
                    activeOpacity={0.9}
                    onPress={() =>
                      router.push({
                        pathname: "/news-detail" as any,
                        params: { id: article.id },
                      })
                    }
                    style={styles.articleTouchable}
                  >
                    <GlassCard>
                      <View
                        style={[
                          styles.articleCard,
                          width >= 768 && styles.articleCardLarge,
                        ]}
                      >
                        {imageMap[article.thumbnail] ? (
                          <Image
                            source={imageMap[article.thumbnail]}
                            style={[
                              styles.articleThumb,
                              width >= 768
                                ? styles.thumbLarge
                                : styles.thumbSmall,
                            ]}
                            resizeMode="cover"
                          />
                        ) : null}

                        <View style={styles.cardContent}>
                          <Text style={styles.blogTitleSmall}>
                            {article.title}
                          </Text>
                          <Text style={styles.blogDate}>{article.date}</Text>
                          <Text style={styles.blogIntro}>{article.excerpt}</Text>
                        </View>
                      </View>
                    </GlassCard>
                  </TouchableOpacity>
                ))}
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
    minHeight: "100%",
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
    // lineHeight: 26,
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

  // Styles for compact article list view
  articleList: {
    width: "100%",
    flexDirection: "column",
    paddingBottom: 20,
  },
  articleGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  articleTouchable: {
    width: "100%",
    padding: 6,
  },
  articleCard: {
    backgroundColor: "rgba(255, 255, 255, 0.49)",
    borderRadius: 12,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    height: 400,
  },
  articleCardLarge: {
    flexDirection: "row",
    alignItems: "center",
  },
  articleThumb: {
    borderRadius: 8,
    marginRight: 0,
  },
  thumbLarge: {
    width: "40%",
    height: 400,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    marginRight: 0,
  },
  thumbSmall: {
    width: "100%",
    height: 200,
    marginBottom: 0,
  },
  cardContent: {
    flex: 1,
    padding: 8,
  },
  blogTitleSmall: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 6,
    lineHeight: 24,
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
