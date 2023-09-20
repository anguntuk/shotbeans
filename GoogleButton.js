/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin';

GoogleSignin.configure({
    webClientId: 'YOUR_CLIENT_ID',
});
const GoogleSignInButton = ({ onGoogleSignIn }) => {
    const handleGoogleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('User Info:', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Info:');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('User Info:');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('User Info:');
            } else {
                console.log('User Info:');
            }
        }
    };
    return (
        <View>
            <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
     // width: 200, // Adjust the width as needed
      height: 40, // Adjust the height as needed
      backgroundColor: 'black', // Button background color
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15, // Adjust the margin between the buttons as needed
      borderRadius: 5,
    },
    // googleButton: {
    //   position: 'absolute',
    //   bottom: 0,
    //   width: '100%',
    // },
    buttonText: {
      color: 'white', // Button text color
      fontSize: 16, // Button text font size
      fontWeight: 'bold',
    },
  });
export default GoogleSignInButton;
