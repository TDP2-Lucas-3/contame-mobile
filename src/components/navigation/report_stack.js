import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportDetailsContainer from '../screens/reports/details/report_details_container';
import {getHeaderOptions, getHeaderBack} from '../../utils/common';

const Stack = createStackNavigator();

const ReportStack = ({navigation, screen, title}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="NewReport"
      component={NewReportScreen}
      options={{
        title: '',
        headerTransparent: true,
        headerLeft: () => getHeaderBack(navigation),
      }}
    />
    <Stack.Screen
      name="Reports"
      component={screen}
      options={getHeaderOptions(title, navigation)}
    />
    <Stack.Screen
      name="ReportDetails"
      component={ReportDetailsContainer}
      options={{title: 'Detalle de incidencia', headerShown: false}}
    />
    
  </Stack.Navigator>
);

export default ReportStack;
