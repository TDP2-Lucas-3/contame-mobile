import React, {useEffect, useState} from 'react';
import MainNavigator from '../../navigation/main_navigator';
import Loading from '../../common/loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      setToken(await AsyncStorage.getItem('token'));
      setLoading(false);
    };
    fetchToken();
  });

  return loading ? <Loading /> : <MainNavigator token={token} />;
};

export default WelcomeScreen;
