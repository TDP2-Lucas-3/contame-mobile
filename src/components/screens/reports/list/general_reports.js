import React from 'react';
import {getReports} from '../../../../config/routes';
import ReportsList from './reports_list';

const GeneralReports = (props) => (
  <ReportsList {...props} reportsAPI={getReports()} />
);

export default GeneralReports;
