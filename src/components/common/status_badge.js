import {Badge} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {styles} from '../../styles/common';
import React from 'react';

const badgeStyles = StyleSheet.create({
  badge: {
    borderWidth: 0.5,
    borderColor: 'black',
  },
});

export const StatusBadge = (props) => {
  return (
    <Badge
      badgeStyle={[
        props.styles || styles.report_status_badge_no_icon,
        badgeStyles.badge,
        {backgroundColor: props.stateColor},
      ]}
      textStyle={[props.textStyle, styles.color_black, styles.raleway_bold]}
      value={props.state}
    />
  );
};
