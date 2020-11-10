import React from 'react';
import {View} from 'react-native';
import RalewayText from './raleway_text';
import {Icon} from 'react-native-elements';
import {styles} from '../../styles/common';

const EmptyMessage = (props) => (
  <View style={styles.alignCenter}>
    <Icon name="exclamation-triangle" type="font-awesome-5" />
    <RalewayText h3>{props.title}</RalewayText>
    <RalewayText h5>{props.message}</RalewayText>
  </View>
);

export default EmptyMessage;
