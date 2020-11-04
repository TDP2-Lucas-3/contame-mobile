import {IncidentsMap} from './incidents_map';
import React from 'react';
import useAxios from 'axios-hooks';
import {getReports} from '../../../config/routes';
import Loading from '../../common/loading';

export const IncidentsMapContainer = () => {
  const [{data, loading}, _] = useAxios(getReports());
  return loading ? <Loading /> : <IncidentsMap data={data} />;
};
