import React from 'react';
import {View} from 'react-native';
import {styles} from '../../../../styles/common';
import NewReport from './new_report';

const NewReportScreen = ({navigation}) => (
  <View style={styles.container}>
    <NewReport navigation={navigation} />
  </View>
);

export default NewReportScreen;
