/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, Alert, ScrollView, Platform, PermissionsAndroid, Permissions } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { Picker } from '@react-native-picker/picker';

const SellerDeviceDetails = () => {
  const [brands, setBrands] = useState([]);
  const [selectedDeviceType, setSelectedDeviceType] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedRAM, setSelectedRAM] = useState('');
  const [selectedStorage, setSelectedStorage] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('');
  const [images, setImages] = useState([]);
  const [storageOptions, setStorageOptions] = useState([]);
  useEffect(() => {
    fetchBrands();
  }, []);
  const fetchBrands = async () => {
    try {
      // Fetch brands from API
      const response = await fetch('your-brands-api-url');
      const data = await response.json();
      setBrands(data);
    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };
  const handleImageUpload = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          const response = await ImagePicker.openPicker({
            mediaType: 'photo',
          });

          if (!response.didCancel) {
            setImages([...images, response.path]);
          }
        } else {
          console.log('Permission denied');
        }
      } else if (Platform.OS === 'ios') {
        const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);

        if (status === 'granted') {
          const response = await ImagePicker.openPicker({
            mediaType: 'photo',
          });

          if (!response.didCancel) {
            setImages([...images, response.path]);
          }
        } else {
          console.log('Permission denied');
        }
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };
  const renderImages = () => {
    return (
      <ScrollView horizontal={true}>
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.uploadedImage} />
        ))}
      </ScrollView>
    );
  };

  const getStorageOptions = () => {
    if (selectedDeviceType === 'mobile') {
      return [
        { id: '2GB-16GB', name: '2GB-16GB' },
        { id: '4GB-16GB', name: '4GB-16GB' },
        { id: '4GB-32GB', name: '4GB-32GB' },
        { id: '4GB-64GB', name: '4GB-64GB' },
        { id: '6GB-32GB', name: '6GB-32GB' },
        { id: '6GB-64GB', name: '6GB-64GB' },
        { id: '6GB-128GB', name: '6GB-128GB' },
        { id: '6GB-256GB', name: '6GB-256GB' },
        { id: '8GB-32GB', name: '8GB-32GB' },
        { id: '8GB-64GB', name: '8GB-64GB' },
        { id: '8GB-128GB', name: '8GB-128GB' },
        { id: '8GB-256GB', name: '8GB-256GB' },
        { id: '12GB-64GB', name: '12GB-64GB' },
        { id: '12GB-128GB', name: '12GB-128GB' },
        { id: '12GB-256GB', name: '12GB-256GB' },
        { id: '12GB-256GB', name: '12GB-512GB' },
      ];
    } else if (selectedDeviceType === 'laptop') {
      return [
        { id: '4G-250SSD', name: '4GB 250GB SSD' },
        { id: '4G-500SSD', name: '4GB 500GB SSD' },
        { id: '8G-500SSD', name: '8GB 500GB SSD' },
        { id: '8G-1TB', name: '8GB 1TB' },
        { id: '16G-250SSD', name: '16GB 250GB SSD' },
        { id: '16G-500SSD', name: '16GB 500GB SSD' },
        { id: '16G-1TB', name: '16GB 1GB' },
        { id: '32G-500SSD', name: '32GB 500GB SSD' },
        { id: '32G-1TB', name: '32GB 1TB' },
        // Add more laptop storage options here
      ];
    }
    return [];
  };
  useEffect(() => {
    // Update storage options based on the selected device type
    setStorageOptions(getStorageOptions());
  }, [selectedDeviceType]);
  // Show a popup message after submission
  const handleSubmit = async () => {
    // Implement your backend submission logic here
    try {
      if (
        selectedDeviceType === '' ||
        selectedBrand === '' ||
        selectedRAM === '' ||
        selectedStorage === '' ||
        selectedCondition === ''
      ) {
        Alert.alert(
          'Incomplete Data',
          'Please select all required fields before submitting.',
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
        );
        return;
      }
      const deviceData = {
        deviceType: selectedDeviceType,
        brand: selectedBrand,
        ram: selectedRAM,
        storage: selectedStorage,
        condition: selectedCondition,
        images: images,
      };
      console.log('Submitted Data:', deviceData);
      // Clear form and state after submission
      clearForm();
      Alert.alert(
        'Success',
        'Device details have been submitted successfully!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') }
        ]
      );
    } catch (error) {
      console.error('Submission error:', error);
    }
  };
  const clearForm = () => {
    setSelectedDeviceType('');
    setSelectedBrand('');
    setSelectedRAM('');
    setSelectedStorage('');
    setSelectedCondition('');
    setImages([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Upload Device Details</Text>
      </View>
      <ScrollView style={styles.content}>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedDeviceType}
          onValueChange={(itemValue) => setSelectedDeviceType(itemValue)}
        >
          <Picker.Item label="Select Device Type" value="" />
          <Picker.Item label="Laptop" value="laptop" />
          <Picker.Item label="Mobile" value="mobile" />
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
          style={styles.dropdown}
          selectedValue={selectedStorage}
          onValueChange={(itemValue) => setSelectedStorage(itemValue)}
        >
          <Picker.Item label="Select Storage" value="" />
          {storageOptions.map(option => (
            <Picker.Item key={option.id} label={option.name} value={option.id} />
          ))}
        </Picker>
        <Picker
          style={styles.dropdown}
          selectedValue={selectedCondition}
          onValueChange={(itemValue) => setSelectedCondition(itemValue)}
        >
          <Picker.Item label="Select Condition" value="" />
          <Picker.Item label="New" value="new" />
          <Picker.Item label="Used" value="used" />
          <Picker.Item label="Renewed" value="renewed" />
        </Picker>
        <TouchableOpacity style={styles.uploadButton} onPress={handleImageUpload}>
          <Text style={styles.uploadButtonText}>Upload Images</Text>
        </TouchableOpacity>
        {renderImages()}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
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
  uploadButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  uploadedImage: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
  submitButton: {
    backgroundColor: 'black',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default SellerDeviceDetails;
