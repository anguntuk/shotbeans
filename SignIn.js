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
        <Text style={styles.subHeading}>Signin</Text>
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
            <Text style={styles.signInButtonText}>Signin</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <Text style={styles.registerTextStyle}>Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    //backgroundColor: '#FF9A8A',
    marginBottom: 20,

  },
  headerTitle: {
    color: '#FF9A8A',
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  passwordInput: {
    flex: 1,
    padding: 10,
  },
  showPasswordButton: {
    padding: 10,
  },
  signInButton: {
    backgroundColor: '#FF9A8A', // Button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
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
    marginTop: 40,
  },
  registerLink: {
    alignSelf: 'center',
    marginTop: 40,
    color: 'blue',
    fontSize: 20,
  },
  footer: {
    backgroundColor: '#FF9A8A',
    height: 2,
    width: '100%',
  },
});

export default HomeScreen;
