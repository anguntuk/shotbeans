/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Text, TouchableOpacity,
} from 'react-native';
import SellerDeviceDetails from './SellerDeviceDetails.js';
import BuyersDeviceDetails from './BuyersDeviceDetails.js';


const UserDetails = props => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [idProof, setIdProof] = useState('');

  // const handleRegistration = () => {
  //   // Perform registration logic here
  //   console.log('Name:', name);
  //   console.log('Phone Number:', phoneNumber);
  //   console.log('Address:', address);
  //   console.log('ID Proof:', idProof);
  // };

  const handleSellerRegistration = () => {
    props.navigation.navigate(SellerDeviceDetails);
  };
  const handleBuyerRegistration = () => {
    props.navigation.navigate(BuyersDeviceDetails);
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>UserDetails</Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="mobile number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your ID proof"
          value={idProof}
          onChangeText={setIdProof}
        />
        <TouchableOpacity style={styles.signUpButton} onPress={handleSellerRegistration}>
          <Text style={styles.signUpButtonText}>Sign Up one</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={handleBuyerRegistration}>
          <Text style={styles.signUpButtonText}>Sign Up two</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    //height: 80,
    paddingVertical: 20,
    //paddingTop: 10,
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
  signUpButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

});

export default UserDetails;
