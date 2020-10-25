import React from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';

const ReportDetailsContainer = ({navigation}) => {
  const [{data, loading}] = useAxios(
    getReport(navigation.getParam('reportId')),
  );

  return loading ? <Loading /> : <ReportDetails report={data} />;
};

export default ReportDetailsContainer;
