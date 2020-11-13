import React from 'react';
import MyReports from '../screens/reports/list/my_reports';
import ReportStack from './report_stack';

const MyReportsStack = (props) => (
  <ReportStack {...props} screen={MyReports} title="Mis Incidencias" />
);

export default MyReportsStack;
