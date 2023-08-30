/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import SellerDeviceDetails from './SellerDeviceDetails.js';

const AccountPage = props => {
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

  useEffect(() => {
    // Fetch orders from the backend here
    fetchOrdersFromBackend();
  }, []);

  const fetchOrdersFromBackend = async () => {
    try {
      const response = await fetch('your_backend_endpoint');
      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const toggleOrdersDisplay = () => {
    setShowOrders(!showOrders);
  };

  const handleNewPost = () => {
    props.navigation.navigate(SellerDeviceDetails);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Orders</Text>
      </View>
      <TouchableWithoutFeedback onPress={toggleOrdersDisplay}>
        <View style={styles.ordersBox}>
          <Text style={styles.dropdownLabel}>Your Posts</Text>
          <Text style={styles.dropdownArrow}>{showOrders ? 'v' : '>'}</Text>
        </View>
      </TouchableWithoutFeedback>
      {showOrders && (
        <View style={styles.ordersContainer}>
          {orders.map(order => (
            <Text key={order.id} style={styles.orderText}>{`Order #${order.id}`}</Text>
          ))}
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleNewPost}>
        <Text style={styles.buttonText}>New Post</Text>
      </TouchableOpacity>

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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  ordersBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 5,
    borderColor: 'black',
    borderBlockColor: 'black',
    borderWidth: 1,
    marginTop: 20,
  },
  dropdownLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdownArrow: {
    fontSize: 18,
  },
  ordersContainer: {
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  orderText: {
    fontSize: 16,
    marginBottom: 5,
  },

  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AccountPage;
