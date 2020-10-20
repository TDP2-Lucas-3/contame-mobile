import React from 'react';
import {FlatList, Text} from 'react-native';
import {getReports} from '../../../../config/routes';
import ReportDetails from './report_details';
import useAxios from 'axios-hooks';

const ReportsList = () => {
  const [{data, loading}] = useAxios(getReports());

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <FlatList
      data={data}
      renderItem={({item}) => <ReportDetails {...item} />}
    />
  );
};

export default ReportsList;
