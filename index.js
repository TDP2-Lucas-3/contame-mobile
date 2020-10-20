/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');

AppRegistry.registerComponent(appName, () => App);
