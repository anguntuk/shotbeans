/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const BuyersDeviceDetails = () => {
  const [deviceTypes, setDeviceTypes] = useState([{ id: 'laptop', name: 'Laptop' }, { id: 'mobile', name: 'Mobile' }]);
  const [brands, setBrands] = useState([]);
  const [selectedDeviceType, setSelectedDeviceType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([1000, 50000]);
  const handleValueChange = (values) => {
    setPriceRange(values);
  };
  useEffect(() => {
    fetchBrands();
  }, [selectedDeviceType]);
  const fetchBrands = async () => {
    try {
      // Fetch brands from API based on selected device type
      if (selectedDeviceType) {
        const response = await fetch(`your-brands-api-url?deviceType=${selectedDeviceType}`);
        const data = await response.json();
        setBrands(data);
      }
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };
  const handleSubmit = () => {
    // Your submission logic here
    console.log('Submitted:');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select Device Details</Text>
      </View>
      <View style={styles.content}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedDeviceType}
          onValueChange={(itemValue) => setSelectedDeviceType(itemValue)}
        >
          <Picker.Item label="Select Device Type" value="" />
          {deviceTypes.map(deviceType => (
            <Picker.Item key={deviceType.id} label={deviceType.name} value={deviceType.id} />
          ))}
        </Picker>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedBrand}
          onValueChange={(itemValue) => setSelectedBrand(itemValue)}
        >
          <Picker.Item label="Select Brand" value="" />
          {brands.map(brand => (
            <Picker.Item key={brand.id} label={brand.name} value={brand.id} />
          ))}
        </Picker>
        <Text style={styles.label}>Price Range</Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.value}>{priceRange[0]}</Text>
          <Slider
            style={styles.slider}
            minimumValue={1000}
            maximumValue={50000}
            step={1000}
            minimumTrackTintColor="#007bff"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#007bff"
            value={priceRange[0]}
            onValueChange={(value) => handleValueChange([value, priceRange[1]])}
          />
          <Text style={styles.value}>{priceRange[1]}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  dropdown: {
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    marginVertical: 10,
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuyersDeviceDetails;










