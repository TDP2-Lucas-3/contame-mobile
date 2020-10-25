import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import React from 'react';
import axios from 'axios';
import {getUsers} from '../../../config/routes';
import {OAUTH_CLIENT_ID} from '../../../config/constants';

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo);

    const resp = await axios.post(getUsers(), {token: userInfo.idToken});
    console.log(resp.data);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
    console.log(error.response.data);
  }
};

export const LoginScreen = () => {
  GoogleSignin.configure({
    webClientId: OAUTH_CLIENT_ID,
  });
  return <GoogleSigninButton onPress={signIn} />;
};
