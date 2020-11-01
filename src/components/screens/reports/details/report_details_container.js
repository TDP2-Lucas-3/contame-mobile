import React from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';

const ReportDetailsContainer = ({route}) => {
  const {reportId} = route.params;
  const [{data, loading}] = useAxios(getReport(reportId));

  return loading ? <Loading /> : <ReportDetails report={data} />;
};

export default ReportDetailsContainer;
