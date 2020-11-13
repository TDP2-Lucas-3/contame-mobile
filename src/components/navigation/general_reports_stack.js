import React from 'react';
import GeneralReports from '../screens/reports/list/general_reports';
import ReportStack from './report_stack';

const GeneralReportsStack = (props) => (
  <ReportStack {...props} screen={GeneralReports} title="Incidencias" />
);

export default GeneralReportsStack;
