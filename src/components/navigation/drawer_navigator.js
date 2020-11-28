import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Avatar, Icon} from 'react-native-elements';
import {styles} from '../../styles/common';
import {useDispatch, useSelector} from 'react-redux';
import {saveConfig} from '../../redux/actions/config';
import {GoogleSignin} from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserProfileContainer} from '../screens/user_profile/user_profile_container';
import {saveUserData} from '../../redux/actions/user';
import useHandleNotification from '../../hooks/useHandleNotification';
import {useNavigation} from '@react-navigation/native';
import MyReportsStack from './my_reports_stack';
import GeneralReportsStack from './general_reports_stack';
import RalewayText from '../common/raleway_text';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const navigation = useNavigation();

  useHandleNotification((notification) => {
    navigation.navigate('ReportDetails', {
      reportId: notification.data.id
        ? parseInt(notification.data.id, 10)
        : parseInt(notification.data.reportId, 10),
    });
  });

  return (
    <Drawer.Navigator
      initialRouteName="myReports"
      drawerContent={(props) => <DrawerContent {...props} />}
      drawerContentOptions={{
        labelStyle: [styles.color_white, styles.raleway],
      }}>
      <Drawer.Screen
        name="myReports"
        component={MyReportsStack}
        options={{
          title: 'Mis Incidencias',
          drawerIcon: () => (
            <Icon
              name="clipboard-check"
              type="font-awesome-5"
              size={15}
              color="white"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="reports"
        component={GeneralReportsStack}
        options={{
          title: 'Incidencias',
          drawerIcon: () => (
            <Icon
              name="clipboard-list"
              type="font-awesome-5"
              size={15}
              color="white"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        component={UserProfileContainer}
        options={{
          title: 'Mi Cuenta',
          drawerIcon: () => (
            <Icon name="user" type="font-awesome-5" size={15} color="white" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
      contentContainerStyle={[
        styles.container,
        styles.justifyBetween,
        styles.bg_secondary,
      ]}>
      <View style={styles.fullW}>
        <View style={styles.alignCenter}>
          <Avatar
            source={{uri: user.photo}}
            rounded
            size="large"
            containerStyle={styles.m_3}
          />
          <RalewayText
            bold
            style={
              styles.color_white
            }>{`${user.firstName} ${user.lastName}`}</RalewayText>
        </View>
        <View style={styles.mv_2}>
          <DrawerItemList {...props} />
        </View>
      </View>
      <View style={[styles.bottom, styles.fullW]}>
        <DrawerItem
          label={() => (
            <RalewayText style={styles.color_white}>Salir</RalewayText>
          )}
          icon={() => (
            <Icon
              name="sign-out-alt"
              type="font-awesome-5"
              size={15}
              color="white"
            />
          )}
          onPress={onLogout}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
