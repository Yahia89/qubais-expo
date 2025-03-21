import { Text, View, StyleSheet, ScrollView, Pressable, Linking, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 768;

export default function Index() {
  const handleDonation = () => {
    Linking.openURL('https://us.mohid.co/ca/losangeles/icsgv/masjid/online/donation/index/15');
  };

  const scrollY = useSharedValue(0);
  
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  // Create animated styles for each paper
  const animatedPaper1Style = useAnimatedStyle(() => {
    const shouldAnimate = scrollY.value > 200;
    return {
      transform: [
        { scale: withSpring(shouldAnimate ? 1 : 0.8) },
        { rotate: withSpring(shouldAnimate ? '-5deg' : '0deg') }
      ],
      opacity: withSpring(shouldAnimate ? 1 : 0.5),
    };
  });

  const animatedPaper2Style = useAnimatedStyle(() => {
    const shouldAnimate = scrollY.value > 250;
    return {
      transform: [
        { scale: withSpring(shouldAnimate ? 1 : 0.8) },
        { rotate: withSpring(shouldAnimate ? '15deg' : '0deg') }
      ],
      opacity: withSpring(shouldAnimate ? 1 : 0.5),
    };
  });

  const animatedPaper3Style = useAnimatedStyle(() => {
    const shouldAnimate = scrollY.value > 300;
    return {
      transform: [
        { scale: withSpring(shouldAnimate ? 1 : 0.8) },
        { rotate: withSpring(shouldAnimate ? '-10deg' : '0deg') }
      ],
      opacity: withSpring(shouldAnimate ? 1 : 0.5),
    };
  });

  const animatedPaper4Style = useAnimatedStyle(() => {
    const shouldAnimate = scrollY.value > 350;
    return {
      transform: [
        { scale: withSpring(shouldAnimate ? 1 : 0.8) },
        { rotate: withSpring(shouldAnimate ? '-8deg' : '0deg') }
      ],
      opacity: withSpring(shouldAnimate ? 1 : 0.5),
    };
  });

  const animatedPaper5Style = useAnimatedStyle(() => {
    const shouldAnimate = scrollY.value > 400;
    return {
      transform: [
        { scale: withSpring(shouldAnimate ? 1 : 0.8) },
        { rotate: withSpring(shouldAnimate ? '12deg' : '0deg') }
      ],
      opacity: withSpring(shouldAnimate ? 1 : 0.5),
    };
  });

  // Add these after your existing animated paper styles
    
    const springConfig = {
      damping: 10,
      stiffness: 100,
      mass: 0.5,
    };
    
    const animatedPaper6Style = useAnimatedStyle(() => {
      const shouldAnimate = scrollY.value > 450;
      return {
        transform: [
          { scale: withSpring(shouldAnimate ? 1 : 0.8, springConfig) },
          { rotate: withSpring(shouldAnimate ? '7deg' : '0deg', springConfig) }
        ],
        opacity: withSpring(shouldAnimate ? 1 : 0.5, springConfig),
      };
    });
  
    const animatedPaper7Style = useAnimatedStyle(() => {
      const shouldAnimate = scrollY.value > 500;
      return {
        transform: [
          { scale: withSpring(shouldAnimate ? 1 : 0.8, springConfig) },
          { rotate: withSpring(shouldAnimate ? '-6deg' : '0deg', springConfig) }
        ],
        opacity: withSpring(shouldAnimate ? 1 : 0.5, springConfig),
      };
    });
  
    const animatedPaper8Style = useAnimatedStyle(() => {
      const shouldAnimate = scrollY.value > 550;
      return {
        transform: [
          { scale: withSpring(shouldAnimate ? 1 : 0.8, springConfig) },
          { rotate: withSpring(shouldAnimate ? '9deg' : '0deg', springConfig) }
        ],
        opacity: withSpring(shouldAnimate ? 1 : 0.5, springConfig),
      };
    });
  
    const animatedPaper9Style = useAnimatedStyle(() => {
      const shouldAnimate = scrollY.value > 600;
      return {
        transform: [
          { scale: withSpring(shouldAnimate ? 1 : 0.8, springConfig) },
          { rotate: withSpring(shouldAnimate ? '-4deg' : '0deg', springConfig) }
        ],
        opacity: withSpring(shouldAnimate ? 1 : 0.5, springConfig),
      };
    });

  return (
    <Animated.ScrollView 
      style={styles.scrollView}
      onScroll={scrollHandler}
      scrollEventThrottle={16}
    >
        <View style={styles.buttonContainer}>
        <View style={styles.paperLines}>
                {[...Array(140)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
          <Pressable style={styles.button} onPress={handleDonation}>
            <Ionicons name="heart" size={24} color="white" style={styles.icon} />
            <Text style={styles.buttonText}>Support Our School</Text>
          </Pressable>
        </View>
      <View style={styles.container}>
        <View style={styles.welcomeContainer}>
          <View style={styles.blockquote}>
            <View style={styles.dropCapContainer}>
              <Text style={styles.dropCap}>Q</Text>
              <Text style={styles.paragraph}>
                uba Islamic Fulltime School, We are a private Islamic school that focuses on fulfilling the academic and character development needs of Muslim students. 
                Our school provides small class sizes with low student-teacher ratios in a safe, secure, and nurturing campus community. 
                We take pride in instilling lasting Islamic values while maintaining highly qualified teachers and a robust academic program.
              </Text>
            </View>
            <Text style={styles.cite}>-Quba Islamic Fulltime School</Text>
          </View>
          </View>
          <View style={styles.papersContainer}>
            {/* Center Paper */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : null,
                { backgroundColor: '#ecb2ba' },
                animatedPaper1Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              {/* Add watermark logo */}
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>100%</Text>
                <Text style={styles.statLabel}>Accepted to High School of Choice</Text>
              </View>
            </Animated.View>
            </View>
            {/* Top Left Paper */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperTopLeft,
                { backgroundColor: '#ffed87' },
                animatedPaper2Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              {/* Add watermark logo */}
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>18 years</Text>
                <Text style={styles.statLabel}>Administrator experience running private schools</Text>
              </View>
              
</Animated.View>
            </View>
            {/* Top Right Paper */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperTopRight,
                { backgroundColor: '#d5e0f9' },
                animatedPaper3Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              {/* Add watermark logo */}
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>2.7 </Text>
                <Text style={styles.statLabel}>Grades Ahead of National Averages Math </Text>
              </View>
              
           </Animated.View>

            {/* Bottom Left Paper */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperBottomLeft,
                { backgroundColor: '#ffd5a6' },
                animatedPaper4Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>12 years</Text>
                <Text style={styles.statLabel}>Average Teaching Experience</Text>
              </View>
              
            </Animated.View>

            {/* Bottom Right Paper */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperBottomRight,
                { backgroundColor: '#c8e6c9' },
                animatedPaper5Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>15</Text>
                <Text style={styles.statLabel}>Maximum Class Size</Text>
              </View>
              
            </Animated.View>
         
      
    {/* New Paper - Founding Year */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperBottomLeft,
                { backgroundColor: '#b2dfdb' }, // Teal-ish color
                animatedPaper6Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={styles.statNumber}>2021</Text>
                <Text style={styles.statLabel}>Quba Islamic School' Founding Year</Text>
              </View>
              
            </Animated.View>

            {/* New Paper - Safe Campus */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperVertical,
                { backgroundColor: '#ffccbc' }, // Peach color
                animatedPaper7Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={[styles.statLabel, { fontSize: 22, fontWeight: '600' }]}>Safe, secure, nurturing campus and community.</Text>
              </View>
             
            </Animated.View>

            {/* New Paper - Islamic Values */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : null,
                { backgroundColor: '#dcedc8' }, // Light green
                animatedPaper8Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={[styles.statLabel, { fontSize: 22, fontWeight: '600' }]}>Instilling Islamic values that endure.</Text>
              </View>
              
            </Animated.View>

            {/* New Paper - WASC Accreditation */}
            <Animated.View 
              style={[
                styles.paper,
                isSmallScreen ? styles.paperVertical : styles.paperBottomRight,
                { backgroundColor: '#bbdefb' }, // Light blue
                animatedPaper9Style
              ]}
            >
              <View style={[styles.tape, styles.tapeTopLeft]} />
              <View style={[styles.tape, styles.tapeTopRight]} />
              <View style={[styles.tape, styles.tapeBottomLeft]} />
              <View style={[styles.tape, styles.tapeBottomRight]} />
              <View style={styles.paperLines}>
                {[...Array(9)].map((_, i) => (
                  <View key={i} style={styles.line} />
                ))}
              </View>
              <View style={styles.watermarkContainer}>
                <Image 
                  source={require('../../assets/quba-logo.png')}
                  style={styles.watermarkLogo}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.statsContainer}>
                <Text style={[styles.statLabel, { fontSize: 22, fontWeight: '600' }]}>WASC Accrediting Commission for Schools</Text>
              </View>
            
            </Animated.View>
         
      
    
            
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 40, // Add padding at bottom for better scrolling experience
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  blockquote: {
    width: '100%',
    maxWidth: 420,
    marginVertical: 40,
  },
  dropCapContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dropCap: {
    fontSize: 180,
    lineHeight: 180,
    color: '#E31B23',
    marginRight: -20,
    marginLeft: -30,
    marginTop: -40,
  },
  paragraph: {
    flex: 1,
    fontSize: 22,
    lineHeight: 35,
    textAlign: 'justify',
    paddingTop: 20,
  },
  cite: {
    textAlign: 'right',
    fontSize: 15,
    marginTop: 16,
    color: '#666',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'left', // Changed from center
  },
  mainText: {
    fontSize: 18,
    color: '#666',
    lineHeight: 26,
    marginBottom: 40,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  featuresContainer: {
    width: '100%',
    gap: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(148, 172, 212, 0.1)',
    borderRadius: 12,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  statsContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  statNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  papersContainer: {
      width: '100%',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: isSmallScreen ? 30 : 150,
    },
    paperVertical: {
      position: 'relative',
      width: '90%',
      maxWidth: 300,
      minHeight: 180,
      marginVertical: 10, // Reduced from 20
      transform: [{ rotate: '0deg' }],
      alignSelf: 'center',
    },
    paper: {
      position: 'relative',
      width: '90%',
      maxWidth: 300,
      minHeight: 180,
      padding: 20,
      marginVertical: 15, // Add vertical spacing between papers
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    tape: {
      position: 'absolute',
      width: 40,
      height: 20,
      backgroundColor: '#dbd8be',
      opacity: 0.5,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#b7b49d',
      borderStyle: 'dotted',
    },
    tapeTopLeft: {
      top: -10,
      left: -10,
      transform: [{ rotate: '-45deg' }],
    },
    tapeTopRight: {
      top: -10,
      right: -10,
      transform: [{ rotate: '45deg' }],
    },
    tapeBottomLeft: {
      bottom: -10,
      left: -10,
      transform: [{ rotate: '45deg' }],
    },
    tapeBottomRight: {
      bottom: -10,
      right: -10,
      transform: [{ rotate: '-45deg' }],
    },
    tapeSectionLeft: {
      position: 'absolute',
      width: 40,
      height: 20,
      backgroundColor: '#dbd8be',
      opacity: 0.5,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#b7b49d',
      borderStyle: 'dotted',
    },
    tapeSectionRight: {
      position: 'absolute',
      width: 40,
      height: 20,
      backgroundColor: '#dbd8be',
      opacity: 0.5,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#b7b49d',
      borderStyle: 'dotted',
    },
    tapeTop: {
      top: -5,
      transform: [{ rotate: '45deg' }],
    },
    tapeBottom: {
      bottom: -5,
      transform: [{ rotate: '-45deg' }],
    },
    paperLines: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          paddingHorizontal: 20,
        },
        line: {
          width: '100%',
          height: 1,
          backgroundColor: 'rgba(0,0,0,0.1)',
          marginBottom: 20,
        },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E31B23',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 'auto',
    minWidth: 200,
    maxWidth: 300,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
  paperTopLeft: {
    backgroundColor: '#ffed87',
    transform: [{ rotate: '2deg' }],
  },
  paperTopRight: {
    backgroundColor: '#d5e0f9',
    transform: [{ rotate: '-2deg' }],
    alignSelf: 'flex-end',
  },
  paperBottomLeft: {
    backgroundColor: '#ffd5a6',
    transform: [{ rotate: '-1deg' }],
  },
  paperBottomRight: {
    backgroundColor: '#c8e6c9',
    transform: [{ rotate: '1deg' }],
    alignSelf: 'flex-end',
  },
  logoContainer: {
      width: '100%',
      alignItems: 'center',
      padding: 20,
      marginTop: 20,
      marginBottom: 40,
    },
    logo: {
      width: isSmallScreen ? 200 : 300,
      height: isSmallScreen ? 100 : 150,
    },
    watermarkContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 0,
    },
    watermarkLogo: {
      width: '80%',
      height: '80%',
      opacity: 0.3,
    },
});
