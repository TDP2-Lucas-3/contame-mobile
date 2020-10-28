import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportsList from '../screens/reports/list/reports_list';
import {LoginScreen} from '../screens/login/login_screen';
import {FirstLoginEditContainer} from '../screens/login/first_login_edit_container';
import {LoginContainer} from '../screens/login/login_container';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Ingresar"
      component={LoginContainer}
      options={{title: 'Ingresar', headerShown: false}}
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
    <Stack.Screen name="Nueva incidencia" component={NewReportScreen} />
    <Stack.Screen
      name="login_edit"
      options={{title: 'Confirmá tus datos'}}
      component={FirstLoginEditContainer}
    />
  </Stack.Navigator>
);

export default MainNavigator;
