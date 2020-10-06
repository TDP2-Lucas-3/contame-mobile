import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigatior from './src/components/navigation/main_navigator';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigatior />
    </NavigationContainer>
  );
};

export default App;
