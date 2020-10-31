import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewReportScreen from '../screens/reports/new/new_report_screen';
import ReportsList from '../screens/reports/list/reports_list';
import {Icon} from 'react-native-elements';
import {styles} from '../../styles/common';

const Stack = createStackNavigator();

const ReportStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reports"
      component={ReportsList}
      options={{
        title: 'Incidencias',
        headerLeft: () => (
          <Icon
            name="bars"
            type="font-awesome-5"
            containerStyle={styles.ml_2}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
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
