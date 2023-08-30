import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native';


const Building = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./image.png')}
        style={styles.imageBackground}
      >
        {/* Your other content goes here */}
        <Text style={styles.text}>Hello, this is your background image!</Text>
      </ImageBackground>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover', // You can use other resizeMode options based on your requirement
    width: '100%', // Adjust this based on your layout needs
    height: '100%', // Adjust this based on your layout needs
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background for better text readability
  },
});








