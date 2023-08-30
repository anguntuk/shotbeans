/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import UserDetails from './UserDetails';


const quotes = [
  "Quote 1: The only limit to our realization of tomorrow will be our doubts of today.",
  "Quote 2: Don't watch the clock; do what it does. Keep going.",
  "Quote 3: The future belongs to those who believe in the beauty of their dreams.",
  // Add more quotes here
];
export const UserPaniWalaScreen = (props) => {
  const handleRegisterPress = () => {
    props.navigation.navigate(UserDetails);
  };
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Change the quote on page load
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shot Beans</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>BecomeUser</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleRegisterPress}>
        <Text style={styles.buttonText}>BecomePaniwala</Text>
      </TouchableOpacity>
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>{quote}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 70,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quoteContainer: {
    position: 'absolute',
    bottom: 60, // Adjust this value as needed
    left: 0,
    right: 0,
    alignItems: 'center',
    padding: 10,
  },
  quoteText: {
    color: '#17202A',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
    fontStyle: 'italic',
  },
});








export default UserPaniWalaScreen;
