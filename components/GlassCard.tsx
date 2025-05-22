import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

interface GlassCardProps {
  children: React.ReactNode;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children }) => {
  return (
    <View style={styles.glassCard}>
      {/* <ImageBackground
        source={require('../assets/quba-logo.png')}
        style={styles.watermark}
        resizeMode="contain"
      /> */}
      <View style={[styles.blob, styles.blob1]} />
      <View style={[styles.blob, styles.blob2]} />
      <View style={[styles.blob, styles.blob3]} />
      <View style={[styles.blob, styles.blob4]} />
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
  watermark: {
    position: 'absolute',
    width: '50%',
    height: '100%',
    // opacity: 0.05,
    left: '25%',
    right: '25%',
    zIndex: 0,
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
    left: -50,
    top: -90,
    backgroundColor: '#E31B23',
    opacity: 0.7,
  },
  blob2: {
    right: -40,
    top: -20,
    backgroundColor: '#1729CE',
    opacity: 0.6,
  },
  blob3: {
    left: -40,
    bottom: -60,
    backgroundColor: '#FF8C11',
    opacity: 0.5,
  },
  blob4: {
    right: -30,
    bottom: -40,
    backgroundColor: '#E31B23',
    opacity: 0.4,
  },
});