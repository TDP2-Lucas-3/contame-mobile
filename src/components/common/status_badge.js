import {Badge} from 'react-native-elements';
import {styles} from '../../styles/common';
import {verboseReportState} from '../../utils/verbose_report_names';
import React from 'react';

export const StatusBadge = (props) => {
  const statusMap = {
    REPORTADO: 'warning',
    EN_PROGRESO: 'warning',
    RESUELTO: 'success',
    ARCHIVADO: 'error',
  };
  return (
    <Badge
      badgeStyle={props.styles || styles.report_status_badge_no_icon}
      status={statusMap[props.state]}
      textStyle={props.textStyle}
      value={verboseReportState(props.state)}
    />
  );
};
