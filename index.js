/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import moment from 'moment';
import 'moment/locale/es';
import {GoogleSignin} from '@react-native-community/google-signin';
import {OAUTH_CLIENT_ID} from './src/config/constants';

moment.locale('es');

GoogleSignin.configure({
  webClientId: OAUTH_CLIENT_ID,
});

AppRegistry.registerComponent(appName, () => App);
