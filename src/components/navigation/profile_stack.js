import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {getHeaderOptions} from '../../utils/common';
import {UserProfileContainer} from '../screens/user_profile/user_profile_container';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={UserProfileContainer}
      options={getHeaderOptions('Mi Cuenta', navigation)}
    />
  </Stack.Navigator>
);

export default ProfileStack;
