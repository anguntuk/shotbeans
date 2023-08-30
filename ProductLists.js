

// ResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductsList = ({ route }) => {
  const { brand, model, condition } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Results</Text>
      <Text>Brand: {brand}</Text>
      <Text>Model: {model}</Text>
      <Text>Condition: {condition}</Text>
      {/* Display other results here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ProductsList;
