import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import { Link, router } from 'expo-router';

interface NavigationItem {
  title: string;
  subItems?: string[];
  icon: any;
  link: string;
}

const navigationItems: NavigationItem[] = [
  { 
    title: 'About Us', 
    subItems: ['WASC Accredited','Mission', 'Values', 'History'],
    icon: require('../assets/navigation-cards-icons/about.png'),
    link: '/about-us'
  },
  { 
    title: 'Admissions', 
    subItems: ['Process', 'Requirements', 'Apply'],
    icon: require('../assets/navigation-cards-icons/admission.png'),
    link: '/admissions'
  },
  { 
    title: 'Academics', 
    subItems: ['Programs', 'Curriculum', 'Faculty'],
    icon: require('../assets/navigation-cards-icons/academic.png'),
    link: '/academics'
  },
  { 
    title: 'Student Life', 
    subItems: ['Clubs', 'Events', 'Community'],
    icon: require('../assets/navigation-cards-icons/studen-life.png'),
    link: '/student-life'
  },
  {
    title: 'Parents',
    subItems: ['Parent Portal', 'School Policies', 'Uniform Guidelines', 'PTA', 'Volunteering Opportunities'],
    icon: require('../assets/navigation-cards-icons/parents.png'),
    link: '/parents'
  },
  { 
    title: 'News & Events', 
    subItems: ['Updates', 'Calendar', 'Announcements'],
    icon: require('../assets/navigation-cards-icons/events-news.png'),
    link: '/news'
  },
  { 
    title: 'Contact', 
    subItems: ['Email', 'Phone', 'Visit'],
    icon: require('../assets/navigation-cards-icons/contact-us.png'),
    link: '/contact'
  },
];

const CustomLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  if (Platform.OS === 'web') {
    return (
      <Link href={href} asChild>
        {children}
      </Link>
    );
  }
  return React.cloneElement(children as React.ReactElement, {
    onPress: () => router.push(href)
  });
};

export const NavigationGrid: React.FC = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 768;
  const isMediumScreen = width >= 768 && width < 1024;
  const isVerySmallScreen = width < 400;

  return (
    <View style={[styles.container, isSmallScreen && styles.containerSmall]}>
      <View style={[styles.grid, isSmallScreen && styles.gridSmall]}>
        {navigationItems.map((item) => (
          <CustomLink key={item.title} href={item.link}>
            <Pressable
              style={({ pressed, hovered }) => [
                styles.card,
                isSmallScreen && styles.cardSmall,
                isMediumScreen && styles.cardMedium,
                isVerySmallScreen && styles.cardVerySmall,
                Platform.OS === 'web' && {
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out',
                  ...(hovered && {
                    boxShadow: '10px 10px 0 #4e84ff, 20px 20px 0 #4444bd',
                    transform: 'translate(-20px, -20px)'
                  }),
                  ...(pressed && {
                    boxShadow: 'none',
                    transform: 'translate(0, 0)'
                  })
                }
              ]}
            >
              <View style={styles.cardContent}>
                <View style={styles.containerProject}>
                  <Image 
                    source={item.icon}
                    style={styles.cardIcon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.projectInfo}>
                  <View style={styles.flexPr}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View 
                      style={({ hovered }) => [
                        styles.projectHover,
                        Platform.OS === 'web' && hovered && {
                          transform: 'rotate(-45deg)',
                          backgroundColor: '#a6c2f0'
                        }
                      ]}
                    >
                      <Text style={styles.iconText}>➔</Text>
                    </View>
                  </View>
                  {item.subItems && (
                    <View style={styles.types}>
                      {item.subItems.map((subItem) => (
                        <Text key={subItem} style={styles.projectType}>
                          {subItem}
                        </Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          </CustomLink>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 40,
    paddingHorizontal: 20,
    flexGrow: 1,
  },
  containerSmall: {
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  containerVerySmall: {
    paddingVertical: 25,
    paddingHorizontal: 10,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    maxWidth: 1200,
    marginHorizontal: 'auto',
  },
  gridSmall: {
    flexDirection: 'column',
    gap: 12,
    maxWidth: 600,
  },
  card: {
    width: 400,
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 5,
    borderWidth: 4,
    borderColor: 'transparent',
    overflow: 'hidden',
  },
  cardSmall: {
    width: '100%',
    maxWidth: 400,
  },
  cardMedium: {
    width: '45%',
    minWidth: 300,
  },
  cardVerySmall: {
    width: '100%',
    maxWidth: 350,
  },
  cardContent: {
    background: 'linear-gradient(135deg, #2c365d 0%, #4e84ff 100%)',
    borderRadius: 10,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  containerProject: {
    width: '100%',
    height: 170,
    backgroundColor: 'rgba(245, 245, 245, 0.9)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardIcon: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  projectInfo: {
    paddingTop: 20,
    padding: 10,
    flexDirection: 'column',
    gap: 20,
  },
  flexPr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    margin: 0,
    fontWeight: '600',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    color: '#ffffff',
  },
  projectType: {
    backgroundColor: 'rgba(178, 178, 253, 0.2)',
    color: '#ffffff',
    fontWeight: 'bold',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 15,
    fontSize: 12,
    letterSpacing: -0.6,
  },
  types: {
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
  },
  projectType: {
    backgroundColor: '#b2b2fd',
    color: '#1a41cd',
    fontWeight: 'bold',
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 15,
    fontSize: 12,
    letterSpacing: -0.6,
  },
  projectHover: {
    borderRadius: 50,
    width: 50,
    height: 50,
    padding: 9,
    backgroundColor: '#b2b2fd',
    justifyContent: 'center',
    alignItems: 'center',
    ...(Platform.OS === 'web' && {
      transition: 'all 0.3s ease'
    })
  },
  iconText: {
    fontSize: 24,
    color: '#1a41cd',
    fontWeight: 'bold',
  },
});