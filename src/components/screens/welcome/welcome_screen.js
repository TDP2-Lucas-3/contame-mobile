import React, {useEffect, useState} from 'react';
import MainNavigator from '../../navigation/main_navigator';
import Loading from '../../common/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tokenConfig from '../../../services/token';
import {configureHooks} from '../../../config/configure_app';
import {useDispatch} from 'react-redux';
import {saveConfig} from '../../../redux/actions/config';

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      const savedToken = await AsyncStorage.getItem('token');
      if (savedToken) {
        dispatch(saveConfig({token: saveConfig, firstLogin: false}));
        tokenConfig.token = savedToken;
        configureHooks();
      }
      setLoading(false);
    };
    fetchToken();
  }, []);

  return loading ? <Loading /> : <MainNavigator />;
};

export default WelcomeScreen;
