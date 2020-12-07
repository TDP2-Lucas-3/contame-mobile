import {GoogleSigninButton} from '@react-native-community/google-signin';

import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Logo} from './logo';
import {styles} from '../../../styles/login_screen';

export const LoginScreen = ({onPress}) => {
  const image = require('../../../../assets/images/login.png');

  return (
    <ImageBackground source={image} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Logo />
        <View style={styles.description_container}>
          <Text style={styles.description}>
            En ¡Contame! vas a poder reportar y enterarte de todo lo que está
            pasando en tu barrio. A través de nuestro sistema de incidencias,
            los vecinos pueden elegir, debatir y votar sobre los acontecimientos
            más importantes en toda la ciudad.
          </Text>
          <View style={styles.loginButtonContainer}>
            <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              onPress={onPress}
              style={styles.loginButton}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};
