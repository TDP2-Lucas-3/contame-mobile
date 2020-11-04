import {Icon} from 'react-native-elements';
import {styles} from '../../styles/common';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IncidentsMap} from '../screens/incidents_map/incidents_map';

const Stack = createStackNavigator();

export const IncidentsMapStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reports"
      component={IncidentsMap}
      options={{
        title: 'Mapa de Incidencias',
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
  </Stack.Navigator>
);
