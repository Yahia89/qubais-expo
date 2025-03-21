import { Text, View, StyleSheet, Pressable, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Jupiter() {
  const handleJupiterPress = () => {
    Linking.openURL('https://login.jupitered.com/login/?54577');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're about to visit Jupiter!</Text>
      <Text style={styles.subtitle}>Click below to access JupiterEd</Text>
      
      <Pressable style={styles.button} onPress={handleJupiterPress}>
        <Ionicons name="rocket" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Launch JupiterEd</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  icon: {
    marginRight: 8,
  },
});