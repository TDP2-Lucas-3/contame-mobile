import React from 'react';
import {getReport} from '../../../../config/routes';
import useAxios from 'axios-hooks';
import ReportDetails from './report_details';
import Loading from '../../../common/loading';

const ReportDetailsContainer = ({navigation}) => {
  // const [{data, loading}] = useAxios(
  //   getReport(navigation.getParam('reportId')),
  // );

  return false ? <Loading /> : <ReportDetails report={{title: 'falla electrica', 'creationDate': new Date(), 'description': 'some very very long description some very very long description some very very long description some very very long description some very very long description', 'images': ['https://picsum.photos/200/300'], location: {latitude: -34.61667, longitude: -58.36667}}} />;
};

export default ReportDetailsContainer;
