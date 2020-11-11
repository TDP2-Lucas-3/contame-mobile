import React from 'react';
import {colors, Icon, Text} from 'react-native-elements';
import {View} from 'react-native';
import {styles} from './styles';

export const ReportCardBottomBar = (props) => {
  return (
    <View style={styles.voteIcon}>
      <Icon
        color={props.voteByUser ? colors.primary : 'black'}
        name={'thumb-up-alt'}
        type="material"
        size={15}
      />
      <Text>{props.votes}</Text>
    </View>
  );
};
