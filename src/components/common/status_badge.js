import {Badge} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {styles} from '../../styles/common';
import React from 'react';
import COLORS from '../../styles/colors';

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
      textStyle={[props.textStyle, {color: COLORS.secondary}, styles.raleway]}
      value={props.state}
    />
  );
};
