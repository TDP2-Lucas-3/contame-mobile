import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {FirstLoginEditContainer} from '../screens/login/first_login_edit_container';
import {LoginContainer} from '../screens/login/login_container';
import {useSelector} from 'react-redux';
import DrawerNavigator from './drawer_navigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const config = useSelector((state) => state.config);

  return (
    <Stack.Navigator>
      {config.token ? (
        <>
          {config.firstLogin ? (
            <Stack.Screen
              name="login_edit"
              options={{headerShown: false}}
              component={FirstLoginEditContainer}
            />
          ) : (
            <Stack.Screen
              name="drawer"
              component={DrawerNavigator}
              options={{headerShown: false}}
            />
          )}
        </>
      ) : (
        <>
          <Stack.Screen
            name="Ingresar"
            component={LoginContainer}
            options={{title: 'Ingresar', headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
