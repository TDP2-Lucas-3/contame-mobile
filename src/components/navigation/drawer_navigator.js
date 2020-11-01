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
import {useDispatch, useSelector} from 'react-redux';
import {saveConfig} from '../../redux/actions/config';
import {GoogleSignin} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserProfileContainer} from '../screens/user_profile/user_profile_container';
import {saveUserData} from '../../redux/actions/user';

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
    <Drawer.Screen
      name="profile"
      component={UserProfileContainer}
      options={{
        title: 'Mi Cuenta',
        drawerIcon: () => <Icon name="user" type="font-awesome-5" size={15} />,
      }}
    />
  </Drawer.Navigator>
);

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onLogout = async () => {
    dispatch(saveConfig({token: null}));
    dispatch(saveUserData({}));
    await AsyncStorage.removeItem('token');
    GoogleSignin.signOut();
  };

  return (
    <DrawerContentScrollView
      contentContainerStyle={[styles.container, styles.justifyBetween]}>
      <View style={styles.fullW}>
        <View style={styles.alignCenter}>
          <Avatar
            source={{uri: user.photo}}
            rounded
            size="large"
            containerStyle={styles.m_3}
          />
          <Text>{`${user.firstName} ${user.lastName}`}</Text>
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
          onPress={onLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
