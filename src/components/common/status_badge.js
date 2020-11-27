import {Badge} from 'react-native-elements';
import {styles} from '../../styles/common';
import React from 'react';

export const StatusBadge = (props) => {
  return (
    <Badge
      badgeStyle={[
        props.styles || styles.report_status_badge_no_icon,
        {backgroundColor: props.color},
      ]}
      textStyle={props.textStyle}
      value={props.state}
    />
  );
};
