/* eslint-disable prettier/prettier */
import React from 'react';
//import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserPaniWalaScreen from './UserPaniWalaScreen.js';
import HomeScreen from './SignIn.js';
import Registration from './Registration.js';
import UserDetails from './UserDetails.js';
import SellerDeviceDetails from './SellerDeviceDetails.js';
import BuyersDeviceDetails from './BuyersDeviceDetails.js';
import AccountPage  from './AccountPage.js';


export const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={HomeScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          name="UserPaniWalaScreen"
          component={UserPaniWalaScreen}
        />
        <Stack.Screen name="UserDetails" component={UserDetails} />
        <Stack.Screen name="SellerDeviceDetails" component={SellerDeviceDetails} />
        <Stack.Screen name="BuyersDeviceDetails" component={BuyersDeviceDetails} />
        <Stack.Screen name="AccountPage" component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
