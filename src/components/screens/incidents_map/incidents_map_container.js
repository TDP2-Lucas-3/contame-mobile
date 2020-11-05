import {IncidentsMap} from './incidents_map';
import React from 'react';
import useAxios from 'axios-hooks';
import {getReports} from '../../../config/routes';
import Loading from '../../common/loading';

export const IncidentsMapContainer = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [{data, loading}, refetch] = useAxios(getReports());
  return loading ? (
    <Loading />
  ) : (
    <IncidentsMap navigation={props.navigation} data={data} />
  );
};
