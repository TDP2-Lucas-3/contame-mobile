import React from 'react';
import {View} from 'react-native';
import ReportsList from './reports_list';
import {styles} from '../../styles/common';

const HomeScreen = () => (
  <View style={styles.container}>
    <ReportsList />
  </View>
);

export default HomeScreen;
