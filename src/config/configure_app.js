import Axios from 'axios';
import token from '../services/token';
import {configure} from 'axios-hooks';

export function configureHooks() {
  const axios = Axios.create({
    headers: {Authorization: `Bearer ${token.token}`},
  });

  configure({axios});
}
