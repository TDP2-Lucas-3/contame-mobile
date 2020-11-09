import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportsList from '../screens/reports/list/reports_list';
import ReportDetailsContainer from '../screens/reports/details/report_details_container';
import {getHeaderOptions} from '../../utils/common';

const Stack = createStackNavigator();

const ReportStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reports"
      component={ReportsList}
      options={getHeaderOptions('Mis Incidencias', navigation)}
    />
    <Stack.Screen
      name="ReportDetails"
      component={ReportDetailsContainer}
      options={{title: 'Detalle de incidencia', headerShown: false}}
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
