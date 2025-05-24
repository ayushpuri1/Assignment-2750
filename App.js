import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [dogRate, setDogRate] = useState(null);
  const [serviceRate, setServiceRate] = useState(null);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const dog = dogRate ? parseInt(dogRate) : 0;
    const service = serviceRate ? parseInt(serviceRate) : 0;
    setTotal(dog + service);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>Welcome to SDCS</Text>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emoji_u1f436.svg/1200px-Emoji_u1f436.svg.png',
          }}
          style={styles.logo}
        />

        <View style={dropdownStyles.container}>
          <Text style={dropdownStyles.label}>Select Dog + Hourly Rate:</Text>
          <Picker
            selectedValue={dogRate}
            onValueChange={(value) => setDogRate(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Dog" value={null} />
            <Picker.Item label="Finn - $15" value="15" />
            <Picker.Item label="Bluey - $18" value="18" />
            <Picker.Item label="Max - $15" value="15" />
            <Picker.Item label="Bella - $20" value="20" />
            <Picker.Item label="Luna - $22" value="22" />
          </Picker>

          <Text style={dropdownStyles.label}>Select Service + Cost:</Text>
          <Picker
            selectedValue={serviceRate}
            onValueChange={(value) => setServiceRate(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Service" value={null} />
            <Picker.Item label="Grooming - $20" value="20" />
            <Picker.Item label="Walking - $10" value="10" />
            <Picker.Item label="Training - $25" value="25" />
            <Picker.Item label="Feeding - $10" value="10" />
            <Picker.Item label="Vet Visit - $30" value="30" />
          </Picker>
        </View>

        <View style={styles.buttonSection}>
          <Button title="CALCULATE" onPress={calculateTotal} />
          <Text style={styles.result}>Total Cost: ${total}</Text>
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>App developed by:</Text>
        <Text>1. Malk</Text>
        <Text>2. Kirthika - Logo</Text>
        <Text>3. Ayush - Dog Dropdown</Text>
        <Text>4. Ayan - Service Dropdown</Text>
        <Text>5. Tajwar - Total Cost Calculation</Text>
        <Text>6. Kirthika</Text>
        <Text>7. Kirthika</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#b3ecf0' },
  content: { flex: 1, justifyContent: 'space-between', paddingBottom: 10 },
  heading: { fontSize: 20, textAlign: 'center', marginTop: 30 },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonSection: { alignItems: 'center', marginTop: 10 },
  result: { marginTop: 10, fontSize: 16, fontWeight: 'bold', color: 'green' },
  bottomTextContainer: { alignItems: 'center', padding: 10 },
  bottomText: { fontSize: 12, color: '#555' },
});

const dropdownStyles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginBottom: 10 },
  label: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  picker: {
    backgroundColor: Platform.OS === 'web' ? '#fff' : undefined,
    height: 50,
  },
});
