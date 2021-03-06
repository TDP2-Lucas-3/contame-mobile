import {GoogleSignin, statusCodes} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import axios from 'axios';
import {getLogin} from '../../../config/routes';
import token from '../../../services/token';
import {configureHooks} from '../../../config/configure_app';
import Loading from '../../common/loading';
import {LoginScreen} from './login_screen';
import {useDispatch} from 'react-redux';
import {saveConfig} from '../../../redux/actions/config';
import {saveUserData} from '../../../redux/actions/user';
import {ToastAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const signIn = async (callback) => {
  const getFirebaseToken = async () => await messaging().getToken();

  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const firebaseToken = await getFirebaseToken();

    const resp = await axios.post(getLogin(), {
      token: userInfo.idToken,
      firebaseToken,
    });

    return {
      ...userInfo,
      ...resp.data,
    };
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      ToastAndroid.show(
        'Tenes que seleccionar una cuenta para continar',
        ToastAndroid.LONG,
      );
      callback();
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
  const dispatch = useDispatch();

  const onPress = async () => {
    setLodaing(true);
    const data = await signIn(() => setLodaing(false));

    token.token = data.token;
    await AsyncStorage.setItem('token', data.token);
    configureHooks();

    dispatch(saveConfig({token: data.token, firstLogin: data.firstLogin}));

    dispatch(
      saveUserData({
        name: data.user.givenName,
        surname: data.user.familyName,
        photo: data.user.photo,
        email: data.user.email,
      }),
    );

    setLodaing(false);
  };
  return loading ? <Loading /> : <LoginScreen onPress={onPress} />;
};
