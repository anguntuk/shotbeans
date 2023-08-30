/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import { AccountPage } from './AccountPage';
import ProductsList from './ProductLists';
import { useNavigation } from '@react-navigation/native';
export const HomeScreen = props => {
  // const handleSignInPress = () => {
  //   props.navigation.navigate('AccountPage');
  // };
  const handleSignUpPress = () => {
    props.navigation.navigate('Registration');
  };
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const handleSignInPress = async () => {
    // Perform user name validation here
    try {
      const response = await fetch(`your_api_endpoint/${name}`);
      const userData = await response.json();

      if (userData.usertype === 'paniwala') {
        navigation.navigate('ProductLists', { userName: name });
      } else {
        navigation.navigate('AccountPage', { userName: name });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shot Beans</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            keyboardType="email-address"
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!showPassword}
            />
            {/* <TouchableOpacity onPress={toggleShowPassword} style={styles.showPasswordButton}>
              <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={20} color="#999" />
            </TouchableOpacity> */}
          </View>
          <TouchableOpacity style={styles.signInButton} onPress={handleSignInPress}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.registerTextStyle}>Don't have an account? </Text>
          <TouchableOpacity onPress={handleSignUpPress}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'black',
    paddingVertical: 20,
    alignItems: 'center',
    //marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  showPasswordButton: {
    padding: 10,
  },
  signInButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row', // Display items side by side
    alignItems: 'center', // Align vertically within the row
    //marginBottom: 20,
  },
  registerTextStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 16,
    marginTop: 20,
  },
  registerLink: {
    alignSelf: 'center',
    marginTop: 20,
    color: 'blue',
    fontSize: 20,
  },
  footer: {
    backgroundColor: 'black',
    height: 2,
    width: '100%',
  },
});

export default HomeScreen;
