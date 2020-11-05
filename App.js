import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/components/screens/welcome/welcome_screen';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
import {configure} from './src/services/notifications';

const App = () => {
  useEffect(() => {
    return configure();
  }, []);

  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
