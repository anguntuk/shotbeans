/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MoneyLendAppHomeScreen = props => {
  const handleGetStarted = () => {
    props.navigation.navigate('SignIn'); // Redirect to the specified screen
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Shot Beans</Text>
        <Image
          source={require('./logo.png')} // Replace with your app's logo
          style={styles.logo}
        />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Image
          source={require('./home_image.png')} // Replace with a relevant image
          style={styles.mainImage}
        />
        <Text style={styles.mainText}>Quick and Secure Money Lending</Text>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 YourMoney Lending</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Header text color
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
    //marginTop: 20,
    color: '#333', // Main text color
  },
  getStartedButton: {
    backgroundColor: '#FF9A8A', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // Button text color
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#999', // Footer text color
  },
});

export default MoneyLendAppHomeScreen;
