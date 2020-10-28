import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import React, {useState} from 'react';
import axios from 'axios';
import {getLogin} from '../../../config/routes';
import token from '../../../services/token';
import {configureHooks} from '../../../config/configure_app';
import Loading from '../../common/loading';
import {LoginScreen} from './login_screen';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();

    const resp = await axios.post(getLogin(), {token: userInfo.idToken});
    return {
      ...userInfo,
      ...resp.data,
    };
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log(error.response);
  }
};

export const LoginContainer = ({navigation}) => {
  const [loading, setLodaing] = useState(false);
  const onPress = async () => {
    await setLodaing(true);
    const data = await signIn();
    token.token = data.token;

    const firstLogin = data.firstLogin;
    configureHooks();
    if (firstLogin) {
      navigation.navigate('Nueva incidencia');
    } else {
      navigation.navigate('login_edit', {
        firstName: data.user.givenName,
        lastName: data.user.familyName,
        photo: data.user.photo,
      });
    }
    await setLodaing(false);
  };
  return loading ? <Loading /> : <LoginScreen onPress={onPress} />;
};
