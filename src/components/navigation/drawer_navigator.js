import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import ReportStack from './report_stack';
import {Avatar, Text, Icon} from 'react-native-elements';
import {styles} from '../../styles/common';
import {useDispatch} from 'react-redux';
import {saveConfig} from '../../redux/actions/config';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator
    initialRouteName="reports"
    drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="reports"
      component={ReportStack}
      options={{
        title: 'Incidencias',
        drawerIcon: () => (
          <Icon name="clipboard-list" type="font-awesome-5" size={15} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, styles.justifyBetween]}>
      <View style={styles.fullW}>
        <View style={styles.alignCenter}>
          <Avatar
            source={{uri: 'https://picsum.photos/200/300'}}
            rounded
            size="large"
            containerStyle={styles.m_3}
          />
          <Text>Usuario con apellido</Text>
        </View>
        <View style={styles.mv_2}>
          <DrawerItemList {...props} />
        </View>
      </View>
      <View style={[styles.bottom, styles.fullW]}>
        <DrawerItem
          label="Salir"
          icon={() => (
            <Icon name="sign-out-alt" type="font-awesome-5" size={15} />
          )}
          onPress={() => dispatch(saveConfig({token: null}))}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
