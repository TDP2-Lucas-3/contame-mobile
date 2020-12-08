import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/components/screens/welcome/welcome_screen';
import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
import {configure} from './src/services/notifications';
import {Provider as PaperProvider} from 'react-native-paper';
import Loading from './src/components/common/loading';
import {host} from './app.json';

const linking = {
  prefixes: [`${host}/contame/mobile`],
  config: {
    screens: {
      drawer: {
        screens: {
          reports: {
            screens: {
              ReportDetails: 'report',
            },
          },
        },
      },
    },
  },
};

const App = () => {
  useEffect(() => {
    return configure();
  }, []);

  return (
    <Provider store={configureStore()}>
      <PaperProvider>
        <NavigationContainer linking={linking} fallback={<Loading />}>
          <WelcomeScreen />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
