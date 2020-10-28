import React from 'react';
import {Text, View} from 'react-native';

import {styles} from '../../../styles/login_screen';

export function Logo() {
  return (
    <View style={styles.logo}>
      <Text style={styles.logoFirst}>Conta</Text>
      <Text style={styles.logoSecond}>ME</Text>
    </View>
  );
}
