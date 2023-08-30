/* eslint-disable prettier/prettier */
import React, { useState} from 'react';
import { Text, View, TextInput, TouchableOpacity, Button, SafeAreaView, StyleSheet } from 'react-native';
import UserPaniWalaScreen from './UserPaniWalaScreen.js';
//import { useNavigation } from '@react-navigation/native';

export const Registration = props => {
  const handleRegisterPress = () => {
    props.navigation.navigate(UserPaniWalaScreen);
  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Register</Text>
      </View>
      <View style={styles.content}>
          <TextInput style={styles.input} placeholder="Username" />

          <TextInput
            style={styles.input}
            placeholder="email"
            keyboardType="email-address"
          />

          <TextInput style={styles.input} placeholder="Password" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

          <TouchableOpacity style={styles.signUpButton} onPress={handleRegisterPress}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    //height: 80,
    paddingVertical: 20,
    //paddingTop: 10,
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
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Registration;

