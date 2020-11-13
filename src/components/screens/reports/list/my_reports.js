import React from 'react';
import {getMyReports} from '../../../../config/routes';
import ReportsList from './reports_list';

const MyReports = (props) => (
  <ReportsList {...props} reportsAPI={getMyReports()} />
);

export default MyReports;
