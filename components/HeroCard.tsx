import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  interpolate, 
  Extrapolation,
  useSharedValue 
} from 'react-native-reanimated';
import Carousel, { 
  ICarouselInstance,
  Pagination 
} from 'react-native-reanimated-carousel';

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: any;
}

interface Props {
  scrollY: Animated.SharedValue<number>;
  onPress?: (item?: CardItem) => void;
}

const cardItems: CardItem[] = [
  {
    id: '1',
    title: 'Library Resources',
    description: 'Access our extensive collection of books, digital resources, and study materials in our modern library space.',
    image: require('../assets/images/DSC06614-768x432.jpg'),
  },
  {
    id: '2',
    title: 'Student Community',
    description: 'Join a diverse and supportive community of students from around the world, building lifelong connections.',
    image: require('../assets/images/DSC06624-scaled.jpg'),
  },
  {
    id: '3',
    title: 'Collaborative Learning',
    description: 'Engage in collaborative learning environments designed to foster creativity and critical thinking.',
    image: require('../assets/images/DSC06614-768x432.jpg'),
  },
  {
    id: '4',
    title: 'Diverse Education',
    description: 'Experience a curriculum that celebrates diversity and prepares students for global citizenship.',
    image: require('../assets/images/DSC06583.jpg'),
  },
  {
    id: '5',
    title: 'Spacious Learning Environment',
    description: 'Experience learning in our modern, spacious classrooms designed to ensure comfort and safety while maintaining an optimal student-to-space ratio.',
    image: require('../assets/images/DSC06592.jpg'),
  },
  {
    id: '6',
    title: 'Diverse Education',
    description: 'Experience a curriculum that celebrates diversity and prepares students for global citizenship.',
    image: require('../assets/images/DSC06614-768x432.jpg'),
  },
  {
    id: '7',
    title: 'Diverse Education',
    description: 'Experience a curriculum that celebrates diversity and prepares students for global citizenship.',
    image: require('../assets/images/DSC06614-768x432.jpg'),
  },
];

export const HeroCard: React.FC<Props> = ({ scrollY, onPress }) => {
  const { width } = useWindowDimensions();
  const progress = useSharedValue<number>(0);
  const carouselRef = useRef<ICarouselInstance>(null);

  // Properly type the carousel mode
  let cardWidth = width < 400 ? 200 : width < 600 ? 280 : width < 900 ? 360 : 420;
  let carouselMode: "parallax" | "horizontal-stack" = width >= 900 ? "parallax" : "horizontal-stack";
  let modeConfig = width >= 900 
    ? { parallaxScrollingScale: 0.9, parallaxScrollingOffset: 60 }
    : { snapDirection: 'left' as const, stackInterval: 18 };

  const cardHeight = 380;

  const heroMotion = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          scrollY.value,
          [0, 500],
          [0, -60],
          Extrapolation.CLAMP
        ),
      },
    ],
  }));

  const onPressPagination = (index: number) => {
    carouselRef.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Animated.View style={[styles.container, heroMotion]}>
      <View style={styles.carouselWrapper}>
        <Carousel
          ref={carouselRef}
          width={width}
          height={cardHeight}
          data={cardItems}
          style={{ width: '100%' }}
          renderItem={({ item }) => (
            <View style={[styles.card, { width: cardWidth, height: cardHeight, marginHorizontal: (width - cardWidth) / 2 }]}>
              <ImageBackground
                source={item.image}
                style={styles.cardBackground}
                imageStyle={[styles.cardImage, {
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }]}
              >
                <View style={styles.overlay} />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                  <Text style={styles.cardDescription}>{item.description}</Text>
                </View>
              </ImageBackground>
            </View>
          )}
          autoPlay={true}
          autoPlayInterval={4000}
          loop
          pagingEnabled
          mode={carouselMode}
          modeConfig={modeConfig}
          defaultIndex={0}  // Add this to ensure initial render
          enabled={true}    // Add this to ensure carousel is enabled on mount
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          snapEnabled
          onProgressChange={progress}
        />
        
        <Pagination.Basic
          progress={progress}
          data={cardItems}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#262626",
          }}
          activeDotStyle={{
            width: 24,
            height: 8,
            borderRadius: 4,
            backgroundColor: "#e73700",
          }}
          containerStyle={{
            gap: 8,
            marginTop: 24,
          }}
          onPress={onPressPagination}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 80, // Increase top padding from 40 to 80
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  carouselWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent', // Added to ensure transparency
  },
  card: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#343434',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  cardImage: {
    borderRadius: 18,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    opacity: 0.5,
  },
  cardContent: {
    padding: 22,
    paddingBottom: 18,
    zIndex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  cardDescription: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.92,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});