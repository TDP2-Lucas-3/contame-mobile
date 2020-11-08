import token from './token';
import axios from 'axios';
import {getReport} from '../config/routes';

export const fetchReport = async (reportId) => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return axios.get(getReport(reportId), {headers});
};
