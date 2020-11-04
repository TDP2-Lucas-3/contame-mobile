import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/components/screens/welcome/welcome_screen';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

const App = () => {
  return (
    <Provider store={configureStore()}>
      <NavigationContainer>
        <WelcomeScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
