/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BuyersDeviceDetails = () => {
  const [deviceTypes, setDeviceTypes] = useState([{ id: 'laptop', name: 'Laptop' }, { id: 'mobile', name: 'Mobile' }]);
  const [brands, setBrands] = useState([]);
  const [selectedDeviceType, setSelectedDeviceType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceSorting, setPriceSorting] = useState('');
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
        <Picker
          style={styles.priceDropdown}
          selectedValue={priceSorting}
          onValueChange={(itemValue) => setPriceSorting(itemValue)}
        >
          <Picker.Item label="Select Sorting" value="" />
          <Picker.Item label="Low to High" value="lowToHigh" />
          <Picker.Item label="High to Low" value="highToLow" />
        </Picker>
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
  priceSortingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  priceSortingLabel: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceDropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceDropdown: {
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  priceRangeText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BuyersDeviceDetails;










