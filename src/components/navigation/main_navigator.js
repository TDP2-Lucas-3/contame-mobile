import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportsList from '../screens/reports/list/reports_list';
import ReportDetailsContainer from '../screens/reports/details/report_details_container';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ReportDetails"
      component={ReportDetailsContainer}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Reports"
      component={ReportsList}
      options={{title: 'Incidencias'}}
    />
    <Stack.Screen
      name="NewReport"
      component={NewReportScreen}
      options={{title: 'Nueva incidencia'}}
    />
  </Stack.Navigator>
);

export default MainNavigator;
