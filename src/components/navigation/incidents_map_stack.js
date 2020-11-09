import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IncidentsMapContainer} from '../screens/incidents_map/incidents_map_container';
import ReportDetailsContainer from '../screens/reports/details/report_details_container';
import {getHeaderOptions} from '../../utils/common';

const Stack = createStackNavigator();

export const IncidentsMapStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reports"
      component={IncidentsMapContainer}
      options={getHeaderOptions('Mapa de Incidencias', navigation)}
    />
    <Stack.Screen
      name="MapReportDetails"
      component={ReportDetailsContainer}
      options={{title: 'Detalle de incidencia', headerShown: false}}
    />
  </Stack.Navigator>
);
