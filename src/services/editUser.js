import axios from 'axios';
import {getUsers} from '../config/routes';
import token from './token';

export const editUser = async ({firstName, lastName, photo}) => {
  const headers = {
    Authorization: `Bearer ${token.token}`,
  };
  return await axios.put(
    getUsers(),
    {name: firstName, surname: lastName, photo},
    {headers},
  );
};
