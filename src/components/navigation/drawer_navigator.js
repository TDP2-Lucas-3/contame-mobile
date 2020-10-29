import React from 'react';
import {View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import ReportStack from './report_stack';
import {Avatar, Text} from 'react-native-elements';
import {styles} from '../../styles/common';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="reports" drawerContent={DrawerContent}>
    <Drawer.Screen
      name="reports"
      component={ReportStack}
      options={{title: 'Incidencias'}}
    />
  </Drawer.Navigator>
);

const DrawerContent = (props) => {
  return (
    <View style={[styles.alignCenter]}>
      <Avatar
        source={{uri: 'https://picsum.photos/200/300'}}
        rounded
        size="large"
        containerStyle={styles.m_3}
      />
      <Text>Usuario con apellido</Text>
      <View style={[styles.fullW, styles.mv_2]}>
        <DrawerItemList {...props} />
      </View>
    </View>
  );
};

export default DrawerNavigator;
