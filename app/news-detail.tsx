import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ScrollReveal } from "../components/ScrollReveal";
import { GlassCard } from "../components/GlassCard";
import { Footer } from "../components/Footer";

export default function NewsDetail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const contentOpacity = useSharedValue(0);

  const imageMap: Record<string, any> = {
    "chadly.jpg": require("../assets/images/chadly.jpg"),
    "reptiles_header.jpg": require("../assets/images/reptiles_header.jpg"),
    "students_touching_largeLizard.jpg": require("../assets/images/students_touching_largeLizard.jpg"),
    "reptile_onShoulder.jpg": require("../assets/images/reptile_onShoulder.jpg"),
    "banana_snake.jpg": require("../assets/images/banana_snake.jpg"),
    "Hands-On-Learning-thumbnail.jpg": require("../assets/images/Hands-On-Learning-thumbnail.jpg"),
    "hands-on-1.jpg": require("../assets/images/hands-on-1.jpg"),
    "hands-on-2.jpg": require("../assets/images/hands-on-2.jpg"),
    "hands-on-3.jpg": require("../assets/images/hands-on-3.jpg"),
    "icna-header.jpg": require("../assets/images/icna-header.jpg"),
    "icna-1.jpg": require("../assets/images/icna-1.jpg"),
    "icna-2.jpg": require("../assets/images/icna-2.jpg"),
    "khutbah-header.jpg": require("../assets/images/khutbah-header.jpg"),
    "khutbah-1.jpg": require("../assets/images/khutbah-1.jpg"),
    "khutbah-3.jpg": require("../assets/images/khutbah-3.jpg"),
  };

  const articles: Record<string, any> = {
    "science-fair": {
      id: "science-fair",
      title: "Quba Islamic School Shines at the LA County Science Fair 2026!",
      date: "April 2026",
      thumbnail: "chadly.jpg",
      sections: [
        {
          type: "intro",
          content: "Quba Islamic School proudly celebrates the outstanding achievements of our students in the fields of science, research, and innovation. Through dedication, curiosity, and hard work, our students have demonstrated excellence across a wide range of disciplines, representing our school with distinction."
        },
        {
          type: "section",
          title: "Special Recognition",
          content: "We extend our heartfelt congratulations to Rafia Ahmed (10th grade) for earning the PECG Senior Honorable Mention Medal. This prestigious recognition highlights her exceptional effort and commitment to academic excellence."
        },
        {
          type: "section",
          title: "Honorable Mention",
          content: "Sarah Hamid (7th grade) was awarded Honorable Mention in Cognitive Science, showcasing her strong analytical thinking and passion for understanding human behavior and cognition."
        },
        {
          type: "section",
          title: "Recognition Awards",
          subtitle: "Our students were also recognized across multiple scientific categories:",
          awards: [
            { category: "Behavioral & Social Sciences", students: "Baierna Zulpihaer (7th grade), Yanar Akoshali (10th grade), Rory Zamril (10th grade)" },
            { category: "Biochemistry & Molecular Biology", students: "Menaal Obaid (8th grade), Kenzy Morsy (9th grade)" },
            { category: "Chemistry (General)", students: "Roqaia Eldokony (8th grade), Aliza Zafar (10th grade)" },
            { category: "Chemistry (Applied)", students: "Fatima Ahmed (8th grade)" },
            { category: "Engineering: Civil & Environmental", students: "Abdullah Zafar (8th grade), Omar Peerzay (6th grade), Rashidi Zamril (6th grade), Rafia Ahmed (10th grade)" },
            { category: "Engineering: Electronics & Robotics", students: "Joud Al Tawam (10th grade)" },
            { category: "Microbiology", students: "Haneefa AW Rahmani (8th grade), Chadly Ayachi (7th grade), Erum Hashim (9th grade)" },
            { category: "Product Science", students: "Malik Sabha (6th grade)" },
            { category: "Materials Science", students: "Lana Almassri (6th grade), Maryam Rahmani (6th grade)" }
          ]
        },
        {
          type: "section",
          title: "A Celebration of Excellence",
          content: "These accomplishments reflect not only academic strength, but also creativity, perseverance, and a genuine passion for learning. Our students continue to embody the values of curiosity, discipline, and excellence that define Quba Islamic School.\n\nWe are incredibly proud of each and every student for their dedication and achievements. Their success is a testament to their hard work, the support of their families, and the commitment of our educators.\n\nMay Allah (SWT) continue to bless their knowledge and grant them success in this life and the next."
        },
        {
          type: "section",
          title: "Looking Ahead",
          content: "At Quba Islamic School, we remain committed to nurturing future scientists, leaders, and innovators through a strong academic foundation and meaningful opportunities for exploration and growth."
        }
      ]
    },
    "earth-day": {
      id: "earth-day",
      title: "Earth Day Celebration at Quba Islamic School",
      date: "April 22, 2026",
      thumbnail: "reptiles_header.jpg",
      images: ["students_touching_largeLizard.jpg", "reptile_onShoulder.jpg", "banana_snake.jpg"],
      body: `Quba Islamic School celebrated Earth Day on April 22 with a fun and educational live reptile show on campus.

Students had the opportunity to observe and interact with a variety of fascinating reptiles. The presentation gave students a closer look at these amazing animals while teaching them about their habitats, behaviors, and importance in the natural world.

The event was filled with excitement, curiosity, and hands-on learning. Students eagerly participated, asked thoughtful questions, and showed great enthusiasm as they explored the beauty and diversity of Allah's creation.

At Quba Islamic School, we value opportunities that make learning meaningful and memorable. Our Earth Day celebration was a wonderful way to encourage appreciation for wildlife, nature, and our shared responsibility to care for the environment.`,
    },
    "papermaking": {
      id: "papermaking",
      title: "Hands-On Learning: Students Make Their Own Paper",
      date: "April 23, 2026",
      thumbnail: "Hands-On-Learning-thumbnail.jpg",
      images: ["hands-on-1.jpg", "hands-on-2.jpg", "hands-on-3.jpg"],
      body: `Hands-On Learning: Students Make Their Own Paper

A Creative Earth-Friendly Classroom Activity

Our students in Kindergarten recently took part in a fun and meaningful hands-on activity—making their own paper from scratch!

Using simple materials and guided instruction, students learned the process of transforming pulp into paper. From dipping frames into the mixture to pressing and drying their sheets, each step gave students a deeper appreciation for how everyday materials can be reused and repurposed.

This activity was not only creative and engaging, but also reinforced important lessons about sustainability and environmental responsibility. Students explored how recycling works in a practical way, connecting their learning to real-world applications.

Throughout the process, students demonstrated patience, teamwork, and excitement as they watched their handmade paper come to life. The pride on their faces reflected the joy of learning through experience.

At Quba Islamic School, we are committed to providing interactive learning opportunities that inspire creativity while nurturing awareness of our responsibility to care for the environment.`,
    },
    "community-service": {
      id: "community-service",
      title: "High School Students Give Back Through Community Service with ICNA Relief",
      date: "April 28, 2026",
      thumbnail: "icna-header.jpg",
      images: ["icna-1.jpg", "icna-2.jpg"],
      body: `High School Students Give Back Through Community Service with ICNA Relief

At Quba Islamic School, community service is more than a graduation requirement—it is a reflection of our values and commitment to developing compassionate, responsible leaders. Today, our high school students took that commitment beyond the classroom by volunteering with ICNA Relief, an organization dedicated to serving communities in need.

Students were engaged in hands-on service, assisting with food organization and distribution efforts. From sorting fresh produce and packaged goods to preparing bags for families, every task contributed to a larger mission: supporting individuals and families facing food insecurity.

This experience provided students with a meaningful opportunity to witness the direct impact of their efforts. It also reinforced important life skills such as teamwork, responsibility, and empathy. Working side by side, our students demonstrated initiative and a strong sense of purpose, embodying the spirit of service that we strive to instill in all our learners.

Volunteering with ICNA Relief allowed students to connect their faith and values with real-world action. Acts of service like these not only strengthen our community but also help shape students into individuals who are mindful of others and committed to making a positive difference.

We are proud of our students for dedicating their time and energy to such an important cause. Their efforts today are a reminder that even small acts of kindness can have a lasting impact.`,
    },
    "khutbah-presentations": {
      id: "khutbah-presentations",
      title: "Khutbah Presentations: A Milestone of Growth and Confidence",
      date: "May 5 & May 7, 2026",
      thumbnail: "khutbah-header.jpg",
      images: ["khutbah-3.jpg", "khutbah-1.jpg"],
      body: `Khutbah Presentations: A Milestone of Growth and Confidence

May 5 & May 7, 2026 | Following Salat Al-Dhuhr

Our school community was honored to host a special Khutbah presentation led by our students at the masjid, marking a meaningful milestone in their academic and spiritual journey.

Over the past several weeks, students have been deeply engaged in preparing for this moment. Through guided instruction, they explored how to select meaningful and relevant topics, organize their thoughts with clarity, and deliver their messages with confidence and purpose. This process not only strengthened their public speaking skills but also nurtured their understanding of responsibility, leadership, and faith.

Standing at the minbar, our students demonstrated remarkable growth. They spoke with sincerity and composure, addressing important themes that reflected both personal reflection and community awareness. Their ability to communicate their ideas so thoughtfully was a testament to their hard work and dedication.

The presence of community members and peers played a vital role in making this experience even more impactful. Their support and encouragement created an atmosphere of pride and motivation, reinforcing the importance of uplifting our youth as they take on leadership roles.

These Khutbah presentations were more than just an academic exercise—they were a powerful opportunity for students to connect knowledge with practice, and to experience the responsibility of sharing meaningful reminders with others.

We are incredibly proud of our students and grateful to everyone who attended and supported them. Events like these highlight the strength of our community and the bright future ahead for our students.`,
    },
  };

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

  const responsiveContentWidth = () => {
    if (width >= 1024) {
      return { width: "80%" };
    } else if (width >= 768) {
      return { width: "100%" };
    } else {
      return { width: "100%" };
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

  const article = articles[id as string];

  if (!article) {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage}>
          <ImageBackground
            source={require("../assets/images/school-bg.png")}
            style={styles.backgroundImageContent}
            resizeMode="cover"
          />
        </View>
        <View style={styles.centeredContent}>
          <Text style={styles.errorText}>Article not found</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
        scrollEventThrottle={16}
        contentContainerStyle={styles.scrollViewContent}
      >
        <TouchableOpacity
          style={styles.backButtonTop}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back to News</Text>
        </TouchableOpacity>

        <Animated.View
          style={[
            styles.content,
            responsivePaddingStyle(),
            responsiveContentWidth(),
            contentStyle,
          ]}
        >
          <ScrollReveal delay={200}>
            <GlassCard>
              <ScrollReveal delay={300}>
                <View style={styles.blogHeader}>
                  <Text style={styles.blogTitle}>{article.title}</Text>
                  <Text style={styles.blogDate}>{article.date}</Text>
                </View>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                {imageMap[article.thumbnail] ? (
                  <View
                    style={{
                      height: responsiveHeroImageHeight(),
                      marginBottom: 30,
                      borderRadius: 12,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      source={imageMap[article.thumbnail]}
                      style={{ width: "100%", height: "100%"}}
                      resizeMode="contain"
                    />
                  </View>
                ) : null}
              </ScrollReveal>

              <ScrollReveal delay={400}>
                {article.sections ? (
                  <View>
                    {article.sections.map((section: any, index: number) => {
                      if (section.type === "intro") {
                        return (
                          <Text
                            key={index}
                            style={[styles.blogContent, { marginBottom: 30 }]}
                          >
                            {section.content}
                          </Text>
                        );
                      } else if (section.type === "section") {
                        return (
                          <View key={index} style={styles.categorySection}>
                            <Text style={styles.sectionHeading}>
                              {section.title}
                            </Text>
                            {section.subtitle && (
                              <Text style={styles.categorySubheading}>
                                {section.subtitle}
                              </Text>
                            )}
                            {section.awards ? (
                              <View style={{ marginTop: 12 }}>
                                {section.awards.map((award: any, idx: number) => (
                                  <View
                                    key={idx}
                                    style={styles.categoryBox}
                                  >
                                    <Text style={styles.categoryTitle}>
                                      {award.category}
                                    </Text>
                                    <Text style={styles.categoryStudents}>
                                      {award.students}
                                    </Text>
                                  </View>
                                ))}
                              </View>
                            ) : (
                              <Text style={[styles.blogContent, { marginTop: 12, whiteSpace: "pre-wrap" }]}>
                                {section.content}
                              </Text>
                            )}
                          </View>
                        );
                      }
                      return null;
                    })}
                  </View>
                ) : (
                  <Text style={styles.blogContent}>{article.body}</Text>
                )}
              </ScrollReveal>

              {article.images && article.images.length > 0 && (
                <View style={{ marginTop: 30 }}>
                  {article.images.map((imageName: string, index: number) => (
                    <ScrollReveal key={imageName} delay={450 + index * 50}>
                      {imageMap[imageName] ? (
                        <View
                          style={{
                            height: responsiveHeroImageHeight(),
                            marginBottom: 20,
                            borderRadius: 12,
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            source={imageMap[imageName]}
                            style={{ width: "100%", height: "100%" }}
                            resizeMode="contain"
                          />
                        </View>
                      ) : null}
                    </ScrollReveal>
                  ))}
                </View>
              )}
            </GlassCard>
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
  content: {
    maxWidth: "100%",
    alignSelf: "center",
    paddingTop: 8,
    paddingBottom: 20,
  },
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
  blogContent: {
    fontSize: 16,
    lineHeight: 26,
    color: "#2c365d",
    fontWeight: "500",
  },
  categorySection: {
    marginVertical: 30,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2c365d",
    marginBottom: 12,
  },
  categorySubheading: {
    fontSize: 15,
    color: "#666",
    marginTop: 10,
    fontWeight: "500",
    fontStyle: "italic",
  },
  categoryBox: {
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
  },
  categoryStudents: {
    fontSize: 14,
    lineHeight: 22,
    color: "#2c365d",
    fontWeight: "500",
  },
  backButtonTop: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  backButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: "#2c365d",
    fontWeight: "600",
    marginVertical: 50,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#2c365d",
    marginBottom: 20,
    fontWeight: "600",
  },
});
