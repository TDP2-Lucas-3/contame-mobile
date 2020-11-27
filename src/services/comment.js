import axios from 'axios';
import {addComment} from '../config/routes';
import token from './token';

export const postComment = (comment, reportId) => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return axios.post(addComment(reportId), {comment}, {headers});
};
