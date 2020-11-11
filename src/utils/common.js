import React from 'react';
import {Icon} from 'react-native-elements';
import {styles} from '../styles/common';

export const getHeaderOptions = (title, navigation) => ({
  title,
  headerLeft: () => (
    <Icon
      name="bars"
      type="font-awesome-5"
      containerStyle={styles.menu_bars_container}
      onPress={() => navigation.openDrawer()}
      size={15}
    />
  ),
  headerRight: () => (
    <Icon
      name="bell"
      type="font-awesome-5"
      containerStyle={styles.notification_icon_container}
      size={15}
    />
  ),
  headerTitleAlign: 'center',
  headerStyle: styles.bg_secondary,
  headerTitleStyle: [styles.color_white, styles.raleway],
});
