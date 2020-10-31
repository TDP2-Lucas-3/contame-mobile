import React, {useEffect, useState} from 'react';
import MainNavigator from '../../navigation/main_navigator';
import Loading from '../../common/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tokenConfig from '../../../services/token';
import {configureHooks} from '../../../config/configure_app';
import {useDispatch} from 'react-redux';
import {saveConfig} from '../../../redux/actions/config';
import {fetchUser} from '../../../services/fetchUser';
import {saveUserData} from '../../../redux/actions/user';

const WelcomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      await AsyncStorage.removeItem('token');

      const savedToken = await AsyncStorage.getItem('token');
      if (savedToken) {
        dispatch(saveConfig({token: savedToken, firstLogin: false}));
        tokenConfig.token = savedToken;
        configureHooks();
        const {data} = await fetchUser();
        dispatch(saveUserData(data));
      }
      setLoading(false);
    };
    try {
      fetchToken();
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return loading ? <Loading /> : <MainNavigator />;
};

export default WelcomeScreen;
