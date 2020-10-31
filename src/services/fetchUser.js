import axios from 'axios';
import {getUser} from '../config/routes';
import token from './token';

export const fetchUser = async () => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return await axios.get(getUser(), {headers});
};
