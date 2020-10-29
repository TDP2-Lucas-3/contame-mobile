import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/components/screens/welcome/welcome_screen';

const App = () => {
  return (
    <NavigationContainer>
      <WelcomeScreen />
    </NavigationContainer>
  );
};

export default App;
