import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

interface GlassCardProps {
  children: React.ReactNode;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <View style={styles.glassCard}>
      <ImageBackground
        source={require('../assets/images/corner-pattern-removebg-preview.png')}
        style={[styles.blob, styles.blob1]}
        imageStyle={styles.blobPattern}
        resizeMode="cover"
      />
      <ImageBackground
        source={require('../assets/images/corner-pattern-removebg-preview.png')}
        style={[styles.blob, styles.blob2]}
        imageStyle={styles.blobPattern}
        resizeMode="cover"
      />
      <ImageBackground
        source={require('../assets/images/corner-pattern-removebg-preview.png')}
        style={[styles.blob, styles.blob3]}
        imageStyle={styles.blobPattern}
        resizeMode="cover"
      />
      <ImageBackground
        source={require('../assets/images/corner-pattern-removebg-preview.png')}
        style={[styles.blob, styles.blob4]}
        imageStyle={styles.blobPattern}
        resizeMode="cover"
      />
      <View style={styles.glassContent}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  glassCard: {
    position: 'relative',
    width: '100%',
    minHeight: 150,
    marginVertical: 15,
    borderRadius: 21,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  blobPattern: {
    // opacity: 0.9,
    backgroundColor: 'transparent',
  },
  glassContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: 20,
    width: '100%',
    height: '100%',
    borderRadius: 21,
    zIndex: 1,
  },
  blob: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    zIndex: -1,
  },
  blob1: {
    left: -95,
    top: -90,
    // opacity: 0.9,
  },
  blob2: {
    right: -150,
    top: -130,
    // opacity: 0.9,
    width: 300,
    height: 300,
  },
  blob3: {
    left: -140,
    bottom: -150,
    // opacity: 0.9,
    width: 300,
    height: 300,
  },
  blob4: {
    right: -199,
    bottom: -195,
    // opacity: 0.9,
    width: 400,
    height: 400,
  },
});