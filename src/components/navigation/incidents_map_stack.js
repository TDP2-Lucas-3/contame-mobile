import {Icon} from 'react-native-elements';
import {styles} from '../../styles/common';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IncidentsMapContainer} from '../screens/incidents_map/incidents_map_container';

const Stack = createStackNavigator();

export const IncidentsMapStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reports"
      component={IncidentsMapContainer}
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
