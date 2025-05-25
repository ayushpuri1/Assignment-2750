import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Button, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [dogRate, setDogRate] = useState("");
  const [serviceRate, setServiceRate] = useState("");
  const [hours, setHours] = useState("");
  const [quantity, setQuantity] = useState("");
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    if (dogRate && serviceRate && hours && quantity) {
      const dog = parseInt(dogRate) * parseInt(hours);
      const service = parseInt(serviceRate);
      const qty = parseInt(quantity);
      setTotal((dog + service) * qty);
    } else {
      setTotal(0); 
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.row1}>
          <Text style={styles.heading}> Welcome to SDCS </Text>
          <Image source={require('./assets/logo.png')} style={styles.logo} />
        </View>

        <View style={dropdownStyles.container}>
          <Text style={dropdownStyles.label}>Select Dog + Hourly Rate:</Text>
          <Picker
            selectedValue={dogRate}
            onValueChange={(value) => setDogRate(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Dog" value={""} />
            <Picker.Item label="Finn - $15" value="15" />
            <Picker.Item label="Bluey - $18" value="18" />
            <Picker.Item label="Max - $15" value="15" />
            <Picker.Item label="Bella - $20" value="20" />
            <Picker.Item label="Luna - $22" value="22" />
          </Picker>
          {dogRate && (
            <Text style={dropdownStyles.selected}>Selected Rate: ${dogRate}/hr</Text>
          )}

          <Text style={dropdownStyles.label}>Select Service + Cost:</Text>
          <Picker
            selectedValue={serviceRate}
            onValueChange={(value) => setServiceRate(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Service" value={""} />
            <Picker.Item label="Grooming - $20" value="20" />
            <Picker.Item label="Walking - $10" value="10" />
            <Picker.Item label="Training - $25" value="25" />
            <Picker.Item label="Feeding - $10" value="10" />
            <Picker.Item label="Vet Visit - $30" value="30" />
          </Picker>
          {serviceRate && (
            <Text style={dropdownStyles.selected}>
              Selected Service Cost: ${serviceRate}
            </Text>
          )}

          <Text style={dropdownStyles.label}>Select Hours:</Text>
          <Picker
            selectedValue={hours}
            onValueChange={(value) => setHours(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Hours" value={""} />
            {[1, 2, 3, 4, 5].map((hr) => (
              <Picker.Item label={`${hr}`} value={hr.toString()} key={hr} />
            ))}
          </Picker>
          {hours && (
            <Text style={dropdownStyles.selected}>
              Selected Hours: {hours}
            </Text>
          )}

          <Text style={dropdownStyles.label}>Select Quantity:</Text>
          <Picker
            selectedValue={quantity}
            onValueChange={(value) => setQuantity(value)}
            style={dropdownStyles.picker}
          >
            <Picker.Item label="Select Quantity" value={""} />
            {[1, 2, 3, 4, 5].map((qty) => (
              <Picker.Item label={`${qty}`} value={qty.toString()} key={qty} />
            ))}
          </Picker>
          {quantity && (
            <Text style={dropdownStyles.selected}>
              Selected Quantity: {quantity}
            </Text>
          )}
        </View>

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Button title="CALCULATE" onPress={calculateTotal} />
          {(dogRate && serviceRate && hours && quantity) ? (
            <Text style={styles.heading}> Total Cost: ${total}</Text>
          ) : (
            <Text style={styles.heading}> Total Cost: $0 </Text>
          )}
        </View>
      </View>

      <View style={styles.bottomTextContainer}>
        <Text style={styles.bottomText}>App developed by Kirthika, Ayan, Ayush, Malk, Tajwar</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdf1f5',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: 10,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  row1: {
    alignItems: 'center',
    marginBottom: -55,
  },
  logo: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -70,
  },
  bottomTextContainer: {
    alignItems: 'center',
    padding: 10,
  },
  bottomText: {
    fontSize: 11,
    color: '#555',
  },
});

const dropdownStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#fff',
    height: 30,
  },
  selected: {
    marginTop: 5,
    fontSize: 12,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
