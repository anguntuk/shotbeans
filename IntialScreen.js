import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Import your images
import Image1 from './image.png';
import Image2 from './image.png';
import Image3 from './image.png';

const BlockWithTextAndImage = ({ title, buttonText, image }) => {
  const handleButtonPress = () => {
    // Handle button press (you can add your logic here)
    console.log(`Button "${buttonText}" pressed`);
  };

  return (
    <View style={styles.block}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={styles.image}
          />
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  text: {
    fontSize: 16,
  },
  imageContainer: {
    flexShrink: 0,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

const InitialScreen = () => {
  return (
    <View style={appStyles.container}>
      <BlockWithTextAndImage 
        title="Block 1" 
        buttonText="Button 1" 
        image={Image1} 
      />
      <BlockWithTextAndImage 
        title="Block 2" 
        buttonText="Button 2" 
        image={Image2} 
      />
      <BlockWithTextAndImage 
        title="Block 3" 
        buttonText="Button 3" 
        image={Image3} 
      />
    </View>
  );
};

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
   // justifyContent: 'center',
    //alignItems: 'center',
    padding: 20,
  },
});

export default InitialScreen;
