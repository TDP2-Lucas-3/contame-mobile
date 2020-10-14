import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Nueva incidencia" component={NewReportScreen} />
  </Stack.Navigator>
);

export default MainNavigator;
