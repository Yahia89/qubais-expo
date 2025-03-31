import { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Platform,
  Keyboard,
  Dimensions,
  Modal,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Constants from 'expo-constants';
import { useGoogleAds } from '../../hooks/useGoogleAds.web';

export default function Inquire() {
  const { trackPageView } = useGoogleAds();

  // Track page view when component mounts
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.comingSoonTitle}>Contact Us Form</Text>
        <Text style={styles.comingSoonText}>Our contact form is coming soon! In the meantime, please reach out to us directly:</Text>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Talk to us directly</Text>
          
          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('https://maps.app.goo.gl/HGEGhMqP8Rk1YGZP6')}>
            <Ionicons name="location" size={24} color="#E31B23" />
            <Text style={styles.contactText}>1127 Otterbein Ave, Rowland Heights, CA 91748</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('tel:9096205297')}>
            <Ionicons name="call" size={24} color="#E31B23" />
            <Text style={styles.contactText}>(909) 620-5297</Text>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <Ionicons name="print" size={24} color="#E31B23" />
            <Text style={styles.contactText}>Fax: (909) 766-8362</Text>
          </View>

          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('mailto:info@qubais.org')}>
            <Ionicons name="mail" size={24} color="#E31B23" />
            <Text style={styles.contactText}>info@qubais.org</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  comingSoonTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  comingSoonText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    maxWidth: 600,
  },
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    maxWidth: 600,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  contactText: {
    fontSize: 16,
    color: '#444',
    marginLeft: 15,
    flex: 1,
  },
});