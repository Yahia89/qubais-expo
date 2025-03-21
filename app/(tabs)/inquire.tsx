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

export default function Inquire() {
  // Add EmailJS configuration
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  
  // State for form data, errors, and submission message
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    _honeypot: '', // Hidden field for spam protection
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');

  // Form validation function
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  // Modify handleSubmit to use EmailJS
  const handleSubmit = async () => {
    if (formData._honeypot) return;
    if (validateForm()) {
      setIsLoading(true);
      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          time: new Date().toLocaleString()
        };

        await emailjs.send(
          'service_5ygop7a',
          'template_ouzbpvk',
          templateParams,
          '5etBZ5v-cUu8n5GXV'
        );

        setSubmitMessage(`Thank you for your inquiry. We'll get back to you soon.`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          _honeypot: '',
        });
        setFormErrors({});
      } catch (error) {
        setSubmitMessage('There was an error sending your message. Please try again.');
        console.error('EmailJS Error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Modify submit button to show loading state
  // Find the submit button in your JSX and update it:

  return (
    <View onPress={Keyboard.dismiss} style={styles.container}>
      <KeyboardAwareScrollView
        enableOnAndroid
        enableAutomaticScroll
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
        extraScrollHeight={Platform.OS === 'ios' ? 100 : 50}
        keyboardOpeningTime={0}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Ionicons name="heart" size={40} color="#E31B23" style={styles.welcomeIcon} />
          <Text style={styles.welcomeTitle}>Welcome to Quba Islamic School!</Text>
          <Text style={styles.welcomeText}>
            We’re delighted that you’re interested in joining our community. Please fill out the form
            below, and we’ll get back to you as soon as possible to discuss how we can help your
            child thrive.
          </Text>
        </View>

        {/* Form Section */}
        <View style={styles.formWrapper}>
          <View style={styles.formContainer}>
            <View style={styles.formContainer}>
              {submitMessage && <Text style={styles.submitMessage}>{submitMessage}</Text>}

              {/* Name Field */}
              <View style={[styles.inputGroup, formErrors.name && styles.inputError]}>
                <Ionicons name="person-outline" size={24} color="#666" />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name *"
                  placeholderTextColor="#888" // Added for visibility
                  value={formData.name}
                  onChangeText={(text) => setFormData({ ...formData, name: text })}
                  accessibilityLabel="Full Name"
                />
              </View>
              {formErrors.name && <Text style={styles.errorText}>{formErrors.name}</Text>}

              {/* Email Field */}
              <View style={[styles.inputGroup, formErrors.email && styles.inputError]}>
                <Ionicons name="mail-outline" size={24} color="#666" />
                <TextInput
                  style={styles.input}
                  placeholder="Email Address *"
                  placeholderTextColor="#888" // Added for visibility
                  keyboardType="email-address"
                  value={formData.email}
                  onChangeText={(text) => setFormData({ ...formData, email: text })}
                  accessibilityLabel="Email Address"
                />
              </View>
              {formErrors.email && <Text style={styles.errorText}>{formErrors.email}</Text>}

              {/* Phone Field */}
              <View style={[styles.inputGroup, formErrors.phone && styles.inputError]}>
                <Ionicons name="call-outline" size={24} color="#666" />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number *"
                  placeholderTextColor="#888" // Added for visibility
                  keyboardType="phone-pad"
                  value={formData.phone}
                  onChangeText={(text) => setFormData({ ...formData, phone: text })}
                  accessibilityLabel="Phone Number"
                />
              </View>
              {formErrors.phone && <Text style={styles.errorText}>{formErrors.phone}</Text>}

              {/* Message Field */}
              <View style={[styles.messageGroup, formErrors.message && styles.inputError]}>
                <Ionicons name="chatbox-outline" size={24} color="#666" style={styles.messageIcon} />
                <TextInput
                  style={styles.messageInput}
                  placeholder="How can we help you? *"
                  placeholderTextColor="#888" // Added for visibility
                  multiline
                  numberOfLines={4}
                  maxLength={500}
                  value={formData.message}
                  onChangeText={(text) => setFormData({ ...formData, message: text })}
                  accessibilityLabel="Message"
                />
                <Text style={styles.charCount}>{formData.message.length}/500</Text>
              </View>
              {formErrors.message && <Text style={styles.errorText}>{formErrors.message}</Text>}

              {/* Honeypot Field */}
              <TextInput
                style={styles.honeypot}
                value={formData._honeypot}
                onChangeText={(text) => setFormData({ ...formData, _honeypot: text })}
              />

              {/* Submit Button */}
              <Pressable 
                style={[styles.submitButton, isLoading && styles.submitButtonDisabled]} 
                onPress={handleSubmit}
                disabled={isLoading}
              >
                <Text style={styles.submitText}>
                  {isLoading ? 'Sending...' : 'Submit Inquiry'}
                </Text>
              </Pressable>

              <View style={styles.contactCard}>
                <Text style={styles.contactTitle}>or talk to us directly</Text>
                
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
</View>
          {/* Extra space for scrolling when keyboard is up */}
          <View style={{ height: 100 }} />
        </KeyboardAwareScrollView>

        {/* Success Message Overlay */}
        <Modal
          visible={!!submitMessage}
          transparent
          animationType="fade"
          onRequestClose={() => setSubmitMessage('')}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
              <Text style={styles.modalText}>{submitMessage}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => setSubmitMessage('')}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
</View>
  );
}

// Styles remain unchanged
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
    alignItems: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    maxWidth: 600,
  },
  welcomeIcon: {
    marginBottom: 15,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  formWrapper: {
    width: '100%',
    maxWidth: 600,
  },
  formContainer: {
    width: '100%',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  messageGroup: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
  },
  messageIcon: {
    marginBottom: 10,
  },
  messageInput: {
    fontSize: 16,
    color: '#333',
    height: 100,
    textAlignVertical: 'top',
  },
  charCount: {
    textAlign: 'right',
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },
  honeypot: {
    height: 0,
    width: 0,
    opacity: 0,
    position: 'absolute',
  },
  submitButton: {
    backgroundColor: '#E31B23',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: -15,
    marginBottom: 10,
    marginLeft: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  submitMessage: {
    color: 'green',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#E31B23',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  contactCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      marginTop: 30,
      width: '100%',
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
    submitButtonDisabled: {
        backgroundColor: '#cccccc',
        opacity: 0.7,
      },
});