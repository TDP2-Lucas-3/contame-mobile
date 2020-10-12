import React from 'react';
import {View, Text} from 'react-native';

const ReportDetails = (props) => (
  <View>
    <Text>{props.title}</Text>
    <Text>{props.description}</Text>
  </View>
);

export default ReportDetails;
