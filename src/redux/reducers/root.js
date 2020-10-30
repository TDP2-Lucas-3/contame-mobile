import {combineReducers} from 'redux';
import configReducer from './config';
import {userReducer} from './user';

export default combineReducers({
  config: configReducer,
  user: userReducer,
});
