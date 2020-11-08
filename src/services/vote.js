import axios from 'axios';
import {addVote, removeVote} from '../config/routes';
import token from './token';

export const vote = async (reportId) => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return axios.post(addVote(reportId), null, {headers});
};

export const unvote = async (reportId) => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };

  return axios.delete(removeVote(reportId), {headers});
};
