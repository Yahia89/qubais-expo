import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';

export function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.linksSection}>
        <Text style={styles.sectionTitle}>Quick Links</Text>
        <View style={styles.links}>
          <Link href="/" asChild><Text style={styles.link}>Home</Text></Link>
          <Link href="/about-us" asChild><Text style={styles.link}>About Us</Text></Link>
          <Link href="/admissions" asChild><Text style={styles.link}>Admissions</Text></Link>
          <Link href="/inquire" asChild><Text style={styles.link}>Contact</Text></Link>
          <TouchableOpacity onPress={() => Linking.openURL('https://login.jupitered.com/login/')}>
            <Text style={styles.link}>Jupiter</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.accreditationSection}>
        <Text style={styles.sectionTitle}>Accreditation</Text>
        <View style={styles.accreditationRow}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.acswasc.org/')}
            accessibilityLabel="WASC Accreditation"
            style={styles.logoContainer}
          >
            <Image
              source={require('../assets/images/Accredited-logo.png')}
              style={styles.accreditationLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/quba-logo.png')}
              style={styles.schoolLogo}
              resizeMode="contain"
            />
          </View>
        </View>
      <View style={styles.copyrightSection}>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://techdevprime.com/')}
          style={styles.developerLink}
        >
          <Text style={styles.developerText}>
            Designed & Developed by techdevprime.com © {new Date().getFullYear()}
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#2f2f2f',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // marginTop: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: -2 },
  },
  linksSection: {
    marginBottom: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 8,
    letterSpacing: 1,
  },
  links: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  link: {
    color: '#fcb040',
    fontSize: 14,
    marginHorizontal: 6,
    marginVertical: 2,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  accreditationSection: {
    alignItems: 'center',
    marginBottom: 12,
  },
  accreditationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 12,
    padding: 15,
    marginTop: 10,
  },
  logoContainer: {
    backgroundColor: 'transparent',
    padding: 8,
  },
  accreditationLogo: {
    width: 120,
    height: 40,
  },
  schoolLogo: {
    width: 120,
    height: 60,
    marginLeft: 12,
    backgroundColor: '#fff'
  },
  copyrightSection: {
    alignItems: 'center',
    marginTop: 8,
  },
  copyright: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  developerLink: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  developerText: {
    color: '#fcb040',
    fontSize: 11,
    opacity: 0.9,
    textAlign: 'center',
    textDecorationLine: 'underline',
    letterSpacing: 0.3,
  },
});