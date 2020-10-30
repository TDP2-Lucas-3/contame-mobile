import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportsList from '../screens/reports/list/reports_list';

const Stack = createStackNavigator();

const ReportStack = () => (
  <Stack.Navigator>
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
    <Stack.Screen name="Nueva incidencia" component={NewReportScreen} />
  </Stack.Navigator>
);

export default ReportStack;
