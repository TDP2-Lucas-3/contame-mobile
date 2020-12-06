import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import COLORS from '../../styles/colors';
import {LogoSecondary} from '../screens/login/logo';
import RalewayText from './raleway_text';

const loadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
  loading_container: {
    marginTop: 50,
  },
});

const Loading = () => (
  <View style={loadingStyles.container}>
    <LogoSecondary />
    <View style={loadingStyles.loading_container}>
      <ActivityIndicator color={COLORS.secondary} size="large" />
      <RalewayText style={loadingStyles.text}>Cargando...</RalewayText>
    </View>
  </View>
);

export default Loading;
